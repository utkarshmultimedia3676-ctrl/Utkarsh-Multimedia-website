'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, CheckCircle, Printer, ShieldCheck, Truck } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import { processSteps } from '@/data/site'
import { cn } from '@/lib/utils'

const icons = {
  target: Target,
  lightbulb: Lightbulb,
  'check-circle': CheckCircle,
  printer: Printer,
  'shield-check': ShieldCheck,
  truck: Truck,
}

export function Process() {
  return (
    <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="process-title">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header max-w-3xl mx-auto mb-16">
          <span className="section-tag">Our Process</span>
          <h2 id="process-title" className="section-title">
            From Brief to
            <br />
            <span className="gradient-text gradient-text-dark">Delivery</span>
          </h2>
          <p className="section-description">
            A proven six-step methodology that ensures every project meets the highest standards of creativity, quality, and reliability.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid-process relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-px h-[calc(100%-2.5rem)] bg-gradient-to-b from-brand-500/30 via-brand-500 to-brand-500/30" aria-hidden="true" />

          {processSteps.map((step, index) => {
            const Icon = icons[step.icon as keyof typeof icons] || Target
            const isEven = index % 2 === 1

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
                className={cn('relative', 'lg:pl-8 lg:pr-8')}
              >
                {/* Step Number */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 lg:left-auto lg:translate-x-0 lg:top-0 lg:-translate-y-1/2 z-10">
                  <div className="w-20 h-20 rounded-2xl bg-brand-600 text-cream-50 flex items-center justify-center font-display font-bold text-2xl shadow-soft">
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <Card variant="hover" padding="lg" className="h-full lg:mt-14">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-100 dark:bg-brand-900/30 mb-5">
                    <Icon className="w-7 h-7 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-5 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="body text-charcoal-600 dark:text-cream-400">
                    {step.description}
                  </p>
                </Card>
              </motion.article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="body-lg text-charcoal-600 dark:text-cream-400 mb-6 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how our process can work for you.
          </p>
          <a href="/contact" className="link link-underline font-medium text-body-lg inline-flex items-center gap-2">
            Start a Conversation
            <span className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}