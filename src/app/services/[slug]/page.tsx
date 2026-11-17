import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronLeft, Sparkles, PenTool, Box, Printer, Megaphone, FileText, BookOpen, Gift } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Separator } from '@/components/ui/Separator'
import { services, getServiceBySlug, Service } from '@/data/services'
import { portfolioProjects, getRelatedProjects } from '@/data/portfolio'
import { siteConfig } from '@/data/site'
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

interface ServicePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || PenTool
  const relatedProjects = getRelatedProjects(service.slug, service.category, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16" aria-labelledby="service-hero-title">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950/90" />
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-100 mb-6"
            >
              <Badge variant="soft" className="capitalize">{service.category}</Badge>
              <Sparkles className="w-4 h-4 text-gold-400" aria-hidden="true" />
            </motion.div>
            <motion.h1
              id="service-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display text-cream-50 mb-6 text-balance"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lead text-cream-300 max-w-2xl text-pretty"
            >
              {service.fullDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="section-sm bg-cream-50 dark:bg-charcoal-900 border-y border-charcoal-200 dark:border-charcoal-800">
        <div className="container-custom">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-charcoal-600 dark:text-cream-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            Back to All Services
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="overview-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What We Offer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 id="overview-title" className="heading-2 mb-6">What We Offer</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={feature} className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50 group hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-cream-50 transition-all">
                        <Check className="w-5 h-5 text-brand-600 dark:text-brand-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="heading-6 mb-1">{feature}</h4>
                        <p className="body-sm text-charcoal-600 dark:text-cream-400">
                          Expertly executed by our specialist team with attention to every detail.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <Separator />

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="heading-2 mb-6">Benefits to Your Business</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-start gap-3 p-4 rounded-xl border border-charcoal-200 dark:border-charcoal-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-gold-600 dark:text-gold-400" aria-hidden="true" />
                      </div>
                      <p className="body text-charcoal-700 dark:text-cream-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <Separator />

              {/* Project Types */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="heading-2 mb-6">Types of Projects We Undertake</h2>
                <div className="space-y-3">
                  {service.projectTypes.map((projectType, index) => (
                    <div
                      key={projectType}
                      className="flex items-center justify-between p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors group"
                    >
                      <span className="body font-medium text-charcoal-900 dark:text-cream-100">{projectType}</span>
                      <span className="caption text-brand-600 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">View examples →</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Icon & Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="default" padding="lg" className="sticky top-24">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-100 dark:bg-brand-900/30 mb-4">
                      <Icon className="w-10 h-10 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                    </div>
                    <h3 className="heading-5">{service.title}</h3>
                    <p className="body text-charcoal-600 dark:text-cream-400 mt-2">{service.shortDescription}</p>
                  </div>

                  <Separator className="my-6" />

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50">
                      <div className="font-display text-2xl font-medium text-brand-600 dark:text-brand-400">15+</div>
                      <div className="caption text-charcoal-500 dark:text-cream-500">Years Experience</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50">
                      <div className="font-display text-2xl font-medium text-brand-600 dark:text-brand-400">200+</div>
                      <div className="caption text-charcoal-500 dark:text-cream-500">Projects/Year</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50">
                      <div className="font-display text-2xl font-medium text-brand-600 dark:text-brand-400">98%</div>
                      <div className="caption text-charcoal-500 dark:text-cream-500">Client Retention</div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* CTA */}
                  <Button size="lg" className="w-full mb-3" asChild>
                    <Link href="/contact">
                      {service.ctaText}
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link href="/portfolio">
                      View Related Work
                    </Link>
                  </Button>

                  <div className="mt-6 pt-6 border-t border-charcoal-200 dark:border-charcoal-800">
                    <h4 className="heading-6 mb-4">Ready to Discuss?</h4>
                    <div className="space-y-3">
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                        className="flex items-center gap-3 text-body-sm text-charcoal-700 dark:text-cream-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                          <svg className="w-4 h-4 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span>Call: {siteConfig.contact.phone}</span>
                      </a>
                      <a
                        href="https://wa.me/15551234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-body-sm text-charcoal-700 dark:text-cream-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.47-.372 10.47 10.47 0 01-1.055-1.262 11.06 11.06 0 01-.49-.615c-.186-.292-.28-.554-.282-.784 0-.244.105-.5.286-.73.177-.22.418-.44.74-.663.335-.228.68-.373 1.035-.486.173-.056.457-.12.72-.213.335-.122.634-.158.937-.145.32.014.62.107.85.357.235.25.394.613.456.895.062.279.042.516-.022.712-.065.198-.198.347-.416.487-.21.134-.46.242-.758.242-.272 0-.544-.056-.786-.172l-.53-.236c-.549-.236-1.005-.783-1.21-1.132-.11-.188-.207-.368-.274-.576a.84.84 0 01-.012-.482c.056-.3.21-.52.497-.696.37-.228.792-.37 1.21-.47.45-.106.93-.107 1.378-.107.55 0 1.006.077 1.358.236.374.17 1.64.648 1.737.69.098.045.175.098.236.15.05.05.11.138.15.222.045.09-.037.21-.14.29-.097.08-.237.12-.508.19-.272.07-.544.14-.793.175a2.26 2.26 0 01-.615-.404 1.94 1.94 0 01-.39-.57c-.16-.28-.25-.59-.25-.91 0-.316.12-.61.35-.872a1.05 1.05 0 01.5-.35c.227-.087.516-.117.774-.117.236 0 .507.04.74.117.243.08.507.22.76.388.37.25.657.587.843.95.19.37.24.76.19 1.135-.05.393-.173.735-.442.98-.37.35-.94.49-1.46.49-.41 0-.82-.07-1.206-.215-.386-.14-.753-.34-1.11-.586-.16-.11-.33-.24-.51-.385" />
                          </svg>
                        </div>
                        <span>WhatsApp Us</span>
                      </a>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-3 text-body-sm text-charcoal-700 dark:text-cream-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                          <svg className="w-4 h-4 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span>Email Us</span>
                      </a>
                    </div>
                  </div>
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
              <span className="section-tag">Related Work</span>
              <h2 id="related-title" className="section-title">
                Projects in
                <br />
                <span className="gradient-text gradient-text-dark">{service.title}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/portfolio/${project.slug}`} className="block h-full group">
                    <Card variant="interactive" padding="none" className="h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6" aria-hidden="true">
                          <div className="w-full">
                            <Badge variant="soft" className="capitalize mb-2">{project.category}</Badge>
                            <h3 className="heading-5 text-cream-50 mb-1 group-hover:text-gold-400 transition-colors">{project.title}</h3>
                            <p className="body-sm text-cream-400">{project.client}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="body-sm text-charcoal-600 dark:text-cream-400 mb-3 line-clamp-2">{project.description}</p>
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

      {/* Process CTA */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="process-cta-title">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="process-cta-title" className="heading-2 mb-4">See How We Work</h2>
            <p className="body-lg text-charcoal-600 dark:text-cream-400 mb-8">
              Our proven six-step process ensures your {service.title.toLowerCase()} project is delivered on time, on brand, and to the highest standard.
            </p>
            <Button size="lg" asChild>
              <Link href="/about#process">
                View Our Process
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}