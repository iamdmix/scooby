"use client"

import { useEffect, useRef, useState } from "react"

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let animationFrameId: number
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let ringX = 0
    let ringY = 0

    // Selectors for interactive elements
    const interactiveSelectors = [
      "a[href]",
      "button",
      '[data-slot="button"]',
      'input[type="submit"]',
      '[role="button"]',
      ".hero-word",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ].join(", ")

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY

      const target = e.target as HTMLElement
      if (!target || typeof target.closest !== "function") {
        setIsHovering(false)
        return
      }

      try {
        const isInteractive = target.closest(interactiveSelectors)

        if (isInteractive) {
          setIsHovering(true)
          
          // Only apply magnetic center pull to standard controls (not wide headings or hero words)
          const isHeading = ["H1", "H2", "H3", "H4", "H5", "H6"].includes(isInteractive.tagName) || 
                            isInteractive.classList.contains("hero-word")
          if (!isHeading) {
            const rect = isInteractive.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            // Calculate distance from cursor to center
            const deltaX = targetX - centerX
            const deltaY = targetY - centerY
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

            // Magnetic effect within 80px radius
            if (distance < 80) {
              const pullStrength = 0.3
              targetX = targetX - deltaX * pullStrength
              targetY = targetY - deltaY * pullStrength
            }
          }
        } else {
          setIsHovering(false)
        }
      } catch (err) {
        setIsHovering(false)
      }
    }

    const animate = () => {
      // Smooth interpolation for the main dot
      const easeDot = 0.2
      currentX += (targetX - currentX) * easeDot
      currentY += (targetY - currentY) * easeDot

      // Smooth interpolation for the outer ring (lagging behind)
      const easeRing = 0.08
      ringX += (currentX - ringX) * easeRing
      ringY += (currentY - ringY) * easeRing

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          transform: "translate3d(0px, 0px, 0)",
          willChange: "transform",
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{
            width: isHovering ? "40px" : "8px",
            height: isHovering ? "40px" : "8px",
            transition: "width 0.2s ease-out, height 0.2s ease-out",
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{
          transform: "translate3d(0px, 0px, 0)",
          willChange: "transform",
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40"
          style={{
            width: isHovering ? "60px" : "32px",
            height: isHovering ? "60px" : "32px",
            transition: "width 0.3s ease-out, height 0.3s ease-out",
          }}
        />
      </div>

      {/* Global cursor style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      ` }} />
    </>
  )
}
