'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search, Tag, Image as ImageIcon, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { portfolioProjects, portfolioCategories, getFeaturedProjects } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const featuredProjects = getFeaturedProjects()

  const filteredProjects = activeCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeCategory)

  return (
    <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="portfolio-title">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header mb-12">
          <span className="section-tag">Selected Work</span>
          <h2 id="portfolio-title" className="section-title">
            Portfolio
            <br />
            <span className="gradient-text gradient-text-dark">That Performs</span>
          </h2>
          <p className="section-description">
            A curated selection of projects where strategy meets craft. Each piece solved a real business challenge.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" role="tablist" aria-label="Project categories">
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

        {/* Projects Grid */}
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
            <div className="grid-portfolio">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
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

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}