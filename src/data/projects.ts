export type Project = {
  name: string
  description: string
  techStack: string[]
  imageUrl: string
  link: string
}

// 项目数据：用数组管理，便于后续增删改
export const projects: Project[] = [
  {
    name: '项目 A：个人作品集',
    description: '一个简洁现代的作品集站点，包含简介、技能、项目卡片与联系方式。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/project-placeholder.svg',
    link: 'https://github.com/',
  },
  {
    name: '项目 B：后台管理面板',
    description: '支持响应式布局与常见数据表格交互的管理后台示例。',
    techStack: ['React', 'Vite', 'Framer Motion'],
    imageUrl: '/project-placeholder.svg',
    link: 'https://github.com/',
  },
  {
    name: '项目 C：API 服务与工具',
    description: '封装常用接口调用与错误处理策略的前端工具集合。',
    techStack: ['TypeScript', 'REST API'],
    imageUrl: '/project-placeholder.svg',
    link: 'https://github.com/',
  },
]
