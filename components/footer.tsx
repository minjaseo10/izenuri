import Link from "next/link"
import { Phone, MapPin, Building2, ExternalLink, Mail, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">

          {/* 1. Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-background/40 uppercase mb-1">Healthcare Innovation</p>
              <h2 className="text-2xl font-extrabold tracking-tight text-background">IZENNURI</h2>
              <p className="text-sm text-background/60 mt-0.5">이젠누리</p>
            </div>
            <p className="text-sm leading-relaxed text-background/70">
              특허받은 부드러운 기기로 장까지 깨끗하게.
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="rounded-full border border-background/20 px-3 py-1 text-[10px] font-semibold tracking-wide text-background/50 uppercase">
                Medical Device Certified
              </span>
              <span className="rounded-full border border-background/20 px-3 py-1 text-[10px] font-semibold tracking-wide text-background/50 uppercase">
                Healthcare Innovation
              </span>
            </div>

            {/* Related Sites */}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href="https://map.naver.com/p/entry/place/1162329141?placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202606091453&locale=ko&svcName=map_pcv5&c=15.00,0,0,0,dh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-background/50 transition-colors hover:text-background"
              >
                <ExternalLink className="h-3 w-3 shrink-0" />
                지에스티 산업 네이버 플레이스
              </a>
              <a
                href="https://blog.naver.com/izennuri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-background/50 transition-colors hover:text-background"
              >
                <ExternalLink className="h-3 w-3 shrink-0" />
                이젠누리 쾌변기 네이버 블로그
              </a>
            </div>
          </div>

          {/* 2. Company Info */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[0.15em] uppercase text-background/40">기업 정보</h3>
            <dl className="space-y-2.5 text-sm">
              {[
                ["상호명", "(주)지에스티 산업"],
                ["대표자", "서일수"],
                ["사업자등록번호", "177-88-00875"],
                ["통신판매업 신고번호", "제 2019-부산강서구-0442 호"],
                ["개인정보관리책임자", "서일수"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-wrap gap-x-2">
                  <dt className="shrink-0 text-background/40">{label}</dt>
                  <dd className="text-background/75">{value}</dd>
                </div>
              ))}
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-background/40" />
                <span className="text-background/75 leading-relaxed">
                  부산광역시 강서구 공항로767번나길 36 (대저2동)
                </span>
              </div>
            </dl>
          </div>

          {/* 3. Contact + Legal */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[0.15em] uppercase text-background/40">고객센터</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:051-897-5532"
                className="flex items-center gap-2 text-background/75 transition-colors hover:text-background"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-background/40" />
                <span>051-897-5532 <span className="text-background/40">(사무실)</span></span>
              </a>
              <a
                href="tel:010-4841-2990"
                className="flex items-center gap-2 text-background/75 transition-colors hover:text-background"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-background/40" />
                <span>010-4841-2990 <span className="text-background/40">(담당자)</span></span>
              </a>
            </div>

            {/* Quick Nav */}
            <h3 className="mb-4 mt-8 text-xs font-semibold tracking-[0.15em] uppercase text-background/40">바로가기</h3>
            <nav className="flex flex-col gap-2 text-sm">
              {[
                ["#features", "쾌변의 비밀"],
                ["#how-it-works", "상세 기능"],
                ["#usage", "사용 방법"],
                ["#pricing", "특별 혜택"],
                ["#trust", "회사 소개"],
                ["#contact", "상담 신청"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-background/50 transition-colors hover:text-background">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="text-xs text-background/35 leading-relaxed">
            © 2026 이젠누리 (IZENNURI) BY (주)지에스티 산업. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-background/40">
            <Link href="/terms" className="transition-colors hover:text-background/70">이용약관</Link>
            <Link href="/privacy" className="transition-colors hover:text-background/70">개인정보처리방침</Link>
            <Link href="/refund" className="transition-colors hover:text-background/70">배송/환불 정책</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
