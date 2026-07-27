"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const titleText = "Building backend services and self-hosted systems."
  const words = titleText.split(" ")
  const [maskReveal, setMaskReveal] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500
      const revealPercentage = Math.min(100, (scrollPosition / maxScroll) * 100)
      const calculatedOpacity = Math.min(1, scrollPosition / maxScroll)
      setMaskReveal(revealPercentage)
      setOpacity(calculatedOpacity)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 text-xs text-zinc-300 font-mono mb-8 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Based in Bengaluru // Available for Backend & Systems Roles</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[90px] font-bold tracking-tight text-white mb-6 w-fit">
            Dharmik Vivek Shinde
          </h1>

          {/* Main Title */}
          <h2 className="text-balance text-zinc-300 font-sans font-medium text-2xl sm:text-3xl md:text-5xl leading-[1.3] max-w-4xl">
            {titleText}
          </h2>

          <p className="mt-8 max-w-2xl leading-relaxed text-left text-lg text-zinc-400 ml-0">
            I write backend services in Go, design APIs, and configure self-hosted server environments.
          </p>

          <div className="flex flex-row items-center gap-4 mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full transition-all duration-300 active:scale-95 shadow-lg shadow-violet-600/20"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-white/10 hover:border-violet-500/20 hover:bg-violet-500/5 text-zinc-300 transition-all duration-300 active:scale-95"
            >
              Download Resume
              <ArrowDown className="w-4 h-4 text-violet-400" />
            </a>
          </div>

          {/* Currently & Focus block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-8 border-t border-white/10 max-w-3xl">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-violet-400 font-mono font-semibold mb-3">Currently</h3>
              <p className="text-zinc-200 font-medium text-md">Senior Year Student</p>
              <p className="text-sm text-zinc-400 mt-1">Vellore Institute of Technology, Chennai</p>
              <p className="text-xs text-zinc-500 mt-1 font-mono">Expected: May 2027</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-violet-400 font-mono font-semibold mb-3">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["Go", "Python", "Quarkus", "Docker", "PostgreSQL", "Redis"].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 text-xs font-mono bg-violet-500/5 text-zinc-300 border border-violet-500/10 rounded-full hover:bg-violet-500/10 hover:border-violet-500/25 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
