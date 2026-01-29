import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 pb-20 md:px-6 lg:px-8 lg:-translate-x-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-fg">
          联系方式
        </h2>
        <p className="mt-2 text-sm text-fg/70">
          <span className="block">想聊就来。</span>
          <span className="block">别发长文。</span>
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-12">
          <a
            href="mailto:1518198775@qq.com"
            className="md:col-span-5 rounded-2xl border border-border bg-panel p-5 shadow-glow transition duration-200 ease-out hover:border-fg/20"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-fg">
              <Icon icon="mdi:email-outline" className="h-4 w-4 text-acid" />
              邮箱
            </div>
            <div className="mt-2 text-sm text-fg/70">1518198775@qq.com</div>
            <div className="mt-2 text-xs text-fg/55">发一句重点。</div>
          </a>

          <a
            href="https://github.com/nn18xlyt"
            target="_blank"
            rel="noreferrer"
            className="md:col-span-7 rounded-2xl border border-border bg-panel p-5 shadow-glow transition duration-200 ease-out hover:border-fg/20"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-fg">
              <Icon icon="mdi:github" className="h-4 w-4 text-moss" />
              GitHub
            </div>
            <div className="mt-2 text-sm text-fg/70">github.com/nn18xlyt</div>
            <div className="mt-2 text-xs text-fg/55">代码都在这。</div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="md:col-span-6 md:col-start-4 rounded-2xl border border-border bg-panel p-5 shadow-glow transition duration-200 ease-out hover:border-fg/20"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-fg">
              <Icon icon="mdi:account-circle-outline" className="h-4 w-4 text-ember" />
              社交
            </div>
            <div className="mt-2 text-sm text-fg/70">LinkedIn</div>
            <div className="mt-2 text-xs text-fg/55">慢慢补。</div>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
