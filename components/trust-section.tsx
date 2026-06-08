"use client"

import { Building2, Award, Shield, Wrench, Heart, Globe, Zap, FileCheck } from "lucide-react"

export function TrustSection() {
  const trustPoints = [
    {
      icon: Wrench,
      title: "기술 중심 제조기업",
      description:
        "단순 유통이 아닌 직접 개발·제조 기반 기업입니다. 특허 기반 노즐 기술과 수압 조절 시스템으로 '결과'를 만드는 기술을 추구합니다.",
    },
    {
      icon: Heart,
      title: "위생을 넘어 건강까지",
      description:
        "기존 비데가 '씻는 것'에 집중했다면, 이젠누리는 '비우는 것'까지 관리합니다. 잔변 제거, 가스 배출 도움, 변비 완화 보조 기능을 제공합니다.",
    },
    {
      icon: Shield,
      title: "인증으로 증명된 신뢰",
      description:
        "단비코리아만의 특허 기반 노즐 기술로 품질과 안전을 최우선으로 생각합니다. 엄격한 생산 및 검사 공정 운영으로 신뢰를 증명합니다.",
    },
  ]

  const experiences = [
    "더 편안한 아침",
    "더 가벼운 하루",
    "더 깨끗한 생활",
  ]

  return (
    <section id="trust" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* 회사 소개 헤더 */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Building2 className="h-4 w-4" />
            단비코리아 소개
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            세상에 없던 기술,
            <br />
            <span className="text-primary">이젠누리</span>로 완성하다
          </h2>
          <p className="text-muted-foreground">
            (주)단비코리아는 사람의 건강과 위생, 그리고 일상의 편안함을 바꾸는 기술을 연구하고 개발하는 기업입니다.
          </p>
        </div>

        {/* 전기 불필요 강조 배너 */}
        <div className="mb-16 rounded-2xl border-2 border-accent bg-gradient-to-r from-accent/10 to-primary/10 p-6 md:p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/20">
              <Zap className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
                전기 없이 작동하는 <span className="text-accent">기계식 쾌변기</span>
              </h3>
              <p className="text-muted-foreground">
                이젠누리 쾌변기는 전기를 사용하지 않는 순수 기계식 작동 방식입니다. 
                전기 요금 걱정 없이, 감전 위험 없이, 언제 어디서나 안전하게 사용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 신뢰 포인트 */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* 특허 인증 섹션 */}
        <div className="mb-16 rounded-2xl border border-border bg-background p-6 md:p-8">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <FileCheck className="h-5 w-5 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">특허 기술 인증</h3>
              <p className="text-sm text-muted-foreground">대한민국 특허청 정식 등록 특허 5건 보유</p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uhGbkbiSuIjJel33K31cEOmAJ4EOey.png"
              alt="단비코리아 특허증 5건 - 비데용 노즐 어셈블리, 공기 청정기용 필터 등"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* 경험 섹션 */}
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold text-foreground md:text-2xl">
                제품이 아닌 경험을 만듭니다
              </h3>
              <p className="text-muted-foreground">
                단비코리아는 단순한 위생기기를 만드는 것이 아닙니다.
                <br />
                생활의 질을 바꾸는 경험을 제공합니다.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {experiences.map((exp, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 비전 */}
        <div className="mt-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
            <Globe className="h-4 w-4 text-accent" />
            단비코리아의 비전
          </div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            &ldquo;배변 건강을 바꾸는 기술&rdquo; - 대한민국을 넘어 글로벌 시장에서 새로운 위생 기준을 만들고, 새로운 생활 문화를 제시하며, 새로운 기술의 기준이 되는 기업이 되고자 합니다.
          </p>
        </div>

        {/* 회사 정보 */}
        <div className="mt-12 rounded-xl bg-background p-6 md:p-8">
          <div className="grid gap-6 text-sm md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">제조원</p>
                <p className="text-muted-foreground">(주)단비코리아</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">판매원</p>
                <p className="text-muted-foreground">(주)지에스티산업</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">주소</p>
                <p className="text-muted-foreground">부산광역시 강서구 공항로767번나길 36 (대저2동)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">연락처</p>
                <p className="text-muted-foreground">
                  051-897-5532
                  <br />
                  010-4558-2991
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
