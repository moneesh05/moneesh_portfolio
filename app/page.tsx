import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Contact />
    </div>
  )
}
