import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navigation.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigation[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 锁定 body 滚动
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

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
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          >
            {mobileOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-12 sm:top-11 bg-white/95 backdrop-blur-lg z-40">
          <nav className="flex flex-col items-center justify-center gap-2 pt-8 pb-12 px-6" aria-label="移动端导航">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
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
              onClick={() => setMobileOpen(false)}
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
