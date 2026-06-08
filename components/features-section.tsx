"use client"

import { useState } from "react"
import { Gauge, Shield, Droplet, Wrench, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Gauge,
    title: "레버식 수압 조절",
    description: "편하게 레버로 수압을 조절하세요. 개인의 상태에 맞는 최적의 수압으로 편안한 케어가 가능합니다.",
    highlight: "맞춤 수압",
    hasPatent: false,
  },
  {
    icon: Droplet,
    title: "특허 기술 노즐",
    description: "저희만의 특허 기술 노즐로 부드러우면서도 강력하게 케어합니다. 통증 없이 장까지 깨끗하게!",
    highlight: "특허 기술",
    hasPatent: true,
  },
  {
    icon: Shield,
    title: "자동 세정 & 위생",
    description: "노즐 자동 세정 기능으로 언제나 완벽한 위생을 유지합니다. 물청소로 간편하게 관리하세요.",
    highlight: "자동 위생",
    hasPatent: false,
  },
  {
    icon: Wrench,
    title: "간편한 탈부착",
    description: "어린아이도 간편하게 탈부착 가능! 청소와 관리가 쉬워 언제나 깨끗하게 사용할 수 있습니다.",
    highlight: "쉬운 관리",
    hasPatent: false,
  },
]

export function FeaturesSection() {
  const [showPatentModal, setShowPatentModal] = useState(false)

  return (
    <>
      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              쾌변기 <span className="text-primary">핵심 기능</span> & 원리
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              특허받은 기술력으로 편안하고 효과적인 장 케어를 경험하세요
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => feature.hasPatent && setShowPatentModal(true)}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg md:p-8 ${
                  feature.hasPatent ? "cursor-pointer" : ""
                }`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon and Badge */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <div className="flex items-center gap-2">
                      {feature.hasPatent && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          클릭하여 특허증 보기
                        </span>
                      )}
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patent Modal */}
      {showPatentModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowPatentModal(false)}
        >
          <div 
            className="relative max-h-[90vh] max-w-5xl overflow-auto rounded-2xl bg-background p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">특허 기술 인증</h3>
                <p className="text-sm text-muted-foreground">대한민국 특허청 정식 등록 특허 5건 보유</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPatentModal(false)}
                className="shrink-0"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">닫기</span>
              </Button>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uhGbkbiSuIjJel33K31cEOmAJ4EOey.png"
                alt="단비코리아 특허증 5건 - 비데용 노즐 어셈블리, 공기 청정기용 필터 등"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
