import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-fg/60 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8 lg:-translate-x-6">
        <div>© {new Date().getFullYear()} Mark</div>
        <div className="flex gap-4">
          <a
            href="#home"
            className="transition duration-200 ease-out hover:text-fg"
          >
            回到顶部
          </a>
          <a
            href="https://github.com/nn18xlyt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition duration-200 ease-out hover:text-fg"
          >
            <Icon icon="mdi:github" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
