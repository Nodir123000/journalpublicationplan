"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const [show, setShow] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / windowHeight) * 100

      setScrollProgress(progress)
      setShow(scrolled > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!show) return null

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 rounded-full shadow-lg z-50 group hover:scale-110 transition-all duration-300"
      style={{
        background: `conic-gradient(hsl(var(--primary)) ${scrollProgress}%, hsl(var(--primary) / 0.2) ${scrollProgress}%)`,
      }}
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
    </Button>
  )
}
