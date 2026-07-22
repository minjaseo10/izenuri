"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, MessageCircle, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    inquiryType: "trial" as "trial" | "purchase",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                <span className="text-primary">문의/예약</span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
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
                  variant="outline"
                  className="w-full border-[#FEE500] bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90 font-semibold py-6"
                  onClick={() => alert("카카오톡 상담 연결 (실제 서비스에서는 카카오 채널로 연결)")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  카카오톡 1:1 상담
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">간편 상담 신청</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-foreground">신청이 완료되었습니다!</h4>
                  <p className="text-muted-foreground">
                    빠른 시일 내에 연락드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      이름
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="홍길동"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      연락처
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="010-1234-5678"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-foreground">문의 유형</Label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, inquiryType: "trial" })}
                        className={`rounded-lg border-2 p-3 text-center font-medium transition-all ${
                          formState.inquiryType === "trial"
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        무료 체험
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, inquiryType: "purchase" })}
                        className={`rounded-lg border-2 p-3 text-center font-medium transition-all ${
                          formState.inquiryType === "purchase"
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        할인 구매
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
                  >
                    상담 신청하기
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    신청 후 영업일 기준 1일 이내 연락드립니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
