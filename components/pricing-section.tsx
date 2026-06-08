"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Shield, ArrowRight, ShoppingBag } from "lucide-react"

const trialBenefits = [
  "보증금 10만원 (체험 후 전액 환불 가능)",
  "설치비 3만원 (구매 시 돌려드려요!)",
  "반품 시 회수 비용 0원",
  "반품 시 보증금 100% 환불",
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
            부담 없이 체험하고, 마음에 들면 구매하세요!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Free Trial Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-card p-8 shadow-xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10" />
            
            <div className="relative">
              <div className="mb-6">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  추천
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-foreground">한달 무료 체험</h3>
              <p className="mb-6 text-muted-foreground">30일간 부담 없이 체험해보세요</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-primary">무료</span>
                <span className="text-muted-foreground"> / 30일</span>
              </div>

              <ul className="mb-8 space-y-3">
                {trialBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6"
              >
                <Link href="#contact">
                  무료 체험 신청하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Purchase Info Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 shadow-xl flex flex-col justify-center">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/50" />
            
            <div className="relative text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingBag className="h-10 w-10 text-primary" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-foreground">한달 무료 체험 후</h3>
              <p className="mb-6 text-3xl font-extrabold text-primary">구매 가능!</p>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  먼저 체험해보고 마음에 드시면
                  <br />
                  그때 구매를 결정하세요.
                </p>
                <div className="flex items-center justify-center gap-2 text-foreground font-medium">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>3년 무상 A/S 보장</span>
                </div>
              </div>


            </div>
          </div>
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
