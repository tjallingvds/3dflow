import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Always scroll to top first when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

    // Then handle hash navigation if present
    if (hash) {
      // Wait for page to render, then scroll to hash element
      const scrollToHash = () => {
        const element = document.querySelector(hash)
        if (element) {
          const offset = 100 // Account for sticky header
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          return true
        }
        return false
      }

      // Try immediately, then retry after a short delay if element not found
      if (!scrollToHash()) {
        setTimeout(() => {
          scrollToHash()
        }, 100)
      }
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop

