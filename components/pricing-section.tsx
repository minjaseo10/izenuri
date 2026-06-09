"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Shield, ArrowRight, Droplets, Wrench, Star } from "lucide-react"

const softenerBenefits = [
  {
    icon: Droplets,
    title: "부드러운 물 제공",
    desc: "피부·모발에 순하고 세탁 세제 효과도 높아집니다.",
  },
  {
    icon: Wrench,
    title: "기기 수명 연장",
    desc: "석회질 축적을 예방해 세탁기·보일러를 보호합니다.",
  },
  {
    icon: Star,
    title: "물 품질 개선",
    desc: "요리·음료 맛이 달라질 만큼 물의 질이 좋아집니다.",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            지금 시작하면 받는{" "}
            <span className="text-primary">특별 혜택</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            한정 수량 특가 판매 — 지금 바로 상담 신청하세요!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">

          {/* 특별 할인 Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-card p-8 shadow-xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10" />

            <div className="relative flex flex-col h-full">
              <div className="mb-5">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                  한정 특가
                </span>
              </div>

              <h3 className="mb-1 text-2xl font-bold text-foreground">특별 할인 판매</h3>
              <p className="mb-1 text-sm font-semibold text-primary">모델명: 102 쾌변기</p>
              <p className="mb-6 text-muted-foreground">한정 수량 소진 시 종료됩니다</p>

              {/* Price */}
              <div className="mb-6 rounded-2xl bg-primary/5 px-6 py-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-muted-foreground line-through decoration-red-500 decoration-2">
                    63만원
                  </span>
                  <span className="rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white">특가</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-primary">45만원</span>
                  <span className="text-lg font-semibold text-foreground">판매</span>
                </div>
              </div>

              {/* Extra discount */}
              <div className="mb-8 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 px-4 py-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm font-semibold text-foreground">
                  네이버 플레이스 리뷰 및 알림 설정 시{" "}
                  <span className="text-accent">2만원 추가 할인!</span>
                </p>
              </div>

              <div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>3년 무상 A/S 포함</span>
              </div>

              <Button
                asChild
                className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
              >
                <Link href="#contact">
                  상담 신청하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* 연수기 증정 Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 shadow-xl flex flex-col">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/50" />

            <div className="relative flex flex-col h-full">
              <div className="mb-5">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  구매 사은품
                </span>
              </div>

              <h3 className="mb-1 text-2xl font-bold text-foreground">이온 정수 필터</h3>
              <p className="mb-4 text-xl font-extrabold text-accent">(연수기) 증정!</p>

              {/* Images */}
              <div className="mb-5 grid grid-cols-2 gap-2">
                <div className="overflow-hidden rounded-xl bg-secondary/30">
                  <Image
                    src="/softener-1.jpg"
                    alt="이온 정수 필터(연수기) 정면"
                    width={240}
                    height={240}
                    className="h-40 w-full object-contain p-2"
                    unoptimized
                  />
                </div>
                <div className="overflow-hidden rounded-xl bg-secondary/30">
                  <Image
                    src="/softener-3.jpg"
                    alt="이온 정수 필터(연수기) 측면"
                    width={240}
                    height={240}
                    className="h-40 w-full object-contain p-2"
                    unoptimized
                  />
                </div>
              </div>

              {/* Benefits */}
              <ul className="mb-6 space-y-3">
                {softenerBenefits.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-xl bg-primary/5 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-primary">구매 고객 전원 증정 — 수량 한정!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Provocation Banner */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-center dark:border-red-900 dark:bg-red-950/30">
          <p className="text-lg font-bold text-foreground md:text-xl">
            <span className="text-red-500">일단 한 달만 써보세요!</span>
          </p>
          <p className="mt-1 text-base font-medium text-muted-foreground md:text-lg">
            어차피 너무 좋아서{" "}
            <span className="font-extrabold text-red-500">반품 못 하실 테니까요.</span>
          </p>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">3년 무상 A/S</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">특허 기술 인증</span>
          </div>
        </div>
      </div>
    </section>
  )
}
