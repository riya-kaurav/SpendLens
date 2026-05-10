'use client';

import { AuditResult } from '@/types';

interface HeroSectionProps {
  result: AuditResult;
}

export default function HeroSection({ result }: HeroSectionProps) {
  const { totalMonthlySavings, totalAnnualSavings, savingsCategory } = result;

  const messages = {
    high: {
      label: 'Significant overspend detected',
      headline: "You're leaving money on the table.",
      sub: 'Here is exactly where and how to fix it.',
      labelColor: 'bg-red-50 text-red-600 border border-red-100',
    },
    low: {
      label: 'Some optimizations available',
      headline: 'A few tweaks could save you money.',
      sub: 'Small changes, real savings.',
      labelColor: 'bg-yellow-50 text-yellow-700 border border-yellow-100',
    },
    optimal: {
      label: 'Spending optimized',
      headline: "You're spending well.",
      sub: 'No significant changes needed based on your current stack.',
      labelColor: 'bg-green-50 text-green-700 border border-green-100',
    },
  };

  const msg = messages[savingsCategory];

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-6 py-8 mb-4">
      {/* Label */}
      <span
        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-4 ${msg.labelColor}`}
      >
        {msg.label}
      </span>

      {/* Headline */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">
        {msg.headline}
      </h1>
      <p className="text-sm text-gray-500 mb-6">{msg.sub}</p>

      {/* Savings numbers */}
      {savingsCategory !== 'optimal' && (
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-5 py-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Monthly Savings
            </p>
            <p className="text-3xl font-bold text-green-800">
              ${totalMonthlySavings.toFixed(0)}
            </p>
          </div>

          <div className="flex-1 bg-green-800 rounded-lg px-5 py-4">
            <p className="text-xs font-medium text-green-200 uppercase tracking-wide mb-1">
              Annual Savings
            </p>
            <p className="text-3xl font-bold text-white">
              ${totalAnnualSavings.toFixed(0)}
            </p>
          </div>
        </div>
      )}

      {savingsCategory === 'optimal' && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-lg px-5 py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-700 shrink-0"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          <p className="text-sm font-medium text-green-800">
            Your current AI stack is well-optimized for your team size and use case.
          </p>
        </div>
      )}
    </div>
  );
}