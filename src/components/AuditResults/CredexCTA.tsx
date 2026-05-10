'use client';

interface CredexCTAProps {
  totalMonthlySavings: number;
}

export default function CredexCTA({ totalMonthlySavings }: CredexCTAProps) {
  return (
    <div className="bg-green-800 rounded-lg px-6 py-6 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-green-300 uppercase tracking-wide mb-1">
            Credex — AI Credits at a Discount
          </p>
          <h3 className="text-lg font-semibold text-white mb-1">
            You could save even more with Credex.
          </h3>
          <p className="text-sm text-green-200 max-w-md">
            Your team spends enough on AI tools to qualify for discounted
            prepaid credits. Credex sources unused AI infrastructure credits
            from companies that overforecast — same tools, lower cost.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href="https://credex.rocks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-800 text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-green-50 transition-colors whitespace-nowrap"
          >
            Book a Free Consultation →
          </a>
          <p className="text-xs text-green-300 mt-2 text-center">
            No commitment. 15 minutes.
          </p>
        </div>
      </div>

      {/* Savings callout */}
      <div className="mt-4 pt-4 border-t border-green-700">
        <p className="text-xs text-green-300">
          Based on your audit, optimizing your plan spend saves{' '}
          <span className="text-white font-semibold">
            ${totalMonthlySavings.toFixed(0)}/month
          </span>
          . Credex credits can reduce your remaining spend further on top of
          that.
        </p>
      </div>
    </div>
  );
}