"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef } from "react"

const projects = [
  {
    title: "SMHD Interiors – Business Website",
    role: "UI/UX Designer & Web Developer",
    description:
      "Designed and deployed a complete business website focused on clean UI, responsive layout, and brand consistency.",
    link: "https://www.smhdinteriors.com",
    status: "Live",
  },
  {
    title: "VGROW – AI Powered Community Learning Platform",
    role: "Full Stack Developer",
    description: "AI-based course recommendations, real-time doubt resolution, ranking system, and community forums.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "Orange Rot Detection using YOLOv5n",
    role: "Computer Vision & AI Developer",
    description:
      "Trained a YOLOv5n model to classify healthy vs diseased oranges with real-time detection using OpenCV.",
  },
]

export function Projects() {
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
        // Stagger animation delays
        ;(item as HTMLElement).style.animationDelay = `${index * 0.1}s`
        observer.observe(item)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="px-4 py-24 md:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 fade-item opacity-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-blue-600 to-transparent ml-5" />
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-8 bg-white border-2 border-blue-100/50 shadow-md hover:shadow-2xl hover:shadow-blue-100/30 hover:border-blue-200/60 transition-all duration-500 hover:-translate-y-2 fade-item opacity-0 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="relative pl-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                      {project.status && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs font-medium shadow-sm">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.role}</p>
                  </div>
                  {project.link && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-white border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit Site
                      </a>
                    </Button>
                  )}
                </div>
                <p className="text-muted-foreground leading-loose mb-4">{project.description}</p>
                {project.tech && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
