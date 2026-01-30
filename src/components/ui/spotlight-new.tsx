import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type SpotlightProps = {
  className?: string
  gradientFirst?: string
  gradientSecond?: string
  gradientThird?: string
  translateY?: number
  width?: number
  height?: number
  smallWidth?: number
  duration?: number
  xOffset?: number
}

export const Spotlight = ({
  className,
  gradientFirst =
    'radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(0,211,167,.10) 0, rgba(0,211,167,.03) 55%, rgba(0,211,167,0) 82%)',
  gradientSecond =
    'radial-gradient(50% 50% at 50% 50%, rgba(209,255,47,.07) 0, rgba(209,255,47,.02) 80%, transparent 100%)',
  gradientThird =
    'radial-gradient(50% 50% at 50% 50%, rgba(255,77,46,.06) 0, rgba(255,77,46,.02) 80%, transparent 100%)',
  translateY = -340,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 10,
  xOffset = 120,
}: SpotlightProps = {}) => {
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease }}
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
    >
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0"
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(5%, -50%)',
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(-180%, -70%)',
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0"
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(-5%, -50%)',
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(180%, -70%)',
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  )
}
