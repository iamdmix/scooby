"use client"

import { ArrowUpRight, Calendar, MapPin, Award, CheckCircle } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "HummingWave Technologies Pvt Ltd",
    location: "Bengaluru, India",
    period: "May 2026 – July 2026",
    bullets: [
      "Built a Next.js web application and designed its Backend-for-Frontend (BFF) layer to integrate with core microservices.",
      "Set up AWS infrastructure, configuring S3 buckets for user image uploads and managing production builds.",
      "Wrote features for a Flutter-based mobile web-view app, connecting native device functionality to the web view."
    ],
    tech: ["Next.js", "React", "AWS", "S3", "Flutter", "BFF"]
  },
  {
    role: "Chairperson",
    company: "LUGVBITC – Linux Users Group, VIT Chennai",
    location: "Chennai, India",
    period: "April 2025 – April 2026",
    bullets: [
      "Led a team of students to organize technical workshops, Linux install fests, and our annual campus CTF event.",
      "Prepared and distributed pre-configured Linux virtual machine images to over 500 participants so everyone had the same lab setup."
    ],
    tech: ["Linux", "VMware/VirtualBox", "Docker", "CTF Design", "Infrastructure"]
  },
  {
    role: "Backend Engineering Intern",
    company: "LumiEther Research LLP",
    location: "Bengaluru, India",
    period: "May 2025 – July 2025",
    bullets: [
      "Developed a workflow engine in Java (Quarkus) that parses JSON configurations to coordinate execution between backend modules.",
      "Built REST APIs and WebSockets connections to process and deliver video stream frames within a self-hosted environment."
    ],
    tech: ["Quarkus", "Java", "REST APIs", "WebSockets", "JSON Schema"]
  }
]

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (AWS CLF-C02)",
    organization: "Amazon Web Services (AWS)",
    date: "February 2026"
  },
  {
    title: "DevOps, Agile and Design Thinking",
    organization: "IBM",
    date: "June 2025"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-t border-border/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">

          {/* Left/Middle Columns: Experience */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-2 mb-12">
              <span className="text-xs text-violet-400 font-mono tracking-widest uppercase">03 // EXPERIENCE</span>
              <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Work Experience
              </SectionTitle>
            </div>

            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative group p-6 md:p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-md border border-white/10 shadow-xl hover:border-violet-500/20 hover:bg-zinc-900/40 transition-all duration-300 pl-8 md:pl-10"
                >
                  {/* Vertical timeline line inside card */}
                  <div className="absolute left-6 top-6 bottom-6 w-px bg-violet-500/10" />
                  {/* Timeline dot inside card */}
                  <div className="absolute left-[20.5px] top-8 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-xl md:text-2xl text-zinc-100 group-hover:text-violet-400 transition-colors w-fit">
                        {exp.role}
                      </h3>
                      <p className="text-zinc-300 text-md font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1.5 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-violet-400/80" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-violet-400/80" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 pl-1 relative z-10">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-zinc-300 text-sm md:text-base leading-relaxed flex items-start gap-2">
                        <span className="text-violet-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 text-xs font-mono bg-violet-500/5 border border-violet-500/10 text-zinc-300 rounded-full hover:border-violet-500/30 hover:bg-violet-500/15 transition-all cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-2 mb-12">
              <span className="text-xs text-violet-400 font-mono tracking-widest uppercase">04 // CREDENTIALS</span>
              <SectionTitle className="text-3xl md:text-4xl font-semibold tracking-tight">
                Certifications
              </SectionTitle>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-3xl bg-zinc-900/30 backdrop-blur-md border border-white/10 shadow-xl">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="pb-4 last:pb-0 pt-4 first:pt-0 border-b border-white/5 last:border-b-0 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base leading-snug text-zinc-100 group-hover:text-violet-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-zinc-300 mt-1">
                        {cert.organization}
                      </p>
                      <p className="text-xs text-zinc-400 mt-2 font-mono">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
