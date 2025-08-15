import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileOptimizations } from "@/components/mobile-optimizations"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Programmers' Paradise - CSVTU UTD-1 Bhilai",
  description: "The official technical society of CSVTU UTD-1 Bhilai for tech enthusiasts, coders, and innovators.",
  generator: "v0.dev",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <MobileOptimizations />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
