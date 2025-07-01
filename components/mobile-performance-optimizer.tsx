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
 
 // Reduce transform complexity on mobile
 document.documentElement.style.setProperty('--mobile-transforms', 'scale(1)')
 
 // Disable expensive CSS filters on mobile
 document.documentElement.style.setProperty('--mobile-filters', 'none')
 } else {
 // Remove mobile performance mode when not needed
 document.body.classList.remove('mobile-performance-mode')
 document.documentElement.style.removeProperty('scroll-behavior')
 document.documentElement.style.removeProperty('--mobile-animations')
 document.documentElement.style.removeProperty('--mobile-transforms')
 document.documentElement.style.removeProperty('--mobile-filters')
 }

 return () => {
 // Cleanup on unmount
 document.body.classList.remove('mobile-performance-mode')
 document.documentElement.style.removeProperty('scroll-behavior')
 document.documentElement.style.removeProperty('--mobile-animations')
 document.documentElement.style.removeProperty('--mobile-transforms')
 document.documentElement.style.removeProperty('--mobile-filters')
 }
 }, [disableAnimations])

 // Additional first load optimizations
 useEffect(() => {
 // Preload critical resources
 const link = document.createElement('link')
 link.rel = 'preload'
 link.href = '/logo-local.png'
 link.as = 'image'
 document.head.appendChild(link)

 // Optimize font loading
 if ('fonts' in document) {
 document.fonts.load('16px Inter').catch(() => {})
 }

 return () => {
 if (link.parentNode) {
 link.parentNode.removeChild(link)
 }
 }
 }, [])

 // This component doesn't render anything visible
 return null
}