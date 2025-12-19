"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Flask", "Flutter"],
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "OpenCV", "Neural Networks", "NLP"],
  },
  {
    title: "Databases",
    skills: ["MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "Blender", "n8n"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Problem Solving"],
  },
]

export function Skills() {
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
        ;(item as HTMLElement).style.animationDelay = `${index * 0.08}s`
        observer.observe(item)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="px-4 py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 fade-item opacity-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-blue-600 to-transparent ml-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-white border-2 border-blue-100/50 shadow-md hover:shadow-2xl hover:shadow-blue-100/30 hover:border-blue-200/60 transition-all duration-500 hover:-translate-y-2 fade-item opacity-0 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <h3 className="text-lg font-semibold mb-5 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100 hover:bg-blue-100 hover:border-blue-200 hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
