import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Issue Time Tracker — Track Time Spent on Issues & PRs',
  description: 'Browser extension that tracks active time on GitHub issues and PRs. Generate billing reports and productivity analysis. Perfect for freelancers and agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="508bee29-5017-4976-ae9c-c49206c1e35e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
