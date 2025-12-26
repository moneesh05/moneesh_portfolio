"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      const children = heroRef.current.querySelectorAll(".fade-up-item")
      children.forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Enhanced gradient background with better visual depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent -z-10" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full" ref={heroRef}>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left side - Text content */}
          <div className="space-y-6 flex-1 fade-up-item opacity-0">
            {/* Improved typography hierarchy and spacing */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">Moneeshwar M</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              AI & Data Science Student | Full Stack Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Building intelligent, user-centric systems with React, Angular, Python, and JavaScript. Passionate about
              solving real-world problems through AI-driven applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.6)]"
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.4)] hover:bg-white"
              >
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/moneesh05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/moneeshwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:moneesh342@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Enhanced profile image presentation with stronger glow */}
          <div className="fade-up-item opacity-0 flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full opacity-60 group-hover:opacity-100 blur-2xl transition duration-700 group-hover:duration-300"></div>
              <div className="relative">
                <Image
                  src="/professional-headshot.png"
                  alt="Moneeshwar M"
                  width={300}
                  height={300}
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
