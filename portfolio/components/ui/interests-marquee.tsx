"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function InterestsMarquee() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setImages(data)
        }
      })
      .catch((err) => console.error("Failed to load gallery:", err))
  }, [])

  if (images.length === 0) {
    return (
      <div className="w-full h-40 flex items-center justify-center text-muted-foreground text-sm font-mono">
        Loading gallery...
      </div>
    )
  }

  // Distribute images to rows
  const row1: string[] = []
  const row2: string[] = []
  const row3: string[] = []

  images.forEach((img, idx) => {
    if (idx % 3 === 0) row1.push(img)
    else if (idx % 3 === 1) row2.push(img)
    else row3.push(img)
  })

  // Ensure each row has at least 3 images to loop smoothly in the marquee
  const ensureMinimum = (row: string[]) => {
    const output = [...row]
    if (output.length === 0) {
      output.push(images[0])
    }
    while (output.length < 3) {
      output.push(...output)
    }
    return output
  }

  const r1 = ensureMinimum(row1)
  const r2 = ensureMinimum(row2)
  const r3 = ensureMinimum(row3)

  return (
    <div className="relative w-full overflow-hidden py-10 select-none bg-background">
      {/* Side gradients for soft vignette fade-out */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-6 md:gap-8">
        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 md:gap-8 animate-scroll-left shrink-0 min-w-full">
            {/* Render 3 times for a seamless infinite loop track */}
            {[...r1, ...r1, ...r1].map((src, idx) => (
              <div
                key={`r1-${idx}`}
                className="relative w-[280px] h-[160px] md:w-[400px] md:h-[220px] rounded-2xl overflow-hidden border border-border/40 shrink-0 hover:border-border/80 transition-colors duration-300"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Dharmik Shinde Interest"
                  fill
                  sizes="(max-width: 768px) 280px, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 md:gap-8 animate-scroll-right shrink-0 min-w-full">
            {[...r2, ...r2, ...r2].map((src, idx) => (
              <div
                key={`r2-${idx}`}
                className="relative w-[280px] h-[160px] md:w-[400px] md:h-[220px] rounded-2xl overflow-hidden border border-border/40 shrink-0 hover:border-border/80 transition-colors duration-300"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Dharmik Shinde Interest"
                  fill
                  sizes="(max-width: 768px) 280px, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Scrolling Left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 md:gap-8 animate-scroll-left shrink-0 min-w-full">
            {[...r3, ...r3, ...r3].map((src, idx) => (
              <div
                key={`r3-${idx}`}
                className="relative w-[280px] h-[160px] md:w-[400px] md:h-[220px] rounded-2xl overflow-hidden border border-border/40 shrink-0 hover:border-border/80 transition-colors duration-300"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Dharmik Shinde Interest"
                  fill
                  sizes="(max-width: 768px) 280px, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
