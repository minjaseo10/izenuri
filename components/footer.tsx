import Link from "next/link"
import { Phone, MapPin, Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                누리
              </div>
              <span className="text-xl font-bold">이젠누리</span>
            </div>
            <p className="text-sm text-background/70">
              특허받은 부드러운 물줄기로
              <br />
              장까지 깨끗하게!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">바로가기</h3>
            <nav className="flex flex-col gap-2 text-sm text-background/70">
              <Link href="#features" className="hover:text-background transition-colors">
                쾌변의 비밀
              </Link>
              <Link href="#how-it-works" className="hover:text-background transition-colors">
                상세 기능
              </Link>
              <Link href="#usage" className="hover:text-background transition-colors">
                사용 방법
              </Link>
              <Link href="#pricing" className="hover:text-background transition-colors">
                무료 체험 이벤트
              </Link>
              <Link href="#trust" className="hover:text-background transition-colors">
                회사 소개
              </Link>
            </nav>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="mb-4 font-semibold">회사 정보</h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p>제조원: (주)단비코리아</p>
                  <p>판매원: (주)지에스티산업</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <p>부산광역시 강서구 공항로767번나길 36 (대저2동)</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">연락처</h3>
            <div className="space-y-3 text-sm text-background/70">
              <a
                href="tel:051-897-5532"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                051-897-5532
              </a>
              <a
                href="tel:010-4558-2991"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                010-4558-2991
              </a>
              <p>이젠누리 총판</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6">
          <p className="text-center text-xs text-background/50">
            © {new Date().getFullYear()} 이젠누리 (IZENNURI) by (주)단비코리아. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
