import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moneeshwar M | AI & Full Stack Developer",
  description:
    "Portfolio of Moneeshwar M - Final-year B.Tech student in AI & Data Science, Full Stack Developer specializing in React, Angular, Python, and AI-driven applications.",
  keywords: [
    "AI",
    "Data Science",
    "Full Stack Developer",
    "React",
    "Angular",
    "Python",
    "Machine Learning",
    "Web Development",
  ],
  authors: [{ name: "Moneeshwar M" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Moneeshwar M | AI & Full Stack Developer",
    description: "Portfolio of Moneeshwar M - AI & Data Science Student, Full Stack Developer",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
