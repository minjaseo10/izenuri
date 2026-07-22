"use client"

import Link from "next/link"
import { Phone, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Mobile Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-3 shadow-lg md:hidden">
        <div className="flex items-center gap-2">
          <a
            href="tel:051-897-5532"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 py-3 font-semibold text-primary"
          >
            <Phone className="h-5 w-5" />
            전화 상담
          </a>
          <Button
            asChild
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3"
          >
            <Link href="#contact">무료 체험 신청</Link>
          </Button>
        </div>
      </div>

      {/* Desktop Floating Phone */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground shadow-lg transition-all hover:bg-muted/80"
            aria-label="맨 위로"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        <a
          href="tel:051-897-5532"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110"
          aria-label="전화 상담"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
  )
}
