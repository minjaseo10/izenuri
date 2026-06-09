"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Gift, Sparkles, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-12 md:py-20 lg:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Gift className="h-4 w-4" />
              특가 판매 진행중!
            </div>

            {/* Main Headline */}
            <h1 className="mb-3 text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-5xl">
              <span className="relative inline-block text-muted-foreground line-through decoration-accent decoration-[3px] text-3xl md:text-4xl lg:text-4xl">
                "비데가 다 똑같지 뭐"
              </span>
              <br />
              <span className="text-primary">라는 생각,</span>{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-accent font-black">오늘로 끝납니다.</span>
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-accent/15 rounded" />
              </span>
            </h1>

            {/* Impact Quote */}
            <div className="mb-6 max-w-lg rounded-2xl border-l-4 border-primary bg-primary/5 px-5 py-4">
              <p className="text-pretty text-base font-semibold leading-relaxed text-foreground md:text-lg">
                "한 번 써보면 다른 비데 절대 못 씁니다."
              </p>
              <p className="mt-1 text-sm font-bold text-accent md:text-base">
                — 진짜 완전 강추!
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 shadow-sm border border-border">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">잔변 걱정 끝!</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 shadow-sm border border-border">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">속 시원한 배변!</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 animate-pulse-glow"
              >
                <Link href="#contact">지금 바로 상담 신청하기</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-semibold text-lg border-primary text-primary hover:bg-primary/10"
              >
                <Link href="#video">
                  <Play className="mr-2 h-5 w-5" />
                  제품 시연 영상 보기
                </Link>
              </Button>
            </div>
          </div>

          {/* Flyer Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-border">
                <Image
                  src="/flyer.png"
                  alt="이젠누리 쾌변기 한정 특가 판매 전단지"
                  width={500}
                  height={700}
                  className="h-auto w-full max-w-md rounded-3xl object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
