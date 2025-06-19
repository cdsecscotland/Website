import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    
    try {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
        if (typeof window !== 'undefined' && window.innerWidth) {
          setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        }
      }
      
      // Check if addEventListener is supported (older browsers might not have it)
      if (mql.addEventListener) {
        mql.addEventListener("change", onChange)
      } else if (mql.addListener) {
        // Fallback for older browsers
        mql.addListener(onChange)
      }
      
      // Initial check
      onChange()
      
      return () => {
        if (mql.removeEventListener) {
          mql.removeEventListener("change", onChange)
        } else if (mql.removeListener) {
          mql.removeListener(onChange)
        }
      }
    } catch (error) {
      console.warn('Error setting up mobile detection:', error)
      // Fallback: assume desktop
      setIsMobile(false)
    }
  }, [])

  return isMobile
}
