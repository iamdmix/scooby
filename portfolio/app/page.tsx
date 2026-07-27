import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { SelectedWorks } from "@/components/sections/selected-works"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { FinalCTA } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-[5%] left-[-20%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-[35%] right-[-20%] w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-[65%] left-[-15%] w-[600px] h-[600px] rounded-full bg-fuchsia-600/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-[85%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none -z-10" />

        <main>
          <Hero />
          <SelectedWorks />
          <About />
          <Experience />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
