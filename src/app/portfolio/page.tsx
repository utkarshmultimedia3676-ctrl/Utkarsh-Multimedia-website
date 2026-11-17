'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search, Tag, Filter, X } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { portfolioProjects, portfolioCategories } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16" aria-labelledby="portfolio-hero-title">
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
            <span className="caption text-cream-100">{portfolioProjects.length} Projects & Counting</span>
          </motion.div>
          <motion.h1
            id="portfolio-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-cream-50 mb-6 text-balance"
          >
            Selected Work
            <br />
            <span className="gradient-text gradient-text-dark">That Performs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead text-cream-300 max-w-2xl mx-auto text-pretty"
          >
            A curated collection of projects where strategy meets craft. Each piece solved a real business challenge and delivered measurable results.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-sm bg-cream-50 dark:bg-charcoal-900 border-y border-charcoal-200 dark:border-charcoal-800" aria-label="Project filters">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label="Project categories">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-5 py-2.5 rounded-xl font-medium text-body-sm transition-all duration-300 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                  activeCategory === category.id
                    ? 'bg-brand-600 text-cream-50 shadow-soft'
                    : 'bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-cream-300 hover:bg-brand-100 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="portfolio-grid-title">
        <div className="container-custom">
          <div className="section-header max-w-3xl mx-auto mb-12">
            <h2 id="portfolio-grid-title" className="section-title sr-only">Project Gallery</h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              id={`panel-${activeCategory}`}
              role="tabpanel"
              aria-label={`${activeCategory === 'all' ? 'All' : portfolioCategories.find(c => c.id === activeCategory)?.label} projects`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="block h-full group"
                    >
                      <Card variant="interactive" padding="none" className="h-full">
                        {/* Thumbnail */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.thumbnail}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-spring flex items-end p-6" aria-hidden="true">
                            <div className="w-full">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="soft" className="capitalize">{project.category}</Badge>
                                {project.featured && (
                                  <Badge variant="gold" size="sm">Featured</Badge>
                                )}
                              </div>
                              <h3 className="heading-4 text-cream-50 mb-2 group-hover:text-gold-400 transition-colors">
                                {project.title}
                              </h3>
                              <p className="body-sm text-cream-400 mb-4 line-clamp-1">
                                {project.client} • {project.industry} • {project.year}
                              </p>
                              <div className="flex items-center gap-3 text-cream-400">
                                <span className="flex items-center gap-1.5 font-medium">
                                  View Project
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" size="sm">{project.subcategory}</Badge>
                            <div className="flex items-center gap-1 text-body-sm text-charcoal-500 dark:text-cream-500">
                              <Tag className="w-3.5 h-3.5" aria-hidden="true" />
                              {project.year}
                            </div>
                          </div>
                          <h3 className="heading-5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                          <p className="body-sm text-charcoal-600 dark:text-cream-400 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                            ))}
                            {project.tags.length > 3 && (
                              <Badge variant="outline" size="sm">+{project.tags.length - 3} more</Badge>
                            )}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Filter className="w-16 h-16 mx-auto text-charcoal-300 dark:text-charcoal-700 mb-4" aria-hidden="true" />
              <h3 className="heading-4 mb-2">No projects found</h3>
              <p className="body text-charcoal-600 dark:text-cream-400 mb-6">
                Try selecting a different category or view all projects.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="btn btn-primary"
              >
                View All Projects
              </button>
            </motion.div>
          )}

          {/* Load More / View All */}
          {filteredProjects.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio?view=all">
                  View All {portfolioProjects.length} Projects
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg relative overflow-hidden" aria-labelledby="portfolio-cta-title">
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
            <h2 id="portfolio-cta-title" className="heading-display text-cream-50 mb-6 text-balance">
              Have a Project
              <br />
              <span className="gradient-text gradient-text-dark">In Mind?</span>
            </h2>
            <p className="lead text-cream-300 mb-10 text-pretty">
              We'd love to hear about it. Whether you're at the idea stage or ready to produce, let's explore what we can create together.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}