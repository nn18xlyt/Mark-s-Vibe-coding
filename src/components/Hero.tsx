import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { AuroraBackground } from './ui/aurora-background'
import { Spotlight } from './ui/spotlight-new'

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-4 pt-14 md:px-6 md:pt-20 lg:px-8 lg:-translate-x-6"
    >
      <AuroraBackground className="rounded-3xl border border-border bg-panel/40 shadow-glow">
        <Spotlight
          className="z-0 opacity-55"
          translateY={-320}
          height={1220}
          width={520}
          smallWidth={220}
          duration={14}
          xOffset={90}
        />
        <div className="relative z-10 px-5 py-10 md:px-7 md:py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-fg md:text-5xl">
                你好，我是{' '}
                <span className="bg-gradient-to-r from-moss via-acid to-ember bg-clip-text text-transparent">
                  Mark
                </span>
                ，
                <br className="hidden md:block" />
                一个热爱AI的开发者
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg/70 md:text-base">
                <span className="block">我爱把AI变产品。</span>
                <span className="block">一周做1个Demo。</span>
                <span className="block">不好看就重来。</span>
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-acid via-ember to-moss px-4 py-2 text-sm font-medium text-bg shadow-glow transition duration-200 ease-out hover:opacity-95"
                >
                  看作品
                  <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-fg/5 px-4 py-2 text-sm font-medium text-fg/85 transition duration-200 ease-out hover:bg-fg/10"
                >
                  聊两句
                  <Icon icon="mdi:chat-outline" className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Vibe Coding', 'React', 'TS', 'Vite'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-fg/5 px-3 py-1 text-xs text-fg/75"
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
                    className="h-16 w-16 rounded-2xl border border-border bg-fg/5"
                  />
                  <div>
                    <div className="text-sm font-semibold text-fg">Mark</div>
                    <div className="text-xs text-fg/70">写AI，也写产品</div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    { k: '现在', v: '在练Vibe' },
                    { k: '爱好', v: '把坑写成文' },
                    { k: '目标', v: '做出10个应用' },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="flex items-start justify-between gap-4 rounded-xl border border-border bg-fg/5 px-4 py-3"
                    >
                      <div className="text-xs text-fg/60">{item.k}</div>
                      <div className="text-xs text-fg/85">{item.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}
