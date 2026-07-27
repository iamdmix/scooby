"use client"

import type React from "react"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`overflow-visible text-4xl w-fit ${className}`}>
      {children}
    </h2>
  )
}
