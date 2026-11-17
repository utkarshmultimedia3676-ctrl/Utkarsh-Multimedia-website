'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { testimonials } from '@/data/site'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const next = useCallback(() => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goTo = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="testimonials-title">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header max-w-3xl mx-auto mb-16">
          <span className="section-tag">Client Voices</span>
          <h2 id="testimonials-title" className="section-title">
            Trusted by
            <br />
            <span className="gradient-text gradient-text-dark">Industry Leaders</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it. Hear from the brands we've helped transform.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction === 'right' ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -50 : 50 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <Card variant="default" padding="xl" className="text-center">
                  {/* Quote Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 mb-6">
                    <Quote className="w-8 h-8 text-brand-500" aria-hidden="true" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="mb-8">
                    <p className="font-display text-heading-lg md:text-heading-xl font-normal text-charcoal-900 dark:text-cream-100 leading-relaxed text-pretty">
                      "{currentTestimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-6" aria-label={`${currentTestimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-5 h-5',
                          i < currentTestimonial.rating
                            ? 'fill-gold-400 text-gold-400'
                            : 'text-charcoal-300 dark:text-charcoal-700'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-charcoal-200 dark:bg-charcoal-800 flex-shrink-0">
                      <Image
                        src={currentTestimonial.avatar}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-charcoal-900 dark:text-cream-100">
                        {currentTestimonial.author}
                      </div>
                      <div className="text-body-sm text-charcoal-500 dark:text-cream-500">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                      <div className="text-caption text-brand-600 dark:text-brand-400 mt-1">
                        Project: {currentTestimonial.project}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-charcoal-100 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-700 dark:text-cream-300 hover:bg-brand-500 hover:text-cream-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                    index === currentIndex
                      ? 'bg-brand-600 w-8'
                      : 'bg-charcoal-300 dark:bg-charcoal-700 hover:bg-brand-400'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-charcoal-100 dark:bg-charcoal-800 flex items-center justify-center text-charcoal-700 dark:text-cream-300 hover:bg-brand-500 hover:text-cream-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="mt-8 text-center">
          <p className="caption text-charcoal-500 dark:text-cream-500">
            Auto-advancing every 6s • Drag or use arrows to navigate
          </p>
        </div>
      </div>
    </section>
  )
}