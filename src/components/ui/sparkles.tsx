import { useEffect, useId, useMemo, useState, type ComponentProps } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'

type ParticlesOptions = NonNullable<ComponentProps<typeof Particles>['options']>

type ParticlesProps = {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    particleSize,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props

  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const controls = useAnimation()

  const particlesLoaded = async (container?: Container) => {
    if (!container) return

    controls.start({
      opacity: 1,
      transition: {
        duration: 1,
      },
    })
  }

  const generatedId = useId()

  const resolvedMinSize = particleSize ?? minSize ?? 1
  const resolvedMaxSize = particleSize ?? maxSize ?? 2.6

  const options = useMemo<ParticlesOptions>(
    () =>
      ({
        background: {
          color: {
            value: background || 'transparent',
          },
        },
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        fpsLimit: 90,
        interactivity: {
          events: {
            resize: {
              enable: true,
            },
          },
        },
        particles: {
          color: {
            value: particleColor || '#f7f2e8',
          },
          move: {
            enable: true,
            direction: 'none',
            outModes: {
              default: 'out',
            },
            random: true,
            speed: {
              min: 0.1,
              max: 0.8,
            },
          },
          number: {
            density: {
              enable: true,
              width: 420,
              height: 420,
            },
            value: particleDensity || 80,
          },
          opacity: {
            value: {
              min: 0.06,
              max: 0.9,
            },
            animation: {
              enable: true,
              speed: speed || 2.8,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {
              min: resolvedMinSize,
              max: resolvedMaxSize,
            },
          },
        },
        detectRetina: true,
      }),
    [
      background,
      particleColor,
      particleDensity,
      resolvedMaxSize,
      resolvedMinSize,
      speed,
    ],
  )

  return (
    <motion.div animate={controls} className={cn('opacity-0', className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn('h-full w-full')}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </motion.div>
  )
}
