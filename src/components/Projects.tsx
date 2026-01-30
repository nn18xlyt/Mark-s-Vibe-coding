import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { BackgroundGradient } from './ui/background-gradient'

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 pb-16 md:px-6 lg:px-8 lg:-translate-x-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-fg">项目</h2>
            <p className="mt-2 text-sm text-fg/70">
              <span className="block">4 个作品。</span>
              <span className="block">点开看源码。</span>
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-12 md:grid-flow-dense">
          {projects.map((project, idx) => (
            <BackgroundGradient
              key={project.name}
              containerClassName={`transition duration-200 ease-out will-change-transform hover:-translate-y-0.5 ${
                idx === 0
                  ? 'md:col-span-7'
                  : idx === 1
                    ? 'md:col-span-5 md:translate-y-6'
                    : idx === 2
                      ? 'md:col-span-5 md:-translate-y-2'
                      : 'md:col-span-7 md:translate-y-10'
              }`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-border bg-panel shadow-glow transition duration-200 ease-out hover:border-fg/20"
              >
                <div className="overflow-hidden rounded-t-2xl border-b border-border bg-bg">
                  <img
                    src={project.imageUrl}
                    alt={`${project.name} 项目截图`}
                    loading="lazy"
                    className="h-44 w-full object-cover transition duration-200 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold text-fg">
                      {project.name}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-fg/5 px-2 py-0.5 text-[11px] text-fg/70">
                      看
                      <Icon icon="mdi:open-in-new" className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-fg/70">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-fg/5 px-2.5 py-1 text-[11px] text-fg/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </BackgroundGradient>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
