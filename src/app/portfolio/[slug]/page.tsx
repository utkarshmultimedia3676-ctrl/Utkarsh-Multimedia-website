'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Star, Tag, Calendar, Building2, Share2, Download, ExternalLink, Quote } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Separator } from '@/components/ui/Separator'
import { portfolioProjects, getProjectBySlug, getRelatedProjects } from '@/data/portfolio'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

interface PortfolioPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = getProjectBySlug(resolvedParams.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  }
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }))
}

export default function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const project = getProjectBySlug((await params).slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project.slug, project.category, 3)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)

  return (
    <>
      {/* Hero Gallery */}
      <section className="relative min-h-[70vh] overflow-hidden pt-16" aria-labelledby="project-title">
        <div className="relative h-full min-h-[70vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1} of ${project.images.length}`}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" aria-hidden="true" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-cream-50 hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-cream-50 hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10" role="tablist" aria-label="Image navigation">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  role="tab"
                  aria-selected={index === currentImageIndex}
                  aria-label={`View image ${index + 1}`}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                    index === currentImageIndex
                      ? 'bg-cream-50 w-10'
                      : 'bg-white/30 hover:bg-white/50'
                  )}
                />
              ))}
            </div>
          )}

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
            <div className="container-custom">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="soft" className="capitalize">{project.category}</Badge>
                  {project.featured && <Badge variant="gold">Featured</Badge>}
                  <Badge variant="outline" size="sm">{project.year}</Badge>
                </div>
                <motion.h1
                  id="project-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="heading-display text-cream-50 mb-4 text-balance"
                >
                  {project.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-6 text-cream-400"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                    <span className="body-sm">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5" aria-hidden="true" />
                    <span className="body-sm">{project.industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    <span className="body-sm">{project.year}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="details-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 id="details-title" className="heading-2 mb-6">Project Overview</h2>
                <div className="prose prose-charcoal max-w-none">
                  <p className="lead text-charcoal-700 dark:text-cream-300 mb-6">{project.description}</p>
                </div>
              </motion.div>

              <Separator />

              {/* Challenge & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <Card variant="default" padding="lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                    </div>
                    <h3 className="heading-5">The Challenge</h3>
                  </div>
                  <p className="body text-charcoal-600 dark:text-cream-400">{project.challenge}</p>
                </Card>

                <Card variant="default" padding="lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center">
                      <Star className="w-5 h-5 text-gold-600 dark:text-gold-400" aria-hidden="true" />
                    </div>
                    <h3 className="heading-5">Our Solution</h3>
                  </div>
                  <p className="body text-charcoal-600 dark:text-cream-400">{project.solution}</p>
                </Card>
              </motion.div>

              <Separator />

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="heading-2 mb-6">Measurable Results</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <Card key={result} variant="hover" padding="md" className="group">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-cream-50 transition-all">
                          <Star className="w-4 h-4 text-brand-600 dark:text-brand-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                        </div>
                        <p className="body text-charcoal-700 dark:text-cream-300">{result}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <Separator />

              {/* Services Used */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="heading-2 mb-6">Services Delivered</h2>
                <div className="flex flex-wrap gap-3">
                  {project.services.map((service) => (
                    <Badge key={service} variant="outline">{service}</Badge>
                  ))}
                </div>
              </motion.div>

              <Separator />

              {/* Gallery */}
              {project.images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="heading-2 mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Gallery image ${index + 2}`}
                          fill
                          className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" aria-hidden="true">
                          <span className="body-sm text-cream-400">View detail</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Meta */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="default" padding="lg" className="sticky top-24">
                  <h3 className="heading-5 mb-6">Project Details</h3>
                  <dl className="space-y-5">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                        <Tag className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="caption text-charcoal-500 dark:text-cream-500">Category</dt>
                        <dd className="body font-medium text-charcoal-900 dark:text-cream-100 capitalize">{project.category}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="caption text-charcoal-500 dark:text-cream-500">Client</dt>
                        <dd className="body font-medium text-charcoal-900 dark:text-cream-100">{project.client}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="caption text-charcoal-500 dark:text-cream-500">Year</dt>
                        <dd className="body font-medium text-charcoal-900 dark:text-cream-100">{project.year}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                        <Tag className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="caption text-charcoal-500 dark:text-cream-500">Industry</dt>
                        <dd className="body font-medium text-charcoal-900 dark:text-cream-100">{project.industry}</dd>
                      </div>
                    </div>
                  </dl>

                  <Separator className="my-6" />

                  {/* Tags */}
                  <div>
                    <h4 className="heading-6 mb-4">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="soft">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Share Actions */}
                  <div>
                    <h4 className="heading-6 mb-4">Share This Project</h4>
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-charcoal-300 dark:border-charcoal-700 text-body-sm font-medium text-charcoal-700 dark:text-cream-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors">
                        <Share2 className="w-4 h-4" aria-hidden="true" />
                        Share
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-charcoal-300 dark:border-charcoal-700 text-body-sm font-medium text-charcoal-700 dark:text-cream-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors">
                        <Download className="w-4 h-4" aria-hidden="true" />
                        Download
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card variant="default" padding="lg" className="sticky top-24">
                  <h3 className="heading-5 mb-4 text-center">Like What You See?</h3>
                  <p className="body text-charcoal-600 dark:text-cream-400 text-center mb-6">
                    Let's discuss how we can bring the same level of strategy and craft to your next project.
                  </p>
                  <Button size="lg" className="w-full mb-3" asChild>
                    <Link href="/contact">
                      Start a Project
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link href="/portfolio">
                      View More Work
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-cream-50 dark:bg-charcoal-900" aria-labelledby="related-title">
          <div className="container-custom">
            <div className="section-header max-w-3xl mx-auto mb-12">
              <span className="section-tag">Explore More</span>
              <h2 id="related-title" className="section-title">
                Related
                <br />
                <span className="gradient-text gradient-text-dark">Projects</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <motion.article
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/portfolio/${relatedProject.slug}`} className="block h-full group">
                    <Card variant="interactive" padding="none" className="h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={relatedProject.thumbnail}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6" aria-hidden="true">
                          <div className="w-full">
                            <Badge variant="soft" className="capitalize mb-2">{relatedProject.category}</Badge>
                            <h3 className="heading-5 text-cream-50 mb-1 group-hover:text-gold-400 transition-colors">{relatedProject.title}</h3>
                            <p className="body-sm text-cream-400">{relatedProject.client}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="body-sm text-charcoal-600 dark:text-cream-400 mb-3 line-clamp-2">{relatedProject.description}</p>
                        <span className="link link-underline text-body-sm inline-flex items-center gap-1.5">
                          View Project
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View All Projects
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="section bg-white dark:bg-charcoal-950 border-t border-charcoal-200 dark:border-charcoal-800">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link
              href="/portfolio"
              className="link link-underline inline-flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}