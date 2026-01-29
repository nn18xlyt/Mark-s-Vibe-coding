import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-14 md:px-6 md:pt-20">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            你好，我是{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Mark
            </span>
            ，
            <br className="hidden md:block" />
            一个热爱AI的开发者
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            我专注于使用 Vibe Coding 构建高质量的 AI 体验，喜欢把复杂问题拆解成清晰、可维护的组件与交互。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-black shadow-glow transition hover:opacity-95"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-border bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              联系我
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
          className="relative"
        >
          <div className="rounded-2xl border border-border bg-panel p-5 shadow-glow">
            <div className="flex items-center gap-4">
              <img
                src="/OIP.webp"
                alt="头像"
                className="h-16 w-16 rounded-2xl border border-border bg-white/5"
              />
              <div>
                <div className="text-sm font-semibold text-white">Mark</div>
                <div className="text-xs text-white/70">AI Engineer · Builder</div>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                { k: '定位', v: 'AI爱好者' },
                { k: '偏好', v: '使用AI工具' },
                { k: '目标', v: '成为AI专家，开发出改变世界的AI应用' },
              ].map((item) => (
                <div
                  key={item.k}
                  className="flex items-start justify-between gap-4 rounded-xl border border-border bg-white/5 px-4 py-3"
                >
                  <div className="text-xs text-white/60">{item.k}</div>
                  <div className="text-xs text-white/85">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
