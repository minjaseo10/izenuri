"use client"

import { Quote, Stethoscope } from "lucide-react"

const experts = [
  {
    badge: "대장항문 전문 한의사",
    name: "김동호 원장",
    clinic: "등자당한의원",
    articleImage: "/article-1.jpg",
    comment:
      "건강한 삶의 척도는 쾌변입니다. 이젠누리는 강한 변의를 유도하고 잔변감을 없애주어 항문질환 예방과 상쾌한 하루를 보장합니다.",
  },
  {
    badge: "외과 원장",
    name: "김정길 원장",
    clinic: "영등포 종도의과",
    articleImage: "/article-2.jpg",
    comment:
      "세계 최초 중앙집중식 회전기포 물줄기로 배변 시간을 줄이고 손쉬운 관장을 유도하여, 괄약근의 건강 상태를 획기적으로 향상시킵니다.",
  },
  {
    badge: "대장항문외과 전문의",
    name: "정상욱 전문의",
    clinic: "대장항문외과",
    articleImage: "/article-3.jpg",
    comment:
      "수년의 임상경험을 바탕으로, 약물을 사용하기에 앞서 쾌변기 사용을 적극 권장합니다. 괄약근 반사 반응을 일으켜 변비 치유에 탁월합니다.",
  },
]

export function ExpertsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Stethoscope className="h-4 w-4" />
            Medical Experts
          </div>
          <h2 className="mb-4 break-keep text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            전문가가 선택한 이젠누리
          </h2>
          <p className="break-keep text-lg text-muted-foreground">
            대장항문 전문 의료진이 직접 사용하고, 환자들에게 적극 권장하는 제품입니다.
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md overflow-hidden"
            >
              {/* Badge */}
              <div className="bg-primary/8 border-b border-border px-5 py-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Stethoscope className="h-3.5 w-3.5" />
                  {expert.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />
                  <p className="break-keep pl-5 text-base leading-loose text-muted-foreground">
                    &ldquo;{expert.comment}&rdquo;
                  </p>
                </div>

                {/* Doctor info */}
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{expert.name}</p>
                    <p className="text-sm text-muted-foreground">{expert.clinic}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
