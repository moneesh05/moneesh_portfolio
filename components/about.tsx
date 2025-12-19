"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".fade-item")
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="px-4 py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 fade-item opacity-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About</h2>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-blue-600 to-transparent ml-5" />
        </div>

        <div className="space-y-8">
          <p className="text-base md:text-lg text-muted-foreground leading-loose fade-item opacity-0">
            Final-year B.Tech student in Artificial Intelligence and Data Science with strong proficiency in React,
            Angular, Python, JavaScript, HTML, CSS, and Node.js.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-loose fade-item opacity-0">
            I specialize in developing AI-driven applications and scalable full-stack solutions. My work focuses on
            building intelligent, user-centric systems that solve real-world problems.
          </p>
          <Card className="p-8 bg-white border-2 border-blue-100/50 shadow-md hover:shadow-2xl hover:shadow-blue-100/30 hover:border-blue-200/60 transition-all duration-500 hover:-translate-y-1 fade-item opacity-0 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="relative">
              <h3 className="text-xl font-semibold mb-5 text-foreground">Education</h3>
              <div className="space-y-2">
                <p className="text-foreground font-medium text-lg">B.Tech Artificial Intelligence and Data Science</p>
                <p className="text-muted-foreground">Agni College of Technology</p>
                <p className="text-muted-foreground">2022 – 2026 | CGPA: 8.02</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
