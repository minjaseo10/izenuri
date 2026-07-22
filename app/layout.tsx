import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-noto-sans-kr',
})

const BASE_URL = 'https://www.dbk.kr'

export const metadata: Metadata = {
  title: '이젠누리 쾌변기 | 변비 해결의 새로운 기준, 특허받은 무전원 비데',
  description: '전기 없이 안전하게 물청소 가능한 특허받은 기계식 무전원 비데 이젠누리 102! 잔변감 없이 상쾌한 하루를 위한 부산 쾌변기(단비 코리아)를 지금 만나보세요.',
  keywords: ['전길용 쾌변기', '부산 쾌변기', '이젠누리 쾌변기', '쾌변기', '이젠누리', '단비 코리아', '무전원 비데', '기계식 비데', '변비 해결', '잔변'],
  authors: [{ name: '이젠누리 (단비 코리아)' }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: '이젠누리 쾌변기 | 변비 해결의 새로운 기준, 특허받은 무전원 비데',
    description: '전기 없이 안전하게 물청소 가능한 특허받은 기계식 무전원 비데 이젠누리 102! 잔변감 없이 상쾌한 하루를 위한 부산 쾌변기(단비 코리아)를 지금 만나보세요.',
    url: BASE_URL,
    siteName: '이젠누리 쾌변기',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/flyer-front.png',
        width: 800,
        height: 1100,
        alt: '이젠누리 102 쾌변기 - 변비 해결의 새로운 기준',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '이젠누리 쾌변기 | 변비 해결의 새로운 기준, 특허받은 무전원 비데',
    description: '전기 없이 안전하게 물청소 가능한 특허받은 기계식 무전원 비데 이젠누리 102!',
    images: ['/flyer-front.png'],
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
