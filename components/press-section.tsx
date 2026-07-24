"use client"

import { useState } from "react"
import Image from "next/image"
import { Newspaper, X, ZoomIn } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "쾌변은 건강한 삶 보장해줘",
    source: "등자당한의원 인터뷰",
    summary: "대장항문 전문 한의사 김동호 원장이 직접 사용하고 환자들에게 권유한 쾌변기 효과 인터뷰",
    image: "/article-1.jpg",
    highlights: [
      "배변 시간이 5분 이상이라면 쾌변기가 꼭 필요합니다",
      "강한 변의를 느끼게 해주고 잔변감 없이 상쾌함 제공",
      "변비·치질 등 항문질환 예방에 직접적인 도움",
    ],
    modalTitle: "쾌변은 건강한 삶 보장해줘",
    modalDesc:
      "대장항문 전문 한의사 김동호 원장은 쾌변기를 직접 사용하고 환자들에게 권유한 결과, 강한 변의 유도와 잔변감 해소에 탁월한 효과를 확인했습니다. '뒤 끝이 깔끔해 변비환자에게 좋습니다'라고 직접 밝혔으며, 회전 물줄기의 세정 효과로 치질 및 변비 개선에 크게 기여한다고 설명했습니다.",
  },
  {
    id: 2,
    title: "센시태변기 의사 추천서",
    source: "영등포 종도의과 원장 김정길",
    summary: "외과 원장이 작성한 공식 의사 추천서. 중앙집중식 회전기포 물줄기의 임상적 효과 기술",
    image: "/article-2.jpg",
    highlights: [
      "중앙집중식 회전기포 물줄기로 배변 시간 단축",
      "항문 괄약근 건강 상태 획기적 향상",
      "변비, 치질, 치루, 치핵, 항문주위염 개선에 도움",
    ],
    modalTitle: "외과 전문의 공식 추천서",
    modalDesc:
      "영등포 종도의과 원장 김정길 원장과 대장항문과 전문의가 공동 서명한 공식 추천서입니다. 중앙집중식 회전기포 물줄기를 이용한 분사 노즐 개발로 배변 시간을 줄이고 강한 변의를 통해 쾌변과 손쉬운 관장을 유도하며, 항문 괄약근의 건강 상태를 향상시킨다는 임상 소견을 담고 있습니다.",
  },
  {
    id: 3,
    title: "쾌변의 즐거움 — 회전 물줄기의 강력한 세정효과",
    source: "신문 기사 스크랩",
    summary: "회전 물줄기의 강력한 세정 효과, 치질 및 변비 개선 원리를 자세히 설명한 기사",
    image: "/article-3.jpg",
    highlights: [
      "회전 물줄기가 직장 속 20cm까지 깨끗하게 세척",
      "치질은 회전 물줄기 자극으로 새 살 생성 → 자연 치료",
      "변비: 딱딱해지기 전 직장에서 빠르게 내보내는 원리",
    ],
    modalTitle: "쾌변의 즐거움 — 회전 물줄기의 강력한 세정효과",
    modalDesc:
      "모양은 단순하지만 비데보다 훨씬 뛰어난 쾌변기의 작동 원리를 상세히 기술한 기사입니다. 항문 속까지 깊이 들어가는 회전 물줄기가 치질과 변비를 근본적으로 해결하는 원리, 사용법, 그리고 '1개월 내 만족 보장' 환불 정책까지 소개합니다.",
  },
]

export function PressSection() {
  const [selected, setSelected] = useState<(typeof articles)[0] | null>(null)

  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Newspaper className="h-4 w-4" />
            언론 보도
          </div>
          <h2 className="mb-4 break-keep text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            언론이 주목한 이젠누리
          </h2>
          <p className="break-keep text-lg text-muted-foreground">
            의료 전문지와 신문에서 검증된 쾌변기의 효과를 직접 확인해 보세요.
          </p>
        </div>

        {/* Article Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
            >
              {/* Thumbnail — clickable */}
              <button
                onClick={() => setSelected(article)}
                className="group relative block aspect-[3/4] w-full overflow-hidden bg-muted"
                aria-label={`${article.title} 원문 보기`}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <ZoomIn className="h-10 w-10 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </button>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {article.source}
                  </p>
                  <h3 className="break-keep text-base font-bold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-1 break-keep text-sm text-muted-foreground">{article.summary}</p>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {article.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="break-keep">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => setSelected(article)}
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-primary/5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Newspaper className="h-4 w-4" />
                  기사 원문 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* Modal content */}
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {selected.source}
                </p>
                <h3 className="break-keep text-lg font-bold text-foreground">{selected.modalTitle}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted"
                aria-label="닫기"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal body — scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid gap-0 md:grid-cols-2">
                {/* Image */}
                <div className="relative min-h-[300px] bg-muted md:min-h-[500px]">
                  <Image
                    src={selected.image}
                    alt={selected.modalTitle}
                    fill
                    className="object-contain p-4"
                    unoptimized
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-5 p-6">
                  <div>
                    <h4 className="mb-2 text-base font-bold text-foreground">기사 핵심 내용</h4>
                    <p className="break-keep text-sm leading-loose text-muted-foreground">
                      {selected.modalDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-bold text-foreground">주요 포인트</h4>
                    <ul className="space-y-2">
                      {selected.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 rounded-lg bg-primary/5 px-3 py-2 text-sm text-foreground"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="break-keep">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="break-keep text-sm font-medium text-primary">
                      이 기사는 실제 의료 전문가 및 언론에 의해 검증된 내용을 담고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
