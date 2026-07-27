"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function LifePage() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Shuffle image array to randomize on mount
          const shuffled = [...data].sort(() => Math.random() - 0.5)
          setImages(shuffled)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load gallery:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-white text-black relative flex flex-col items-center selection:bg-black selection:text-white">
      {/* Home link */}
      <Link
        href="/"
        className="fixed top-6 left-6 text-xs font-mono font-semibold tracking-wider text-black hover:underline z-50 bg-white/90 border border-black/10 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
      >
        ← HOME
      </Link>

      {/* Fixed Centered Scrolling Marquee Overlay in Black */}
      <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-30 select-none overflow-hidden py-4 flex flex-row">
        <div className="flex whitespace-nowrap animate-text-marquee shrink-0">
          {Array(16)
            .fill("dmix..")
            .map((word, idx) => (
              <span
                key={`m1-${idx}`}
                className="text-black font-semibold text-[9vw] sm:text-[10vw] tracking-tighter leading-none select-none pointer-events-none"
                style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
              >
                {word}
              </span>
            ))}
        </div>
        <div className="flex whitespace-nowrap animate-text-marquee shrink-0">
          {Array(16)
            .fill("dmix..")
            .map((word, idx) => (
              <span
                key={`m2-${idx}`}
                className="text-black font-semibold text-[9vw] sm:text-[10vw] tracking-tighter leading-none select-none pointer-events-none"
                style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
              >
                {word}
              </span>
            ))}
        </div>
      </div>

      {/* Scrollable image list in a dense collage wall style */}
      <div className="w-full max-w-[99%] px-1 md:px-2 z-10 my-4">
        {loading ? (
          <div className="w-full h-[60vh] flex items-center justify-center text-sm font-mono text-zinc-400">
            LOADING SNAPSHOTS...
          </div>
        ) : images.length === 0 ? (
          <div className="w-full h-[60vh] flex items-center justify-center text-sm font-mono text-zinc-400">
            NO SNAPSHOTS DUMPED YET. ADD PICS TO PUBLIC/GALLERY/.
          </div>
        ) : (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 md:gap-6">
            {images.map((src, idx) => {
              return (
                <div
                  key={idx}
                  className="break-inside-avoid overflow-hidden mb-4 md:mb-6 transition-all duration-300 hover:scale-[1.03] hover:z-20 shadow-sm"
                >
                  <img
                    src={src}
                    alt={`Snapshot ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto block rounded-sm border border-black/5 bg-zinc-100"
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
