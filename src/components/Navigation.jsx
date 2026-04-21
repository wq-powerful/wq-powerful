import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { id: 'top', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'why-me', label: '优势' },
  { id: 'cases', label: '项目' },
  { id: 'method', label: '方法' },
  { id: 'expression', label: '赋能' },
  { id: 'contact', label: '联系' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('top')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuId = useId()
  const toggleButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const shouldRestoreFocusRef = useRef(false)

  useEffect(() => {
    const syncNavigationState = () => {
      setScrolled(window.scrollY > 20)
      const sections = navigation.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 120

      let currentSection = navigation[0].id
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = navigation[i].id
          break
        }
      }
      setActiveSection(currentSection)
    }

    syncNavigationState()
    window.addEventListener('scroll', syncNavigationState, { passive: true })
    window.addEventListener('resize', syncNavigationState)

    return () => {
      window.removeEventListener('scroll', syncNavigationState)
      window.removeEventListener('resize', syncNavigationState)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      if (shouldRestoreFocusRef.current) {
        toggleButtonRef.current?.focus()
        shouldRestoreFocusRef.current = false
      }
      return undefined
    }

    const { body, documentElement } = document
    const previousBodyOverflow = body.style.overflow
    const previousHtmlOverflow = documentElement.style.overflow
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

    documentElement.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

    const focusFirstElement = () => {
      const focusableElements = mobileMenuRef.current
        ? Array.from(mobileMenuRef.current.querySelectorAll(focusableSelector))
        : []

      if (focusableElements.length > 0) {
        focusableElements[0].focus()
        return
      }

      mobileMenuRef.current?.focus()
    }

    const frameId = window.requestAnimationFrame(focusFirstElement)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        shouldRestoreFocusRef.current = true
        setMobileOpen(false)
        return
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) {
        return
      }

      const focusableElements = Array.from(mobileMenuRef.current.querySelectorAll(focusableSelector))

      if (focusableElements.length === 0) {
        event.preventDefault()
        mobileMenuRef.current.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (!mobileMenuRef.current.contains(activeElement)) {
        event.preventDefault()
        if (event.shiftKey) {
          lastElement.focus()
        } else {
          firstElement.focus()
        }
        return
      }

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(frameId)
      document.removeEventListener('keydown', handleKeyDown)
      body.style.overflow = previousBodyOverflow
      documentElement.style.overflow = previousHtmlOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleBreakpointChange = (event) => {
      if (event.matches) {
        shouldRestoreFocusRef.current = false
        setMobileOpen(false)
      }
    }

    handleBreakpointChange(mediaQuery)

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleBreakpointChange)
      return () => mediaQuery.removeEventListener('change', handleBreakpointChange)
    }

    mediaQuery.addListener(handleBreakpointChange)
    return () => mediaQuery.removeListener(handleBreakpointChange)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-slate-200/50' : ''
      }`}
      role="banner"
    >
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto px-4 sm:px-6 xl:px-8 h-12 sm:h-11 xl:h-14 2xl:h-16 flex items-center justify-between">
        <a href="#top" className="text-[14px] sm:text-[13px] xl:text-base 2xl:text-lg font-semibold text-slate-900 tracking-tight hover:opacity-70 transition-opacity">
          吴倩
        </a>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-0.5 xl:gap-1" role="navigation" aria-label="主导航">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-2.5 xl:px-3.5 py-1 xl:py-1.5 rounded-full text-[12px] xl:text-sm 2xl:text-base transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex px-3.5 xl:px-5 py-1 xl:py-1.5 2xl:py-2 bg-slate-900 text-white text-[11px] xl:text-sm 2xl:text-base font-medium rounded-full hover:bg-slate-700 transition-colors">
            联系我
          </a>

          {/* 移动端汉堡按钮 */}
          <button
            ref={toggleButtonRef}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => {
              shouldRestoreFocusRef.current = mobileOpen
              setMobileOpen(!mobileOpen)
            }}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-haspopup="dialog"
          >
            {mobileOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div
          id={menuId}
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 top-12 sm:top-11 bg-white/95 backdrop-blur-lg z-40"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${menuId}-title`}
          tabIndex={-1}
        >
          <h2 id={`${menuId}-title`} className="sr-only">移动端导航</h2>
          <nav className="flex flex-col items-center justify-center gap-2 pt-8 pb-12 px-6" aria-label="移动端导航">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  shouldRestoreFocusRef.current = false
                  setMobileOpen(false)
                }}
                className={`w-full max-w-xs text-center px-6 py-3 rounded-xl text-base transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-brand-600 font-semibold bg-brand-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                shouldRestoreFocusRef.current = false
                setMobileOpen(false)
              }}
              className="mt-4 w-full max-w-xs text-center px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-700 transition-colors"
            >
              联系我
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
