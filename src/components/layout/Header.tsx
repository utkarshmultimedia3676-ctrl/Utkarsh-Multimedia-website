'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, siteConfig } from '@/data/site'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesDropdown = [
    { label: 'Graphic Designing', href: '/services/graphic-designing' },
    { label: 'Packaging Design & Printing', href: '/services/packaging-design-printing' },
    { label: 'Commercial Printing', href: '/services/commercial-printing' },
    { label: 'Branding & Identity', href: '/services/branding-identity' },
    { label: 'Advertising & Marketing', href: '/services/advertising-marketing-creatives' },
    { label: 'Corporate Stationery', href: '/services/corporate-stationery' },
    { label: 'Catalogue & Brochure', href: '/services/product-catalogue-brochure' },
    { label: 'Promotional Materials', href: '/services/promotional-marketing-materials' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-spring',
        isScrolled
          ? 'bg-white/90 dark:bg-charcoal-950/90 backdrop-blur-xl shadow-soft border-b border-charcoal-200 dark:border-charcoal-800'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-medium text-heading-lg text-charcoal-950 dark:text-cream-50 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label="Utkarsh Multimedia - Home"
          >
            <span className="text-brand-600 dark:text-brand-400">Utkarsh</span>
            <span className="hidden sm:inline">Multimedia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => {
              const hasDropdown = item.label === 'Services'
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setIsDropdownOpen(item.label)}
                  onMouseLeave={() => hasDropdown && setIsDropdownOpen(null)}
                >
                  {hasDropdown ? (
                    <>
                      <button
                        className={cn(
                          'flex items-center gap-1.5 px-4 py-2.5 text-body-sm font-medium rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                          isDropdownOpen === item.label
                            ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30'
                            : 'text-charcoal-700 dark:text-cream-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-charcoal-100 dark:hover:bg-charcoal-800'
                        )}
                        aria-expanded={isDropdownOpen === item.label}
                        aria-haspopup="true"
                        aria-controls={`${item.label}-dropdown`}
                      >
                        {item.label}
                        <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen === item.label && (
                          <motion.div
                            id={`${item.label}-dropdown`}
                            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 mt-2 w-64 origin-top"
                            role="menu"
                          >
                            <div className="bg-white dark:bg-charcoal-900 rounded-2xl border border-charcoal-200 dark:border-charcoal-800 shadow-strong overflow-hidden p-2">
                              {servicesDropdown.map((service) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  className="block px-4 py-2.5 text-body-sm font-medium text-charcoal-700 dark:text-cream-300 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                                  role="menuitem"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2.5 text-body-sm font-medium text-charcoal-700 dark:text-cream-300 rounded-xl hover:text-brand-600 dark:hover:text-brand-400 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
              className="hidden lg:flex items-center gap-2 px-4 py-2.5 text-body-sm font-medium text-charcoal-700 dark:text-cream-300 rounded-xl hover:text-brand-600 dark:hover:text-brand-400 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Get a Quote</span>
            </a>
            <Button size="md" asChild>
              <Link href="/contact" className="w-full">
                Start a Project
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-charcoal-700 dark:text-cream-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-950"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="container-custom py-6 space-y-4">
                {navItems.map((item) => {
                  const hasDropdown = item.label === 'Services'
                  return (
                    <div key={item.label} className="space-y-2">
                      {hasDropdown ? (
                        <>
                          <button
                            onClick={() => setIsDropdownOpen(isDropdownOpen === item.label ? null : item.label)}
                            className="w-full flex items-center justify-between px-4 py-3 text-body font-medium text-charcoal-900 dark:text-cream-100 rounded-xl hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
                            aria-expanded={isDropdownOpen === item.label}
                          >
                            {item.label}
                            <svg
                              className={cn('w-5 h-5 transition-transform duration-200', isDropdownOpen === item.label && 'rotate-180')}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {isDropdownOpen === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-1"
                              >
                                {servicesDropdown.map((service) => (
                                  <Link
                                    key={service.label}
                                    href={service.href}
                                    className="block px-4 py-2.5 text-body-sm font-medium text-charcoal-600 dark:text-cream-400 rounded-lg hover:text-brand-600 dark:hover:text-brand-400 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {service.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-body font-medium text-charcoal-900 dark:text-cream-100 rounded-xl hover:bg-charcoal-100 dark:hover:bg-charcoal-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  )
                })}

                <Separator className="my-4" />

                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 px-4 py-3 text-body font-medium text-charcoal-900 dark:text-cream-100 rounded-xl hover:bg-charcoal-100 dark:hover:bg-charcoal-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>Call Us: {siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-body font-medium text-charcoal-900 dark:text-cream-100 rounded-xl hover:bg-charcoal-100 dark:hover:bg-charcoal-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    <span>WhatsApp Us</span>
                  </a>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Start a Project
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 md:hidden flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500 text-white shadow-strong hover:shadow-glow hover:scale-105 transition-all duration-300 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" aria-hidden="true" />
      </a>
    </header>
  )
}