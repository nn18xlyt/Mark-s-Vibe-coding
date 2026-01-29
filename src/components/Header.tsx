import { useCallback, useMemo, useState, type MouseEvent } from 'react'
import { Icon } from '@iconify/react'

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8 lg:-translate-x-6">
        <a
          href="#home"
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="group inline-flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-moss via-acid to-ember" />
          <span className="text-sm font-semibold tracking-wide">
            <span className="text-fg">My</span>{' '}
            <span className="bg-gradient-to-r from-moss via-acid to-ember bg-clip-text text-transparent">
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
              className="text-sm text-fg/70 transition duration-200 ease-out hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/nn18xlyt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-fg/5 px-3 py-1.5 text-sm text-fg/85 transition duration-200 ease-out hover:bg-fg/10"
          >
            <Icon icon="mdi:github" className="h-4 w-4" />
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-border bg-fg/5 px-3 py-2 text-sm text-fg/85 transition duration-200 ease-out hover:bg-fg/10 md:hidden"
          onClick={() => setIsOpen((v: boolean) => !v)}
          aria-label="打开导航菜单"
          aria-expanded={isOpen}
        >
          菜单
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-bg/90 md:hidden">
          <div className="flex flex-col gap-2 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                  setIsOpen(false)
                }}
                className="rounded-lg px-3 py-2 text-sm text-fg/80 transition duration-200 ease-out hover:bg-fg/5 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/nn18xlyt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-fg/5 px-3 py-2 text-sm text-fg/85 transition duration-200 ease-out hover:bg-fg/10"
            >
              <Icon icon="mdi:github" className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
