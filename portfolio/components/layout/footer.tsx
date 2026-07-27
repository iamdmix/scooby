"use client"

import Link from "next/link"
import { Github, Linkedin, Instagram, Code } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/iamdmix", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/dharmik-vivek-shinde-891156282", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/shindedharmik", icon: Code, label: "LeetCode" },
  { href: "https://instagram.com/shindedharmik", icon: Instagram, label: "Instagram" },
]

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "#works", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

const focusAreas = [
  "Distributed Systems",
  "Cloud Infrastructure & S3",
  "Containerization & Homelabs",
  "Observability (Prometheus/Grafana)",
  "Network Security & Tunnels"
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-mono">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
          <Link href="/" className="font-semibold text-foreground hover:text-violet-400 transition-colors">
            dharmikshinde.tech
          </Link>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              {social.label}
            </a>
          ))}
          <a
            href="mailto:dharmikvs26@gmail.com"
            className="hover:text-violet-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
