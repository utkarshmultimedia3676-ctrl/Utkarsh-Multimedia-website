'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'soft' | 'brand' | 'gold'
  size?: 'sm' | 'md' | 'lg'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors duration-200'

    const variantClasses = {
      default: 'bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-100',
      outline: 'bg-transparent border-2 border-charcoal-300 dark:border-charcoal-600 text-charcoal-700 dark:text-cream-300',
      soft: 'bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300',
      brand: 'bg-brand-600 text-cream-50',
      gold: 'bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300',
    }

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-caption',
      md: 'px-3 py-1 text-body-sm',
      lg: 'px-4 py-1.5 text-body',
    }

    return (
      <span
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'