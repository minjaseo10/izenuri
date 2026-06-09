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
            <h1 className="mb-4 text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-primary">누리 쾌변기</span>로 맞이하는
              <br />
              <span className="text-accent">상쾌한 아침</span>을 시작하세요!
            </h1>

            {/* Sub Headline */}
            <p className="mb-6 max-w-lg text-pretty text-lg text-muted-foreground md:text-xl">
              매일 아침, 날아갈 듯 가벼워지는 기분!
              <br />
              누리 쾌변기가 찾아왔습니다.
            </p>

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

            {/* Impact Copy */}
            <div className="mb-8 max-w-lg">
              <p className="text-balance text-xl font-extrabold tracking-tight text-foreground md:text-2xl">
                <span className="text-muted-foreground line-through decoration-accent decoration-2">&ldquo;비데가 다 똑같지 뭐&rdquo;</span>
                <span className="text-foreground">라는 생각,</span>
                <br />
                <span className="text-accent">오늘로 끝납니다.</span>
              </p>
              <p className="mt-3 border-l-4 border-primary pl-4 text-base font-medium text-muted-foreground md:text-lg">
                &ldquo;한 번 써보면 다른 비데 절대 못 씁니다. 진짜 완전 강추!&rdquo;
              </p>
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
