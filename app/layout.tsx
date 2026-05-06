import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Revenue Leak Detector — Find Hidden Revenue Leaks',
  description: 'Analyze Stripe webhooks and transactions to identify failed charges, subscription downgrades, and billing anomalies that cost you revenue.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c6ff2773-1e64-4f33-b5bb-44a9f22b5d58"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
