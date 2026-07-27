import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Dharmik Shinde | Backend & Systems Engineer",
  description: "Portfolio of Dharmik Vivek Shinde, a backend engineer building APIs, distributed systems, and self-hosted server infrastructure.",
  keywords: ["Backend Engineer", "Cloud Infrastructure", "Distributed Systems", "Go", "Python", "Quarkus", "Docker", "S3", "Security"],
  authors: [{ name: "Dharmik Vivek Shinde" }],
  openGraph: {
    title: "Dharmik Shinde | Backend & Systems Engineer",
    description: "Portfolio of Dharmik Vivek Shinde, a backend engineer building APIs, distributed systems, and self-hosted server infrastructure.",
    type: "website",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <MagneticCursor />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
