import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Baby, Stethoscope, Heart } from "lucide-react"

const cards = [
  {
    icon: Baby,
    title: "프리미엄 산후조리원",
    description:
      "출산 후 변비와 통증으로 고생하는 산모들을 위한 자극 없는 부드러운 배변 케어 필수품.",
  },
  {
    icon: Stethoscope,
    title: "대장항문외과 & 대형 한의원",
    description:
      "치질, 변비 환자 대기실 및 입원실 화장실에 설치하여 환자의 고통을 덜어주는 맞춤형 위생 관리.",
  },
  {
    icon: Heart,
    title: "프리미엄 요양원 & 시니어 타운",
    description:
      "배변 활동이 약해진 어르신들의 쾌적한 장 관리와 위생적인 생활을 위한 필수 인프라.",
  },
]

export function B2BSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-5 break-keep text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            전문 기관이 선택한 쾌변 케어,{" "}
            <span className="text-primary">이젠누리</span>
          </h2>
          <p className="mx-auto max-w-2xl break-keep text-xl leading-relaxed text-muted-foreground md:text-2xl">
            산모, 어르신, 환자분들의 편안한 일상을 위해 프리미엄 체험존을 확대하고 있습니다.
            <br className="hidden md:block" />
            병원 및 요양 시설 입점을 환영합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 grid-cols-1 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:shadow-md hover:border-primary/40"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-primary/10">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="break-keep text-xl font-bold leading-snug text-foreground">{card.title}</h3>
              <p className="break-keep text-base leading-loose text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-base"
          >
            <Link href="#contact">입점 및 대량 구매 문의하기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
