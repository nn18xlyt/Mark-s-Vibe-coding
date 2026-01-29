export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-6">
        <div>© {new Date().getFullYear()} </div>
        <div className="flex gap-4">
          <a
            href="#home"
            className="transition hover:text-white"
          >
            回到顶部
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
