import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { AuditResult } from '@/types';

interface AuditReportEmailProps {
  auditResult: AuditResult;
  reportUrl: string;
  role?: string;
}

export default function AuditReportEmail({
  auditResult,
  reportUrl,
  role,
}: AuditReportEmailProps) {
  const { totalMonthlySavings, totalAnnualSavings, recommendations } = auditResult;

  const savingsRecs = recommendations.filter((r) => r.savingsAmount > 0);
  const reviewRecs = recommendations.filter(
    (r) => r.savingsAmount === 0 && r.recommendedAction !== 'No changes needed'
  );
  const optimalRecs = recommendations.filter(
    (r) => r.recommendedAction === 'No changes needed'
  );

  const hasAnySavings = totalMonthlySavings > 0;

  return (
    <Html>
      <Head />
      <Preview>
        {hasAnySavings
          ? `You could save $${totalMonthlySavings.toFixed(0)}/month on AI tools`
          : 'Your AI stack is well optimized'}
      </Preview>
      <Body style={main}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={logo}>SpendLens</Text>
          </Section>

          {/* Hero */}
          <Section style={heroSection}>
            {hasAnySavings ? (
              <>
                <Text style={heroLabel}>Total Potential Savings</Text>
                <Heading style={heroNumber}>
                  ${totalMonthlySavings.toFixed(0)}/month
                </Heading>
                <Text style={heroSub}>
                  ${totalAnnualSavings.toFixed(0)} annually — based on your current AI subscriptions
                </Text>
              </>
            ) : (
              <>
                <Text style={heroLabel}>Audit Complete</Text>
                <Heading style={heroNumberGreen}>
                  Spending Optimized
                </Heading>
                <Text style={heroSub}>
                  Your current AI stack aligns well with your team size and use case.
                </Text>
              </>
            )}
          </Section>

          <Hr style={divider} />

          {/* Savings recommendations */}
          {savingsRecs.length > 0 && (
            <Section style={section}>
              <Text style={sectionLabel}>Recommended Changes</Text>
              {savingsRecs.map((rec, i) => (
                <Section key={i} style={recCard}>
                  <Section style={recHeader}>
                    <Text style={recTool}>{rec.tool}</Text>
                    <Text style={savingsBadge}>
                      −${rec.savingsAmount.toFixed(0)}/mo
                    </Text>
                  </Section>
                  <Text style={recAction}>{rec.recommendedAction}</Text>
                  <Text style={recReason}>{rec.reason}</Text>
                </Section>
              ))}
            </Section>
          )}

          {/* Review items */}
          {reviewRecs.length > 0 && (
            <Section style={section}>
              <Text style={sectionLabel}>Worth Reviewing</Text>
              {reviewRecs.map((rec, i) => (
                <Section key={i} style={recCardNeutral}>
                  <Text style={recTool}>{rec.tool}</Text>
                  <Text style={recAction}>{rec.recommendedAction}</Text>
                  <Text style={recReason}>{rec.reason}</Text>
                </Section>
              ))}
            </Section>
          )}

          {/* Optimal items */}
          {optimalRecs.length > 0 && (
            <Section style={section}>
              <Text style={sectionLabel}>Optimized</Text>
              {optimalRecs.map((rec, i) => (
                <Section key={i} style={recCardOptimal}>
                  <Text style={recTool}>{rec.tool}</Text>
                  <Text style={recReasonOptimal}>{rec.reason}</Text>
                </Section>
              ))}
            </Section>
          )}

          <Hr style={divider} />

          {/* CTA */}
          <Section style={ctaSection}>
            <Text style={ctaText}>View your full interactive report</Text>
            <Link href={reportUrl} style={ctaButton}>
              View Full Report →
            </Link>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              SpendLens — Free AI Spend Audit for Startups
            </Text>
            <Text style={footerSub}>
              You received this because you saved your audit report.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  overflow: 'hidden' as const,
};

const header = {
  backgroundColor: '#166534',
  padding: '20px 32px',
};

const logo = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0',
};

const heroSection = {
  padding: '32px 32px 24px',
  textAlign: 'center' as const,
};

const heroLabel = {
  fontSize: '11px',
  fontWeight: '600',
  color: '#64748b',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  margin: '0 0 8px',
};

const heroNumber = {
  fontSize: '42px',
  fontWeight: '800',
  color: '#166534',
  margin: '0 0 8px',
};

const heroNumberGreen = {
  fontSize: '32px',
  fontWeight: '800',
  color: '#166534',
  margin: '0 0 8px',
};

const heroSub = {
  fontSize: '14px',
  color: '#64748b',
  margin: '0',
};

const divider = {
  borderColor: '#e2e8f0',
  margin: '0',
};

const section = {
  padding: '24px 32px 0',
};

const sectionLabel = {
  fontSize: '11px',
  fontWeight: '600',
  color: '#64748b',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  margin: '0 0 12px',
};

const recCard = {
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '6px',
  padding: '16px',
  marginBottom: '8px',
};

const recCardNeutral = {
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '6px',
  padding: '16px',
  marginBottom: '8px',
};

const recCardOptimal = {
  backgroundColor: '#f0fdf4',
  border: '1px solid #dcfce7',
  borderRadius: '6px',
  padding: '16px',
  marginBottom: '8px',
};

const recHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '4px',
};

const recTool = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#0f172a',
  margin: '0 0 4px',
};

const savingsBadge = {
  fontSize: '13px',
  fontWeight: '700',
  color: '#166534',
  margin: '0 0 4px',
};

const recAction = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#0f172a',
  margin: '0 0 4px',
};

const recReason = {
  fontSize: '12px',
  color: '#64748b',
  margin: '0',
  lineHeight: '1.5',
};

const recReasonOptimal = {
  fontSize: '12px',
  color: '#166534',
  margin: '0',
  lineHeight: '1.5',
};

const ctaSection = {
  padding: '24px 32px',
  textAlign: 'center' as const,
};

const ctaText = {
  fontSize: '14px',
  color: '#64748b',
  margin: '0 0 16px',
};

const ctaButton = {
  backgroundColor: '#166534',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '12px 28px',
  borderRadius: '6px',
  textDecoration: 'none',
  display: 'inline-block',
};

const footer = {
  padding: '16px 32px 24px',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '12px',
  color: '#94a3b8',
  margin: '0 0 4px',
};

const footerSub = {
  fontSize: '11px',
  color: '#cbd5e1',
  margin: '0',
};