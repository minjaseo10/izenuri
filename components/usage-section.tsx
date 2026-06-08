"use client"

const steps = [
  {
    number: "1",
    title: "바짝 앉기",
    description: "변좌 뒤로 바짝 앉아 허리를 숙이고 항문에 힘을 빼세요.",
  },
  {
    number: "2",
    title: "수압 조절",
    description: "레버를 위로 올려 수압을 조절하면 물이 부드럽게 들어갑니다.",
  },
  {
    number: "3",
    title: "물 채우기",
    description: "아랫배와 장내에 물이 차는 느낌이 들면 레버를 내립니다.",
  },
  {
    number: "4",
    title: "시원한 배출",
    description: "항문에 힘을 주어 시원하게 배설하세요! 대변, 가스, 잔변이 완벽 배출됩니다.",
  },
]

export function UsageSection() {
  return (
    <section id="usage" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            누리 쾌변기,{" "}
            <span className="text-primary">이렇게 사용</span>하시면
            <br className="hidden sm:block" />
            가장 시원합니다!
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            간단한 4단계로 속 시원한 배변을 경험하세요
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent md:block" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-lg">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tip box */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-6 md:p-8">
          <p className="text-center text-lg font-medium text-foreground">
            💡 <strong>팁:</strong> 처음에는 약한 수압으로 시작하여 점차 익숙해지면 수압을 높여보세요!
          </p>
        </div>
      </div>
    </section>
  )
}
