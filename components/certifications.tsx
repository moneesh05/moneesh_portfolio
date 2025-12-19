"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const certifications = [
  { name: "Deep Learning", issuer: "NPTEL", year: "2024" },
  { name: "Machine Learning", issuer: "Udemy" },
  { name: "Facial Recognition", issuer: "Teachable Machine" },
  { name: "Python Programming", issuer: "SkillRack" },
  { name: "Data Structures in C", issuer: "SkillRack" },
  { name: "SQL Basics", issuer: "SkillRack" },
  { name: "UI/UX Design", issuer: "ICT Academy" },
]

export function Certifications() {
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
      items.forEach((item, index) => {
        ;(item as HTMLElement).style.animationDelay = `${index * 0.06}s`
        observer.observe(item)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="certifications"
      className="px-4 py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 fade-item opacity-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-blue-600 to-transparent ml-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <Card
              key={cert.name}
              className="p-5 bg-white border-2 border-blue-100/50 shadow-md hover:shadow-xl hover:shadow-blue-100/30 hover:border-blue-200/60 transition-all duration-500 hover:-translate-y-1 fade-item opacity-0 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative pl-4">
                <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                  {cert.year && ` • ${cert.year}`}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
