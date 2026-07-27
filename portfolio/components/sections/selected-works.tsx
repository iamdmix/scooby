"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const works = [
  {
    id: 1,
    title: "TerminalSix — CTF Platform",
    category: "Security & Systems Platforms",
    description: "A self-hosted platform built for running security CTF contests. It uses Docker to spin up and isolate game challenges dynamically, and updates the leaderboard in real-time using WebSockets.",
    image: "/images/bg-1.png",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "WebSockets", "CTF Design"],
    link: "https://github.com/iamdmix",
  },
  {
    id: 2,
    title: "Durden — Home Server Stack",
    category: "Infrastructure & Observability",
    description: "My personal homelab stack. It runs media, management, and status tools like Jellyfin and Uptime Kuma inside Docker, with Prometheus and Grafana tracking system health metrics.",
    image: "/images/bg-2.png",
    tags: ["Docker", "Prometheus", "Grafana", "Cloudflare", "Tailscale", "SSH"],
    link: "https://github.com/iamdmix",
  },
  {
    id: 3,
    title: "Aionos — Anti-Scam Audit System",
    category: "Web3 & Smart Contracts",
    description: "An escrow system designed for freelancing agreements. It uses Solidity smart contracts on Ethereum to handle milestones and secure payments between developers and clients.",
    image: "/images/bg-3.png",
    tags: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
    link: "https://github.com/iamdmix",
  },
]

export function SelectedWorks() {
  return (
    <section id="works" className="py-20 md:py-24 pb-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-violet-400 font-mono tracking-widest uppercase">01 // PROJECTS</span>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Selected Projects
            </SectionTitle>
          </div>
          <Link
            href="https://github.com/iamdmix"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors hover:text-violet-300 font-mono text-violet-400"
          >
            View GitHub Profile
            <ArrowUpRight className="w-4 h-4 text-violet-400" />
          </Link>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="relative group block"
            >
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-md border border-white/10 shadow-2xl hover:border-violet-500/20 hover:bg-zinc-900/40 hover:shadow-[0_8px_30px_rgba(139,92,246,0.05)] transition-all duration-500">
                {/* Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="text-xs font-mono font-semibold text-violet-400 uppercase tracking-widest mb-3">
                    {work.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-zinc-100 flex items-center gap-2 group-hover:text-violet-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-zinc-300 text-base md:text-lg mt-4 leading-relaxed max-w-xl">
                    {work.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 text-xs font-mono bg-violet-500/5 text-zinc-300 border border-violet-500/10 rounded-full hover:bg-violet-500/10 hover:border-violet-500/25 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-5 relative aspect-[1.8/1] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-inner">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="https://github.com/iamdmix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono border rounded-full hover:bg-secondary transition-colors text-violet-400 border-violet-400"
          >
            View GitHub Profile
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
