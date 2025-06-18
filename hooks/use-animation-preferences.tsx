"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useIsMobile } from './use-mobile'

interface AnimationPreferences {
  disableAnimations: boolean
  prefersReducedMotion: boolean
  isMobile: boolean
  setForceAnimations: (force: boolean) => void
}

const AnimationContext = createContext<AnimationPreferences | undefined>(undefined)

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const isMobile = useIsMobile()
  const [forceAnimations, setForceAnimations] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check user's motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
      mediaQuery.addEventListener('change', handleChange)
      
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const disableAnimations = (isMobile && !forceAnimations) || prefersReducedMotion

  const value: AnimationPreferences = {
    disableAnimations,
    prefersReducedMotion,
    isMobile,
    setForceAnimations,
  }

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimationPreferences(): AnimationPreferences {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error('useAnimationPreferences must be used within an AnimationProvider')
  }
  return context
}

// Utility hook for components that just need to know if animations should be disabled
export function useDisableAnimations(): boolean {
  const { disableAnimations } = useAnimationPreferences()
  return disableAnimations
}