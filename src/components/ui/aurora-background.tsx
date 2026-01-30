import { cn } from '@/lib/utils'
import React, { type ReactNode } from 'react'

type AuroraBackgroundProps = React.HTMLProps<HTMLDivElement> & {
  children: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn('relative w-full overflow-hidden bg-bg text-fg', className)}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            '--aurora':
              'repeating-linear-gradient(100deg,#00d3a7_10%,#d1ff2f_15%,#ff4d2e_20%,#00d3a7_25%,#d1ff2f_30%)',
            '--dark-gradient':
              'repeating-linear-gradient(100deg,#0b0a08_0%,#0b0a08_7%,transparent_10%,transparent_12%,#0b0a08_16%)',
            '--transparent': 'transparent',
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-[12px] opacity-55 blur-[14px] saturate-150 will-change-transform
            [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]
            after:absolute after:inset-0 after:animate-aurora after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%]
            after:[background-attachment:fixed] after:mix-blend-soft-light after:content-[""]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_90%_0%,black_12%,var(--transparent)_70%)]`,
          )}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
