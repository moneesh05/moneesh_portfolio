"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatusMessage(null)

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatusMessage({ type: "error", text: "Please fill in all fields." })
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({ type: "error", text: "Please enter a valid email address." })
      return
    }

    setIsLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setStatusMessage({ type: "success", text: "Message sent successfully! I'll get back to you soon." })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatusMessage({ type: "error", text: "Failed to send message. Please try again or contact me directly." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg shadow-blue-500/50" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-400 via-blue-500 to-transparent ml-5" />
        </div>

        <Card className="p-10 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 hover:border-slate-600/60 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            <p className="text-lg text-slate-300 mb-10 leading-loose">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              and innovation. Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:ring-blue-400 resize-none"
                  required
                />
              </div>
              {statusMessage && (
                <div className={`text-sm ${statusMessage.type === "success" ? "text-green-400" : "text-red-400"}`}>
                  {statusMessage.text}
                </div>
              )}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5" />
                <a href="mailto:moneesh342@gmail.com" className="hover:text-white transition-colors">
                  moneesh342@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-5 w-5" />
                <span>Chennai, India</span>
              </div>
            </div>
            <div className="flex gap-4 pt-10">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-slate-700/50 backdrop-blur-sm border-slate-600 text-slate-200 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <a href="/resume.pdf" download="Moneeshwar_Resume.pdf">
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-slate-700/50 backdrop-blur-sm border-slate-600 text-slate-200 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <a href="https://github.com/moneesh05" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-slate-700/50 backdrop-blur-sm border-slate-600 text-slate-200 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <a href="https://www.linkedin.com/in/moneeshwar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
