import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  title: '이젠누리 쾌변기 | 특가 판매',
  description: '특허받은 부드러운 물줄기로 장까지 깨끗하게! 한정 특가 판매 이벤트 진행 중. 잔변 걱정 끝, 속 시원한 배변. 3년 무상 A/S 보장.',
  keywords: ['쾌변기', '비데', '변비', '관장', '이젠누리', '잔변', '배변', '특가판매', '102쾌변기'],
  authors: [{ name: '이젠누리' }],
  openGraph: {
    title: '이젠누리 쾌변기 | 특가 판매',
    description: '특허받은 부드러운 물줄기로 장까지 깨끗하게! 한정 특가 판매 이벤트 진행 중.',
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    google: 'e2EWsNhl_-bCSMbimv85Nh8-5Ju9L4msxFRGTHFNFPc',
    other: {
      'naver-site-verification': 'c3df24447bcb6027cb7a8afa8ad1aad6801df919',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background scroll-smooth">
      <body className={`${notoSansKR.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
