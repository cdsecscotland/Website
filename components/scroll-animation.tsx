"use client"

import { useEffect, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom" | "none"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 50 : 0,
      x: animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0,
      scale: animation === "zoom" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  if (animation === "none") {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
