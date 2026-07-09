"use client"

import { useState, useRef } from "react"
import { Play, Film } from "lucide-react"

const TABS = [
  {
    id: "review",
    label: "제품 소개 및 리뷰",
    icon: Play,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%8D%EB%B3%B4%EC%98%81%EC%83%81%20version%201-1-roOIVKxE4oF1SAvPtkmeVRaB33n0fV.mp4",
  },
  {
    id: "3d",
    label: "3D 작동 원리",
    icon: Film,
    src: "/3d_principle.mp4",
  },
]

export function VideoSection() {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const [fading, setFading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTabClick = (tabId: string) => {
    if (tabId === activeTab) return
    setFading(true)
    setTimeout(() => {
      setActiveTab(tabId)
      setFading(false)
    }, 250)
  }

  const currentTab = TABS.find((t) => t.id === activeTab)!

  return (
    <section id="video" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-primary">제품 관련</span> 영상
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            이젠누리 쾌변기의 작동 원리와 사용법을 영상으로 확인하세요
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Tab Buttons */}
          <div className="mb-4 flex gap-2 rounded-xl bg-background border border-border p-1 sm:inline-flex sm:w-auto sm:mx-auto sm:mb-6">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Video Player */}
          <div className="overflow-hidden rounded-2xl bg-card shadow-2xl border border-border">
            <div
              className={`aspect-video transition-opacity duration-250 ${
                fading ? "opacity-0" : "opacity-100"
              }`}
            >
              <video
                ref={videoRef}
                key={currentTab.src}
                className="h-full w-full object-cover"
                controls
                preload="metadata"
              >
                <source src={currentTab.src} type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
              </video>
            </div>
          </div>

          {/* Current tab label */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            * 현재 재생: <span className="font-medium text-foreground">{currentTab.label}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
