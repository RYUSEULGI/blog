import { useCallback, useRef, useState } from 'react'

export function useHover() {
  const hoverRef = useRef<HTMLDivElement>(null)

  const [isHover, setIsHover] = useState(false)

  const onMouseMove = useCallback(() => {
    setIsHover(true)

    if (!hoverRef.current) {
      return
    }

    hoverRef.current.style.transform = 'translateY(-5px)'
    hoverRef.current.style.transition = 'transform 0.3s ease-in-out'
  }, [hoverRef.current])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)

    if (!hoverRef.current) {
      return
    }

    hoverRef.current.style.transform = 'translateY(0)'
    hoverRef.current.style.transition = 'transform 0.3s ease-in-out'
  }, [hoverRef.current])

  return { ref: hoverRef, isHover, onMouseMove, onMouseLeave }
}
