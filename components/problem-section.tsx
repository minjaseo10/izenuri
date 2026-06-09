"use client"

import { AlertTriangle, Droplets, Frown, ThumbsUp, Zap } from "lucide-react"

const problems = [
  { icon: AlertTriangle, text: "악성 변비로 고생하시는 분" },
  { icon: Frown, text: "딱딱한 변으로 힘드신 분" },
  { icon: AlertTriangle, text: "치질·치루로 불편하신 분" },
  { icon: Frown, text: "배가 더부룩하고 답답한 분" },
  { icon: AlertTriangle, text: "숙변이 심한 분" },
]

export function ProblemSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Problem Side */}
          <div>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              아직도{" "}
              <span className="text-destructive">변비약과 관장약</span>
              으로
              <br />
              고통을 해결하고 계신가요?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              약에 의존하지 않고, 자연스럽고 편안한 배변을 원하신다면
              <br />
              <strong className="text-foreground">누리 쾌변기</strong>가 정답입니다.
            </p>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <problem.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="font-medium text-foreground">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                <ThumbsUp className="h-4 w-4" />
                해결책이 있습니다!
              </div>

              <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                특허받은 노즐의 부드러운 물줄기로
                <br />
                <span className="text-primary">장까지 깨끗하게!</span>
              </h3>

              <p className="mb-6 text-muted-foreground">
                통증 없는 관장 케어로 잔변 모두 깔끔하게 해결하세요.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">잔변 걱정 끝!</p>
                    <p className="text-sm text-muted-foreground">깨끗한 마무리</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">속 시원한 배변!</p>
                    <p className="text-sm text-muted-foreground">상쾌한 아침</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
