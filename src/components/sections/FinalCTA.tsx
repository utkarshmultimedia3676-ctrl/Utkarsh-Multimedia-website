'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="section-lg relative overflow-hidden" aria-labelledby="cta-title">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1558655146-9f40138edf4a?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/95" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-100 mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold-400" aria-hidden="true" />
            <span className="caption text-cream-100">Ready to Start Your Project?</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-display text-cream-50 mb-6 text-balance"
          >
            Let&apos;s Create Something
            <br />
            <span className="gradient-text gradient-text-dark">Remarkable</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lead text-cream-300 max-w-2xl mx-auto mb-10 text-pretty"
          >
            Every great brand starts with a conversation. Tell us about your vision, your challenges, and your goals. We&apos;ll bring the strategy, creativity, and craft to make it real.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto group">
              <Link href="/contact">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/portfolio">
                View Our Work First
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-cream-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="body-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="body-sm">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="body-sm">24hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="body-sm">Confidentiality Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}