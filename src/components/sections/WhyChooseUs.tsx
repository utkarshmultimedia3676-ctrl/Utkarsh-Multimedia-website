'use client'

import { motion } from 'framer-motion'
import { Award, Gem, Eye, Layers, Settings, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { whyChooseUs } from '@/data/site'
import { cn } from '@/lib/utils'

const icons = {
  award: Award,
  gem: Gem,
  eye: Eye,
  layers: Layers,
  settings: Settings,
  clock: Clock,
}

export function WhyChooseUs() {
  return (
    <section className="section bg-cream-50 dark:bg-charcoal-900" aria-labelledby="why-choose-title">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header max-w-3xl mx-auto mb-16">
          <span className="section-tag">Why Apex Creative</span>
          <h2 id="why-choose-title" className="section-title">
            Six Reasons Brands
            <br />
            <span className="gradient-text gradient-text-dark">Trust Us</span>
          </h2>
          <p className="section-description">
            We don't just deliver projects—we build partnerships. Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid-features">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] || Award

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <Card variant="hover" padding="lg" className="h-full text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 mb-6 group-hover:bg-brand-500 group-hover:text-cream-50 transition-all duration-400">
                    <Icon className="w-8 h-8 text-brand-600 dark:text-brand-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-5 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="body text-charcoal-600 dark:text-cream-400">
                    {item.description}
                  </p>
                </Card>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}