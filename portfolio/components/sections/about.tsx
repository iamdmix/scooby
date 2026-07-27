"use client"

import { SectionTitle } from "@/components/ui/section-title"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Go", "Python", "Java", "C/C++", "SQL", "TypeScript", "JavaScript", "Bash"]
  },
  {
    title: "Frameworks & BFF",
    skills: ["Next.js", "React.js", "FastAPI", "Quarkus", "Flutter", "Vert.x", "Node.js", "Express.js"]
  },
  {
    title: "Backend & Streaming",
    skills: ["PostgreSQL", "Redis", "ClickHouse", "WebSockets", "REST APIs", "Apache Pulsar", "Apache Pinot", "MinIO"]
  },
  {
    title: "Cloud & Systems",
    skills: ["AWS", "Docker", "Linux", "S3", "Prometheus", "Grafana", "Cloudflare", "Tailscale", "SSH", "Token Auth"]
  }
]

const educationList = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Vellore Institute of Technology",
    location: "Chennai, India",
    period: "Expected May 2027",
    gpa: "GPA: 8.56 / 10.0"
  },
  {
    degree: "Higher Secondary (12th Grade) | PCMC",
    school: "Deeksha Center for Learning PU College",
    location: "Bengaluru, India",
    period: "2021 – 2023",
    gpa: "92%"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-border/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Content: Bio & Education */}
          <div>
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs text-violet-400 font-mono tracking-widest uppercase">02 // ABOUT</span>
              <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                Building for the terminal, the homelab, and the cloud.
              </SectionTitle>
            </div>
            <p className="mt-6 text-zinc-300 leading-relaxed text-lg">
              I enjoy figuring out how software works under the hood. Whether it's writing backend APIs in Go, automating tasks with Bash scripts, or configuring network tunnels for my home server, I like building things that are clean, reliable, and easy to maintain.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed text-lg">
              Outside of writing code, I run my own self-hosted services, experiment with container environments, and lead the Linux student community on campus. I focus on writing straightforward code that solves real problems without adding unnecessary layers.
            </p>

            {/* Education Sub-section */}
            <div className="mt-16">
              <h3 className="text-xs uppercase tracking-widest text-violet-400 font-mono font-semibold mb-6">Education</h3>
              <div className="flex flex-col gap-6 p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-lg">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-violet-500/20 last:border-l-transparent pb-6 last:pb-0">
                    {/* Timeline bullet */}
                    <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-1">
                      <h4 className="font-semibold text-zinc-100 text-base">
                        {edu.degree}
                      </h4>
                      <span className="text-xs text-zinc-400 font-mono md:text-right">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 mt-1">{edu.school} • <span className="text-xs font-mono">{edu.location}</span></p>
                    <p className="text-xs text-violet-400 font-mono mt-1.5 font-semibold">{edu.gpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content: Categorized Tech Stack */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-violet-400 font-mono font-semibold mb-6">Technical Skills</h3>
            <div className="flex flex-col gap-6">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="p-6 rounded-2xl bg-zinc-900/30 backdrop-blur-md border border-white/5 shadow-xl hover:border-violet-500/15 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
                >
                  <h4 className="text-xs font-semibold font-mono text-violet-400 sm:w-36 flex-shrink-0 uppercase tracking-widest pt-1">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 flex-grow">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono bg-violet-500/5 text-zinc-300 border border-violet-500/10 rounded-full cursor-default hover:bg-violet-500/15 hover:border-violet-500/30 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
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
