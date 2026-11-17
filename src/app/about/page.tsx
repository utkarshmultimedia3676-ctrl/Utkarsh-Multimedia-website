import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Lightbulb, Heart, Award, Leaf, Users, Truck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import { siteConfig, stats, processSteps, whyChooseUs } from '@/data/site'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Utkarsh Multimedia - our story, vision, mission, and commitment to creative excellence in design and print.',
}

const icons = {
  target: Target,
  lightbulb: Lightbulb,
  heart: Heart,
  award: Award,
  leaf: Leaf,
  users: Users,
  truck: Truck,
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16" aria-labelledby="about-hero-title">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950/90" />
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-100 mb-6"
            >
              <span className="caption text-cream-100">Established 2009</span>
            </motion.div>
            <motion.h1
              id="about-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display text-cream-50 mb-6 text-balance"
            >
              Crafting Brands
              <br />
              <span className="gradient-text gradient-text-dark">With Purpose</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lead text-cream-300 max-w-2xl mx-auto text-pretty"
            >
              Fifteen years of transforming ambitious brands through strategic design, premium packaging, and exceptional print craftsmanship.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-cream-50 dark:bg-charcoal-900" aria-labelledby="story-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-header text-left max-w-none mb-8"
              >
                <span className="section-tag">Our Story</span>
                <h2 id="story-title" className="section-title text-left">
                  Fifteen Years of
                  <br />
                  <span className="gradient-text gradient-text-dark">Creative Excellence</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <p className="body-lg text-charcoal-700 dark:text-cream-300 text-pretty">
                  Founded in 2009 with a simple belief: great design deserves great print. What began as a small design studio in Ahmedabad has grown into a full-service creative agency with in-house production capabilities that rival the best in the industry.
                </p>
                <p className="body text-charcoal-600 dark:text-cream-400 text-pretty">
                  Today, our team of 40+ designers, strategists, print specialists, and project managers work side by side—literally. Our design studio overlooks the production floor, ensuring every creative decision is informed by print reality, and every print job benefits from design oversight.
                </p>
                <p className="body text-charcoal-600 dark:text-cream-400 text-pretty">
                  We've partnered with startups launching their first product, global brands refreshing their identity, and everything in between. The common thread? Clients who understand that in a noisy world, craft is your competitive advantage.
                </p>

                <Button size="lg" asChild className="mt-4">
                  <Link href="/contact">
                    Start a Project With Us
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Apex Creative Studio team collaborating in modern workspace"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="heading-4 text-cream-50">40+</p>
                    <p className="body-sm text-cream-400">Team Members</p>
                  </div>
                  <div className="text-right">
                    <p className="heading-4 text-cream-50">1,200+</p>
                    <p className="body-sm text-cream-400">Projects Delivered</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="mission-title">
        <div className="container-custom">
          <div className="section-header max-w-3xl mx-auto mb-16">
            <span className="section-tag">Our Foundation</span>
            <h2 id="mission-title" className="section-title">
              Vision, Mission &
              <br />
              <span className="gradient-text gradient-text-dark">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="hover" padding="lg" className="h-full text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 mb-6">
                  <Target className="w-8 h-8 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                </div>
                <h3 className="heading-5 mb-3">Our Vision</h3>
                <p className="body text-charcoal-600 dark:text-cream-400">
                  To be the world's most trusted partner for brands that believe design and print are investments, not expenses.
                </p>
              </Card>
            </motion.article>

            {/* Mission */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card variant="hover" padding="lg" className="h-full text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 mb-6">
                  <Lightbulb className="w-8 h-8 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                </div>
                <h3 className="heading-5 mb-3">Our Mission</h3>
                <p className="body text-charcoal-600 dark:text-cream-400">
                  To elevate every brand we touch through strategic thinking, exceptional craft, and relentless attention to detail—from concept to delivery.
                </p>
              </Card>
            </motion.article>

            {/* Values */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card variant="hover" padding="lg" className="h-full text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 mb-6">
                  <Heart className="w-8 h-8 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                </div>
                <h3 className="heading-5 mb-3">Our Values</h3>
                <div className="space-y-2 text-left">
                  {[
                    'Craft over shortcuts',
                    'Strategy before aesthetics',
                    'Partnership over transactions',
                    'Sustainability as standard',
                    'Excellence in every detail',
                  ].map((value) => (
                    <div key={value} className="flex items-center gap-2 text-body-sm text-charcoal-600 dark:text-cream-400">
                      <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {value}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-charcoal-950" aria-labelledby="stats-title">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-medium text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="caption text-cream-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-cream-50 dark:bg-charcoal-900" aria-labelledby="approach-title">
        <div className="container-custom">
          <div className="section-header max-w-3xl mx-auto mb-16">
            <span className="section-tag">How We Work</span>
            <h2 id="approach-title" className="section-title">
              Our Creative
              <br />
              <span className="gradient-text gradient-text-dark">Philosophy</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Philosophy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="heading-3">Design with Intent</h3>
                <p className="body-lg text-charcoal-700 dark:text-cream-300">
                  Every pixel, every paper stock, every finish serves a purpose. We don't decorate—we communicate. Our design process begins with understanding your business objectives, audience psychology, and competitive landscape.
                </p>

                <h3 className="heading-3">Print as a Craft</h3>
                <p className="body-lg text-charcoal-700 dark:text-cream-300">
                  Print isn't a commodity—it's a sensory experience. The weight of a business card, the texture of a package, the way light catches a spot varnish. These moments create brand memories that digital alone cannot.
                </p>

                <h3 className="heading-3">End-to-End Accountability</h3>
                <p className="body-lg text-charcoal-700 dark:text-cream-300">
                  When design and production live under one roof, there's no "throwing it over the wall." Our designers specify achievable finishes. Our press operators understand design intent. The result: zero surprises, consistent excellence.
                </p>

                <h3 className="heading-3">Sustainability Built In</h3>
                <p className="body-lg text-charcoal-700 dark:text-cream-300">
                  FSC-certified papers, vegetable-based inks, carbon-neutral shipping options, and waste reduction at every stage. We make sustainable choices the default, not the upsell.
                </p>
              </motion.div>
            </div>

            {/* Right - Expertise */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => {
                    const Icon = icons[item.icon as keyof typeof icons] || Award
                    return (
                      <Card key={item.title} variant="hover" padding="md" className="h-full">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 mb-3">
                          <Icon className="w-5 h-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                        </div>
                        <h4 className="heading-6 mb-2">{item.title}</h4>
                        <p className="body-sm text-charcoal-600 dark:text-cream-400">{item.description}</p>
                      </Card>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Certifications */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="team-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Team */}
            <div>
              <div className="section-header text-left max-w-none mb-10">
                <span className="section-tag">Our Team</span>
                <h2 id="team-title" className="section-title text-left">
                  40+ Specialists
                  <br />
                  <span className="gradient-text gradient-text-dark">One Vision</span>
                </h2>
              </div>
              <p className="body-lg text-charcoal-700 dark:text-cream-300 mb-6">
                Strategists, brand designers, packaging engineers, print technicians, project managers, and production specialists—all working in sync to deliver work that exceeds expectations.
              </p>
              <div className="space-y-4">
                {[
                  'Creative Direction & Strategy',
                  'Brand Identity & Graphic Design',
                  'Packaging Engineering & Structural Design',
                  'Prepress & Color Management',
                  'Print Production & Finishing',
                  'Project Management & Logistics',
                ].map((dept) => (
                  <div key={dept} className="flex items-center gap-3 p-4 rounded-xl bg-charcoal-100 dark:bg-charcoal-800">
                    <div className="w-2 h-2 rounded-full bg-brand-500" aria-hidden="true" />
                    <span className="body-sm font-medium text-charcoal-900 dark:text-cream-100">{dept}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="section-header text-left max-w-none mb-10">
                <span className="section-tag">Standards</span>
                <h2 className="section-title text-left">
                  Certified
                  <br />
                  <span className="gradient-text gradient-text-dark">Excellence</span>
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'G7 Master Printer', issuer: 'Idealliance', desc: 'Industry-leading color accuracy & consistency' },
                  { name: 'FSC Chain of Custody', issuer: 'Forest Stewardship Council', desc: 'Responsible forest management certification' },
                  { name: 'ISO 9001:2015', issuer: 'International Org. for Standardization', desc: 'Quality management systems' },
                  { name: 'ISO 14001:2015', issuer: 'Environmental Management', desc: 'Environmental management systems' },
                ].map((cert) => (
                  <Card key={cert.name} variant="hover" padding="md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="heading-6 mb-1">{cert.name}</h4>
                        <p className="caption text-charcoal-500 dark:text-cream-500 mb-1">{cert.issuer}</p>
                        <p className="body-sm text-charcoal-600 dark:text-cream-400">{cert.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-lg relative overflow-hidden" aria-labelledby="final-cta-title">
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
            <h2 id="final-cta-title" className="heading-display text-cream-50 mb-6 text-balance">
              Ready to Work
              <br />
              <span className="gradient-text gradient-text-dark">Together?</span>
            </h2>
            <p className="lead text-cream-300 mb-10 text-pretty">
              Let's discuss your next project. No pressure, no obligation—just a conversation about what's possible.
            </p>
            <Button size="lg" asChild className="w-full sm:w-auto">
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