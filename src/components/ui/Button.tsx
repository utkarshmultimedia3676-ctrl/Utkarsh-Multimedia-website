'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

    const variantClasses = {
      primary: 'bg-brand-600 text-cream-50 hover:bg-brand-700 active:bg-brand-800 focus-visible:ring-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600 dark:active:bg-brand-700 shadow-soft hover:shadow-medium',
      secondary: 'bg-transparent border-2 border-charcoal-300 dark:border-charcoal-600 text-charcoal-900 dark:text-cream-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 active:bg-charcoal-200 dark:active:bg-charcoal-700 focus-visible:ring-charcoal-400',
      accent: 'bg-gold-500 text-charcoal-950 hover:bg-gold-600 active:bg-gold-700 focus-visible:ring-gold-400 shadow-soft hover:shadow-glow',
      ghost: 'bg-transparent text-charcoal-700 dark:text-cream-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 active:bg-charcoal-200 dark:active:bg-charcoal-700 focus-visible:ring-charcoal-400',
      outline: 'bg-transparent border-2 border-brand-500 text-brand-600 dark:text-brand-400 hover:bg-brand-500 hover:text-cream-50 dark:hover:bg-brand-500 dark:hover:text-charcoal-950 active:bg-brand-600 focus-visible:ring-brand-400',
    }

    const sizeClasses = {
      sm: 'px-4 py-2 text-caption',
      md: 'px-6 py-3.5 text-body-sm',
      lg: 'px-8 py-4 text-body-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'