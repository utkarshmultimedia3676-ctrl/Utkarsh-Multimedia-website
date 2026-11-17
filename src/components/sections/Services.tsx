'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, PenTool, Box, Printer, Sparkles, Megaphone, FileText, BookOpen, Gift } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

const serviceIcons = {
  'pen-tool': PenTool,
  'box': Box,
  'printer': Printer,
  'sparkles': Sparkles,
  'megaphone': Megaphone,
  'file-text': FileText,
  'book-open': BookOpen,
  'gift': Gift,
}

export function Services() {
  return (
    <section className="section bg-cream-50 dark:bg-charcoal-900" aria-labelledby="services-title">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header mb-16">
          <span className="section-tag">Our Expertise</span>
          <h2 id="services-title" className="section-title">
            Services That
            <br />
            <span className="gradient-text gradient-text-dark">Elevate Brands</span>
          </h2>
          <p className="section-description">
            Eight specialized capabilities, one integrated partner. From strategy to shelf—we handle every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-services">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || PenTool

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <Card variant="interactive" padding="none" className="h-full group">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" aria-hidden="true" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <Badge variant="soft" className="capitalize">{service.category}</Badge>
                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <ArrowRight className="w-5 h-5 text-cream-100" aria-hidden="true" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                        </div>
                        <h3 className="heading-5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="body text-charcoal-600 dark:text-cream-400 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Key Features Preview */}
                      <ul className="space-y-2 pt-2 border-t border-charcoal-200 dark:border-charcoal-800">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-body-sm text-charcoal-600 dark:text-cream-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="flex items-center gap-2 text-body-sm text-brand-600 dark:text-brand-400 font-medium">
                            +{service.features.length - 3} more capabilities
                          </li>
                        )}
                      </ul>

                      {/* CTA */}
                      <div className="pt-2 flex items-center justify-between">
                        <span className="link link-underline text-body-sm">
                          {service.ctaText}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-cream-50 transition-all">
                          <ArrowRight className="w-4 h-4 text-brand-600 dark:text-brand-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.article>
            )
          })}
        </div>

        {/* View All Services */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}