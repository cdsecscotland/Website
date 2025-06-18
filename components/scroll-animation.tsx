"use client"

import { useEffect, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { useAnimationPreferences } from "@/hooks/use-animation-preferences"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom" | "none"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  forceAnimation?: boolean // Override mobile detection if needed
}

export default function ScrollAnimation({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  forceAnimation = false,
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold, triggerOnce: true })
  const { disableAnimations } = useAnimationPreferences()

  // Override animation preferences if forceAnimation is true
  const shouldDisableAnimations = disableAnimations && !forceAnimation

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      opacity: shouldDisableAnimations ? 1 : 0,
      y: shouldDisableAnimations ? 0 : (animation === "slide-up" ? 50 : 0),
      x: shouldDisableAnimations ? 0 : (animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0),
      scale: shouldDisableAnimations ? 1 : (animation === "zoom" ? 0.8 : 1),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: shouldDisableAnimations ? { duration: 0 } : {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  // If animations should be disabled or animation is set to "none", return static content
  if (animation === "none" || shouldDisableAnimations) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
