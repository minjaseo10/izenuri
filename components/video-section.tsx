"use client"

import { useState, useRef } from "react"
import { Upload, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const [videoUrl, setVideoUrl] = useState<string>(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%8D%EB%B3%B4%EC%98%81%EC%83%81%20version%201-1-roOIVKxE4oF1SAvPtkmeVRaB33n0fV.mp4"
  )
  const [isCustomVideo, setIsCustomVideo] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file)
      setVideoUrl(url)
      setIsCustomVideo(true)
    }
  }

  const handleRemoveVideo = () => {
    if (isCustomVideo && videoUrl) {
      URL.revokeObjectURL(videoUrl)
    }
    setVideoUrl(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%8D%EB%B3%B4%EC%98%81%EC%83%81%20version%201-1-roOIVKxE4oF1SAvPtkmeVRaB33n0fV.mp4"
    )
    setIsCustomVideo(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <section id="video" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-primary">제품 관련</span> 영상
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
                key={videoUrl}
                className="h-full w-full object-cover"
                controls
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
              </video>
            </div>
          </div>

          {/* Upload Controls */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="outline"
                onClick={triggerFileInput}
                className="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                영상 업로드
              </Button>
              
              {isCustomVideo && (
                <Button
                  variant="ghost"
                  onClick={handleRemoveVideo}
                  className="flex items-center gap-2 text-destructive hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                  기본 영상으로 복원
                </Button>
              )}
            </div>

            <p className="text-center text-sm text-muted-foreground">
              {isCustomVideo 
                ? "* 업로드된 영상이 재생됩니다"
                : "* 영상을 재생하여 누리 쾌변기의 특허 기술과 사용 방법을 자세히 확인하세요"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
