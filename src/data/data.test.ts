import { describe, expect, it } from 'vitest'
import { projects } from './projects'
import { skills } from './skills'

describe('data', () => {
  it('skills has common items', () => {
    expect(skills.length).toBeGreaterThan(0)
    expect(skills).toContain('React')
  })

  it('projects are well formed', () => {
    expect(projects.length).toBeGreaterThan(0)

    for (const project of projects) {
      expect(project.name).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(Array.isArray(project.techStack)).toBe(true)
      expect(project.techStack.length).toBeGreaterThan(0)
      if (project.imageUrl.startsWith('/')) {
        expect(project.imageUrl).toMatch(/^\//)
      } else {
        expect(project.imageUrl).toMatch(/^https?:\/\//)
      }
      expect(project.githubUrl).toMatch(/^https?:\/\//)
      if (project.liveUrl.startsWith('/')) {
        expect(project.liveUrl).toMatch(/^\//)
      } else {
        expect(project.liveUrl).toMatch(/^https?:\/\//)
      }
    }
  })
})
