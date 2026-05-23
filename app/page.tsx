export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Freelancers &amp; Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Time Spent on<br />
          <span className="text-[#58a6ff]">GitHub Issues &amp; PRs</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A browser extension that automatically tracks active time on GitHub issues and pull requests. Generate billing reports and productivity insights without lifting a finger.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works on Chrome &amp; Firefox.</p>
        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Auto</div>
            <div className="text-sm text-[#8b949e]">Background tracking</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">CSV</div>
            <div className="text-sm text-[#8b949e]">Billing exports</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Live</div>
            <div className="text-sm text-[#8b949e]">Web dashboard</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-medium mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Browser extension (Chrome & Firefox)',
              'Automatic active time tracking',
              'Per-issue & per-PR breakdowns',
              'CSV export for billing',
              'Web dashboard with reports',
              'Unlimited GitHub repos'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the time tracking work?</h3>
            <p className="text-[#8b949e] text-sm">The browser extension detects when you have a GitHub issue or PR tab active and in focus. It tracks active time automatically — pausing when you switch tabs or go idle.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I export data for client billing?</h3>
            <p className="text-[#8b949e] text-sm">Yes. From the web dashboard you can export time logs as CSV filtered by repo, date range, or issue label — ready to attach to any invoice.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which browsers are supported?</h3>
            <p className="text-[#8b949e] text-sm">The extension works on Chrome, Brave, Edge, and Firefox. Safari support is on the roadmap.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} GitHub Issue Time Tracker. All rights reserved.
      </footer>
    </main>
  )
}
