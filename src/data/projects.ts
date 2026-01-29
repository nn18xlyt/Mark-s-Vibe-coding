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
    description: '自己写的站。能用就行。',
    techStack: ['React', 'TS', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/mark-portfolio/1200/720',
    link: 'https://github.com/nn18xlyt/Mark-s-Vibe-coding',
  },
  {
    name: '项目 B：后台管理面板',
    description: '表格很多。别眨眼。',
    techStack: ['React', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/mark-admin/1200/720',
    link: 'https://github.com/nn18xlyt',
  },
  {
    name: '项目 C：API 服务与工具',
    description: '接口脾气差。我更差。',
    techStack: ['TypeScript', 'API'],
    imageUrl: 'https://picsum.photos/seed/mark-api/1200/720',
    link: 'https://github.com/nn18xlyt',
  },
  {
    name: '项目 D：小玩具合集',
    description: '10 分钟起步。',
    techStack: ['Vite', 'TS'],
    imageUrl: 'https://picsum.photos/seed/mark-toys/1200/720',
    link: 'https://github.com/nn18xlyt',
  },
]
