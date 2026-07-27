import { Mail, FileText } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-3xl bg-zinc-900/30 backdrop-blur-md border border-white/10 shadow-2xl text-center flex flex-col items-center justify-center">
          <p className="text-xs text-violet-400 font-mono tracking-widest uppercase mb-4">05 // CONTACT</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-100 mb-6">
            Get in touch.
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
            I'm currently looking for backend engineering or systems roles. If you want to discuss system architectures, homelabbing, or just chat, feel free to drop me a line.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dharmikvs26@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full transition-all duration-300 active:scale-95 shadow-lg shadow-violet-600/20"
            >
              <Mail className="w-4 h-4" />
              dharmikvs26@gmail.com
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full border border-white/10 hover:border-violet-500/20 hover:bg-violet-500/5 text-zinc-300 transition-all duration-300 active:scale-95"
            >
              <FileText className="w-4 h-4 text-violet-400" />
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
