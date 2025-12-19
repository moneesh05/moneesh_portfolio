"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export function Experience() {
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
      id="experience"
      className="px-4 py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 fade-item opacity-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-blue-600 to-transparent ml-5" />
        </div>

        <Card className="p-8 bg-white border-2 border-blue-100/50 shadow-md hover:shadow-2xl hover:shadow-blue-100/30 hover:border-blue-200/60 transition-all duration-500 hover:-translate-y-2 fade-item opacity-0 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">AI/ML Intern</h3>
                <p className="text-muted-foreground">Internz Learn</p>
              </div>
              <p className="text-sm text-muted-foreground">April 2024 – May 2024</p>
            </div>
            <p className="text-muted-foreground leading-loose">
              Gained hands-on experience in AI and Machine Learning technologies, working on practical projects and
              developing expertise in neural networks and data processing.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
