"use client"

import { useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

export function MobileOptimizations() {
  const isMobile = useMobile()

  useEffect(() => {
    // Apply mobile-specific optimizations
    if (isMobile) {
      // Optimize images for mobile
      const lazyImages = document.querySelectorAll('img[loading="lazy"]')
      lazyImages.forEach((img) => {
        const imgElement = img as HTMLImageElement
        if (imgElement.dataset.src) {
          imgElement.src = imgElement.dataset.src
        }
      })

      // Optimize touch interactions
      document.documentElement.style.setProperty("--touch-target-size", "44px")
    }
  }, [isMobile])

  return null
}
