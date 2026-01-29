import { useCallback, useMemo, useState, type MouseEvent } from 'react'

type NavItem = {
  label: string
  href: string
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems: NavItem[] = useMemo(
    () => [
      { label: '首页', href: '#home' },
      { label: '关于我', href: '#about' },
      { label: '项目', href: '#projects' },
      { label: '联系', href: '#contact' },
    ],
    [],
  )

  // 平滑滚动：点击导航时滚动到目标区域
  const handleNavClick = useCallback((href: string) => {
    const el = document.querySelector(href)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#home"
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="group inline-flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />
          <span className="text-sm font-semibold tracking-wide">
            <span className="text-white">My</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-white/5 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/10"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-border bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((v: boolean) => !v)}
          aria-label="打开导航菜单"
          aria-expanded={isOpen}
        >
          菜单
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-bg/90 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                  setIsOpen(false)
                }}
                className="rounded-lg px-3 py-2 text-sm text-white/85 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
