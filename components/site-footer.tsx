import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Programmers&apos; Paradise
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The official technical society of CSVTU UTD-1 Bhilai for tech enthusiasts, coders, and innovators.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events & Workshops
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Our Clubs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/clubs/programming-workshop"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Programming & Workshop Club
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs/competitive-programming"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Competitive Programming Club
                </Link>
              </li>
              <li>
                <Link href="/clubs/nextronix" className="text-muted-foreground hover:text-foreground transition-colors">
                  Nextronix (Robotics Club)
                </Link>
              </li>
              <li>
                <Link href="/clubs/matlab" className="text-muted-foreground hover:text-foreground transition-colors">
                  Matlab Club
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs/blockchain-web3"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blockchain & Web3 Club
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs/pr-outreach"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  PR & Outreach
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">Get weekly updates on tech trends, projects, and events.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="h-9" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Programmers&apos; Paradise. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
