import { Metadata } from 'next'
import { services, serviceCategories } from '@/data/services'
import { ServiceCard } from '@/components/services/ServiceCard'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our full range of design, packaging, printing, and branding services. From strategy to shelf—we handle every detail.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16" aria-labelledby="services-hero-title">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950/90" />
        <div className="container-custom relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-100 mb-6"
          >
            <span className="caption text-cream-100">8 Specialized Capabilities</span>
          </motion.div>
          <motion.h1
            id="services-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-cream-50 mb-6 text-balance"
          >
            Services That
            <br />
            <span className="gradient-text gradient-text-dark">Elevate Brands</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead text-cream-300 max-w-2xl mx-auto text-pretty"
          >
            Eight specialized capabilities, one integrated partner. From strategy to shelf—we handle every detail with precision and craft.
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-sm bg-cream-50 dark:bg-charcoal-900 border-y border-charcoal-200 dark:border-charcoal-800" aria-label="Service categories">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label="Service categories">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={false}
                className="px-5 py-2.5 rounded-xl font-medium text-body-sm bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-cream-300 hover:bg-brand-100 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300"
              >
                {category.label} <span className="ml-2 text-brand-500">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="services-list-title">
        <div className="container-custom">
          <div className="section-header max-w-3xl mx-auto mb-16">
            <h2 id="services-list-title" className="section-title">All Services</h2>
            <p className="section-description">Each service is backed by dedicated specialists, proven processes, and a commitment to exceptional quality.</p>
          </div>

          <div className="grid-services">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg relative overflow-hidden" aria-labelledby="services-cta-title">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1558655146-9f40138edf4a?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/95" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="services-cta-title" className="heading-display text-cream-50 mb-6 text-balance">
              Need Something
              <br />
              <span className="gradient-text gradient-text-dark">Custom?</span>
            </h2>
            <p className="lead text-cream-300 mb-10 text-pretty">
              Every project is unique. If you don't see exactly what you need, let's talk. We love solving new challenges.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg inline-flex items-center gap-2">
              Discuss Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// Add motion import
import { motion } from 'framer-motion'