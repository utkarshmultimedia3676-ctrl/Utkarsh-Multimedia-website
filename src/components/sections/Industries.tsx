'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Package, ShoppingBag, GraduationCap, Coffee, Home, Factory, HeartPulse, Briefcase, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { industries } from '@/data/site'
import { cn } from '@/lib/utils'

const icons = {
  package: Package,
  'shopping-bag': ShoppingBag,
  'graduation-cap': GraduationCap,
  coffee: Coffee,
  home: Home,
  factory: Factory,
  'heart-pulse': HeartPulse,
  briefcase: Briefcase,
}

export function Industries() {
  return (
    <section className="section bg-cream-50 dark:bg-charcoal-900" aria-labelledby="industries-title">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header max-w-3xl mx-auto mb-16">
          <span className="section-tag">Industries We Serve</span>
          <h2 id="industries-title" className="section-title">
            Deep Expertise Across
            <br />
            <span className="gradient-text gradient-text-dark">Key Sectors</span>
          </h2>
          <p className="section-description">
            Industry-specific knowledge means we understand your challenges, regulations, and opportunities from day one.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid-industries">
          {industries.map((industry, index) => {
            const Icon = icons[industry.icon as keyof typeof icons] || Package

            return (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              >
                <Link
                  href={`/industries/${industry.id}`}
                  className="block h-full group"
                >
                  <Card variant="interactive" padding="none" className="h-full overflow-hidden">
                    {/* Background Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={industry.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                      <div className="w-full">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-colors">
                          <Icon className="w-6 h-6 text-cream-100" aria-hidden="true" />
                        </div>
                        <h3 className="heading-5 text-cream-50 mb-2 group-hover:text-gold-400 transition-colors">
                          {industry.label}
                        </h3>
                        <p className="body-sm text-cream-400 mb-4 line-clamp-2">
                          {industry.description}
                        </p>
                        <span className="link link-underline text-cream-300 hover:text-gold-400 inline-flex items-center gap-1.5 font-medium text-body-sm">
                          View Projects
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.article>
            )
          })}
        </div>

        {/* View All Industries */}
        <div className="text-center mt-12">
          <a href="/industries" className="link link-underline font-medium text-body-lg inline-flex items-center gap-2">
            Explore All Industries
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}