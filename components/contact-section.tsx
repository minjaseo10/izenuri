"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
              <span className="text-primary">문의/예약</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground text-center">
              궁금한 점이 있으시면 언제든 연락주세요!
              <br />
              친절하게 상담해 드립니다.
            </p>

            {/* Phone */}
            <div className="mb-6">
              <a
                href="tel:051-897-5532"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">전화 상담</p>
                  <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    051-897-5532
                  </p>
                </div>
              </a>
            </div>

            {/* Company Info */}
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="mb-2 text-sm text-muted-foreground">판매처</p>
              <p className="text-xl font-bold text-foreground">이젠누리 총판</p>
              <p className="mt-3 text-sm text-muted-foreground">
                영상으로 더 자세한 정보를 확인하세요!
                <br />
                QR 코드 스캔 시 영상 확인 가능
              </p>
            </div>

            {/* KakaoTalk Button */}
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="w-full border-[#FEE500] bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90 font-semibold py-6"
              >
                <a href="https://open.kakao.com/o/sRaMbNwi" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  카카오톡 1:1 상담
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
