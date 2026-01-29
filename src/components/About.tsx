import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          关于我
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
          这里放你的详细介绍：你擅长的方向、你喜欢解决的问题、以及你想在作品中传达的风格。
          保持简洁，突出你最核心的优势。
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-panel p-5 shadow-glow">
          <div className="text-sm font-semibold text-white">技能列表</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-white/85"
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
