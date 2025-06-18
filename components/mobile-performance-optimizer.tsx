"use client"

import { useEffect } from 'react'
import { useDisableAnimations } from '@/hooks/use-animation-preferences'

/**
 * Component that applies mobile-specific performance optimizations
 * This should be included in the layout to apply global optimizations
 */
export default function MobilePerformanceOptimizer() {
  const disableAnimations = useDisableAnimations()

  useEffect(() => {
    if (disableAnimations) {
      // Add mobile-specific performance CSS class to body
      document.body.classList.add('mobile-performance-mode')
      
      // Disable smooth scrolling on mobile for better performance
      document.documentElement.style.scrollBehavior = 'auto'
      
      // Add CSS custom property to indicate mobile mode
      document.documentElement.style.setProperty('--mobile-animations', 'disabled')
    } else {
      // Remove mobile performance mode when not needed
      document.body.classList.remove('mobile-performance-mode')
      document.documentElement.style.removeProperty('scroll-behavior')
      document.documentElement.style.removeProperty('--mobile-animations')
    }

    return () => {
      // Cleanup on unmount
      document.body.classList.remove('mobile-performance-mode')
      document.documentElement.style.removeProperty('scroll-behavior')
      document.documentElement.style.removeProperty('--mobile-animations')
    }
  }, [disableAnimations])

  // This component doesn't render anything visible
  return null
}