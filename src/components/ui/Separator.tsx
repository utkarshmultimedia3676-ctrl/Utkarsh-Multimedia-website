'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'gradient' | 'gradient-left'
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', variant = 'default', ...props }, ref) => {
    const baseClasses = 'shrink-0 bg-charcoal-200 dark:bg-charcoal-800'

    const variantClasses = {
      default: '',
      gradient: 'bg-gradient-to-r from-transparent via-brand-500 to-transparent',
      'gradient-left': 'bg-gradient-to-r from-brand-500 to-transparent',
    }

    const orientationClasses = {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], orientationClasses[orientation], className)}
        role="separator"
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'