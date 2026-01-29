import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          联系方式
        </h2>
        <p className="mt-2 text-sm text-white/70">
          保证所有链接可点击，你可以把下面的占位信息替换成自己的。
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <a
            href="mailto:1518198775@qq.com"
            className="rounded-2xl border border-border bg-panel p-5 shadow-glow transition hover:border-white/20"
          >
            <div className="text-sm font-semibold text-white">邮箱</div>
            <div className="mt-2 text-sm text-white/70">1518198775@qq.com</div>
          </a>

          <a
            href="https://github.com/nn18xlyt"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-border bg-panel p-5 shadow-glow transition hover:border-white/20"
          >
            <div className="text-sm font-semibold text-white">GitHub</div>
            <div className="mt-2 text-sm text-white/70">github.com/nn18xlyt</div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-border bg-panel p-5 shadow-glow transition hover:border-white/20"
          >
            <div className="text-sm font-semibold text-white">社交媒体</div>
            <div className="mt-2 text-sm text-white/70">LinkedIn / X / B站 ...</div>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
