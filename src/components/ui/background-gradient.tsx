import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'framer-motion'

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  }

  return (
    <div className={cn('relative p-[3px] group', containerClassName)}>
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-2xl">
        <motion.div
          variants={animate ? variants : undefined}
          initial={animate ? 'initial' : undefined}
          animate={animate ? 'animate' : undefined}
          transition={
            animate
              ? {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: [0.22, 1, 0.36, 1],
                }
              : undefined
          }
          style={{
            backgroundSize: animate ? '400% 400%' : undefined,
          }}
          className={cn(
            'absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-90 blur-xl transition duration-500 will-change-transform',
            'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00d3a7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d1ff2f,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff4d2e,transparent),radial-gradient(circle_farthest-side_at_0_0,#1a140e,#0b0a08)]',
          )}
        />
        <motion.div
          variants={animate ? variants : undefined}
          initial={animate ? 'initial' : undefined}
          animate={animate ? 'animate' : undefined}
          transition={
            animate
              ? {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: [0.22, 1, 0.36, 1],
                }
              : undefined
          }
          style={{
            backgroundSize: animate ? '400% 400%' : undefined,
          }}
          className={cn(
            'absolute inset-0 rounded-2xl will-change-transform',
            'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00d3a7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d1ff2f,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff4d2e,transparent),radial-gradient(circle_farthest-side_at_0_0,#1a140e,#0b0a08)]',
          )}
        />
      </div>

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  )
}
