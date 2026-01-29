import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              项目展示
            </h2>
            <p className="mt-2 text-sm text-white/70">
              每个项目卡片包含名称、截图、描述、技术栈与链接。
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-panel shadow-glow transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="overflow-hidden rounded-t-2xl border-b border-border bg-black">
                <img
                  src={project.imageUrl}
                  alt={`${project.name} 项目截图`}
                  loading="lazy"
                  className="h-44 w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold text-white">
                    {project.name}
                  </div>
                  <span className="rounded-full border border-border bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
                    Link
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
