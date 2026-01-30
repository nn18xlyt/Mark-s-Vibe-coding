export type Project = {
  name: string
  description: string
  techStack: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

// 项目数据：用数组管理，便于后续增删改
export const projects: Project[] = [
  {
    name: '项目 A：个人作品集',
    description: '自己写的站。能用就行。',
    techStack: ['React', 'TS', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/mark-portfolio/1200/720',
    githubUrl: 'https://github.com/nn18xlyt/Mark-s-Vibe-coding',
    liveUrl: '/',
  },
  {
    name: '项目 B：Markdown 笔记',
    description: '写 Markdown。支持 GFM。代码会亮。',
    techStack: [
      'React',
      'TS',
      'Vite',
      'react-markdown',
      'remark-gfm',
      'syntax-highlighter',
    ],
    imageUrl: '/project-bibliophile.svg',
    githubUrl: 'https://github.com/nn18xlyt/markdown-notes',
    liveUrl: 'https://markdown-notes-three.vercel.app/',
  },
  {
    name: '项目 C：Todo 待办（离线）',
    description: '离线能用。分类筛选。还能看统计。',
    techStack: ['React 19', 'TS', 'Vite', 'Zustand', 'Tailwind', 'date-fns'],
    imageUrl:
      'https://images.pexels.com/photos/3826692/pexels-photo-3826692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com/nn18xlyt/Todo',
    liveUrl: 'https://todo-sigma-drab-70.vercel.app/',
  },
  {
    name: '项目 D：番茄钟 · 专注一会儿',
    description: '专注+休息三档。通知+提示音。带今日统计。',
    techStack: ['React 18', 'TS', 'Vite', 'Tailwind', 'Vitest'],
    imageUrl:
      'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com/nn18xlyt/Time',
    liveUrl: 'https://time-beta-blue.vercel.app/',
  },
]
