import Image from "next/image"

export function FlyerSection() {
  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* 앞면 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/flyer-front.png"
              alt="이젠누리 102 전단지 앞면"
              width={800}
              height={1130}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
          {/* 뒷면 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/flyer-back.png"
              alt="이젠누리 102 전단지 뒷면"
              width={800}
              height={1130}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
