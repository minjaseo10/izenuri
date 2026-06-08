"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#features", label: "쾌변의 비밀" },
  { href: "#how-it-works", label: "상세 기능" },
  { href: "#usage", label: "사용 방법" },
  { href: "#installation", label: "설치 방법" },
  { href: "#pricing", label: "무료 체험 이벤트" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
            누리
          </div>
          <span className="text-xl font-bold text-foreground">이젠누리 쾌변기</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:051-897-5532" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            051-897-5532
          </a>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link href="#contact">30일 무료체험 신청</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border" />
            <a href="tel:051-897-5532" className="flex items-center gap-2 text-base font-medium text-muted-foreground">
              <Phone className="h-5 w-5" />
              051-897-5532
            </a>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>30일 무료체험 신청</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
