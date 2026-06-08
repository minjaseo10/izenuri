"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Wrench, HelpCircle, ChevronLeft, ChevronRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

const installationSteps = [
  {
    step: 1,
    title: "기존 변좌 분리",
    description: "기존 변기 커버(변좌)를 분리합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-BAGZB1JjKNXrMBxuDSI01GThhDwn9Q.jpg",
  },
  {
    step: 2,
    title: "고무볼트 조립",
    description: "고무볼트를 변기 구멍에 조립합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-6wSwUseXGry3XzwiomD08aZ8ucHMTT.jpg",
  },
  {
    step: 3,
    title: "양쪽 조립",
    description: "양쪽 구멍에 고무볼트를 모두 조립합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-DSk8jaD02i13Sad8js0b1pddNyTVho.jpg",
  },
  {
    step: 4,
    title: "브라켓 올림",
    description: "고정 브라켓을 변기 위에 올립니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-XAcwGef8aPytph2snD0qGrQzSlyOj5.jpg",
  },
  {
    step: 5,
    title: "사각너트 올림",
    description: "사각너트를 브라켓에 올립니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-2aL6stH1R2uxW8VHvkQjx5PG1D5Uzx.jpg",
  },
  {
    step: 6,
    title: "볼트 조이기",
    description: "드라이버로 볼트를 단단히 조입니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-DO7D9E4KoDcb0FD5atzDsoLTh7SVCf.jpg",
  },
  {
    step: 7,
    title: "물잠그고 물호스 풀기",
    description: "수도 밸브를 잠그고 기존 물호스를 풉니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-xTh3i4gur54aLAKLhav38WrhGj3lhQ.jpg",
  },
  {
    step: 8,
    title: "T밸브 연결하기",
    description: "T밸브를 수도 밸브에 연결합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-BmiF8Ma7MLJFZbykv8HnlBzajZjRgE.jpg",
  },
  {
    step: 9,
    title: "T밸브에 물호스 연결",
    description: "T밸브에 물호스를 연결합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-XebJrVgKPcTAGRvXHFFMlzU23DDl2B.jpg",
  },
  {
    step: 10,
    title: "본체에 필터 물호스 연결",
    description: "본체에 필터와 물호스를 연결합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-gkBugS6JydFTMWcZZ6pRJssRWHa4ge.jpg",
  },
  {
    step: 11,
    title: "본체호스와 T밸브 연결",
    description: "본체 호스를 T밸브에 연결합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-75niDbptdNJ3T91CjCRb05SI4tvx1c.jpg",
  },
  {
    step: 12,
    title: "변기에 기계 장착",
    description: "쾌변기 본체를 변기에 장착합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-8zy8Ym0MGMN9VQdMR2LAJsEg2sgsyT.jpg",
  },
  {
    step: 13,
    title: "브라켓에 밀어서 장착",
    description: "본체를 브라켓에 밀어서 장착합니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-uDKrAdXsS70p9UzTpDs4XnZSEYrX0w.jpg",
  },
  {
    step: 14,
    title: "딸깍 소리 설치완료",
    description: "딸깍 소리가 나면 장착 완료입니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-7fQEYsXyhsNXR3AdQQrIqwqHJbTGEd.jpg",
  },
  {
    step: 15,
    title: "레버수압조절 설치완료",
    description: "레버로 수압을 조절하면 설치 완료!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-8bKGJWqd39WMJGzRfwdAQ1m0MlFIXR.jpg",
  },
]

export function InstallationSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % installationSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + installationSteps.length) % installationSteps.length)
  }

  return (
    <section id="installation" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Wrench className="h-5 w-5" />
            <span className="font-medium">간편한 설치</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            설치방법 안내
          </h2>
          <p className="text-lg text-muted-foreground">
            누구나 쉽게 설치할 수 있습니다.
            <br />
            설치가 어려우시면 언제든 연락주세요!
          </p>
        </div>

        {/* Title Image */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-0FHZoZEgSOyYTC5OC0rCqLTRcW5zGM.jpg"
              alt="이젠누리 IZENNURI 설치방법"
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Parts Composition */}
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">부품 구성</h3>
            </div>
            <div className="overflow-hidden rounded-xl bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-lE74Ha8Q9qFo55zRiA2w0HJeFkNXF7.jpg"
                alt="부품 구성 - 고정 플레이트, 고정 너트, 고정 스티커, 육각렌치, T-밸브, 설치 볼트, 급수 호스, 분리형 필터"
                width={800}
                height={400}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Step by Step Carousel */}
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            {/* Current Step Display */}
            <div className="relative aspect-video bg-muted">
              <Image
                src={installationSteps[currentStep].image}
                alt={installationSteps[currentStep].title}
                fill
                className="object-cover"
              />
              {/* Step Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-lg">
                <span className="text-lg font-bold">STEP {installationSteps[currentStep].step}</span>
              </div>
            </div>

            {/* Step Info */}
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">{installationSteps[currentStep].title}</h3>
                <span className="text-sm text-muted-foreground">
                  {currentStep + 1} / {installationSteps.length}
                </span>
              </div>
              <p className="mb-6 text-muted-foreground">{installationSteps[currentStep].description}</p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  이전
                </Button>
                
                {/* Step Indicators */}
                <div className="hidden md:flex items-center gap-1">
                  {installationSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentStep 
                          ? "w-6 bg-primary" 
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextStep}
                  className="gap-2"
                >
                  다음
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* All Steps Grid (Collapsible on Mobile) */}
        <div className="mx-auto mb-12 max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold">전체 설치 단계</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {installationSteps.map((item, index) => (
              <button
                key={item.step}
                onClick={() => setCurrentStep(index)}
                className={`group overflow-hidden rounded-xl border transition-all hover:shadow-lg ${
                  index === currentStep 
                    ? "border-primary ring-2 ring-primary ring-offset-2" 
                    : "border-border"
                }`}
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {item.step}
                      </span>
                      <span className="truncate text-xs font-medium text-white">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Help Banner */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground md:p-8">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
                <HelpCircle className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold">
                  설치가 잘 안되거나 어려우면 전화 주세요~
                </h3>
                <p className="text-primary-foreground/80">
                  친절하게 안내해 드리겠습니다. (주)지에스티산업
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:051-897-5532">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full gap-2 font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    051-897-5532
                  </Button>
                </a>
                <a href="tel:010-4558-2991">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full gap-2 border-white/30 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
                  >
                    <Phone className="h-5 w-5" />
                    010-4558-2991
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
