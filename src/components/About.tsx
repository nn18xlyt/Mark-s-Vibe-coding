import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:-translate-x-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-fg">
          关于我
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg/70 md:text-base">
          <span className="block">我不爱空话。</span>
          <span className="block">我爱交付。</span>
          <span className="block">能跑就先发。</span>
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-panel p-5 shadow-glow">
          <div className="text-sm font-semibold text-fg">我常用这些</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-fg/5 px-3 py-1 text-xs text-fg/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
