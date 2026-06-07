import { NextRequest, NextResponse } from 'next/server';
import { runAudit } from '@/lib/audit-engine';
import { createClient } from '@supabase/supabase-js';
import { FormData } from '@/types';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const formData = (await req.json()) as FormData;

    // Run audit server-side
    const result = runAudit(formData);

    // Save to Supabase immediately
    const { error } = await supabase.from('audits').insert({
      id: result.auditId,
      recommendations: result.recommendations,
      total_monthly_savings: result.totalMonthlySavings,
      total_annual_savings: result.totalAnnualSavings,
      savings_category: result.savingsCategory,
      use_case: formData.useCase,
      team_size: formData.teamSize,
      is_public: true,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save audit' },
        { status: 500 }
      );
    }

    return NextResponse.json({ result, formData });
  } catch (err) {
    console.error('Audit error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}