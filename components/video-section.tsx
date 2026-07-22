"use client"

export function VideoSection() {
  return (
    <section id="video" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-primary">제품 시연</span> 영상
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            누리 쾌변기의 작동 원리와 사용법을 영상으로 확인하세요
          </p>
        </div>

        {/* Video Container */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl border border-border">
            <div className="aspect-video">
              <video
                className="h-full w-full object-cover"
                controls
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9D%B4%EC%A0%A0%EB%88%84%EB%A6%AC%20%EC%A0%84%EB%8B%A8%EC%A7%80%20%ED%99%8D%EB%B3%B4%EC%9A%A9%20%EB%A7%88%EB%AC%B4%EB%A6%AC-6mqn7zJqitLo0lzq040G9ONYfh2hU5.png"
                preload="metadata"
              >
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778197668_1778197627_KakaoTalk_20260507_144518953_vrew_%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-EbMzO8xFVRj20VijWhwTFy2xHAlajA.mp4"
                  type="video/mp4"
                />
                브라우저가 비디오 태그를 지원하지 않습니다.
              </video>
            </div>
          </div>

          {/* Video description */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            * 영상을 재생하여 누리 쾌변기의 특허 기술과 사용 방법을 자세히 확인하세요
          </p>
        </div>
      </div>
    </section>
  )
}
