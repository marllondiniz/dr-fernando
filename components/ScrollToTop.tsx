'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll para o topo sempre que a rota mudar
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // Scroll para o topo quando a página for recarregada
    window.scrollTo(0, 0)
  }, [])

  return null
}
