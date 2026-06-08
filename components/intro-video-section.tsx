"use client"

import { Play } from "lucide-react"

export function IntroVideoSection() {
  return (
    <section id="why-nuri" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Play className="h-4 w-4" />
            영상으로 알아보기
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            왜 <span className="text-primary">누리 쾌변기</span>인가?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            이젠누리 비데가 필요한 이유와 제품 소개를 영상으로 확인하세요
          </p>
        </div>

        {/* Video Container */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl border border-border">
            <div className="aspect-video">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                poster=""
              >
                <source 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%98%81%EC%83%81-tbJVWKjCentUFJ8JE7qgH3kkEGmHVW.mp4" 
                  type="video/mp4" 
                />
                브라우저가 비디오 태그를 지원하지 않습니다.
              </video>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 border border-border text-center">
              <div className="mb-3 text-3xl font-bold text-primary">01</div>
              <h3 className="mb-2 font-semibold text-foreground">변비 고민 해결</h3>
              <p className="text-sm text-muted-foreground">
                특허받은 물줄기 기술로 자연스러운 배변 유도
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border text-center">
              <div className="mb-3 text-3xl font-bold text-primary">02</div>
              <h3 className="mb-2 font-semibold text-foreground">전기 불필요</h3>
              <p className="text-sm text-muted-foreground">
                기계식 작동으로 전기 요금 걱정 없이 안전하게
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 border border-border text-center">
              <div className="mb-3 text-3xl font-bold text-primary">03</div>
              <h3 className="mb-2 font-semibold text-foreground">간편한 설치</h3>
              <p className="text-sm text-muted-foreground">
                누구나 쉽게 설치 가능한 원터치 탈부착 시스템
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
