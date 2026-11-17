'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Behance,
  Dribbble,
  ArrowRight,
  Check,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, footerNav, certifications, partners } from '@/data/site'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Twitter, href: siteConfig.links.twitter, label: 'Twitter' },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: siteConfig.links.instagram, label: 'Instagram' },
    { icon: Behance, href: siteConfig.links.behance, label: 'Behance' },
    { icon: Dribbble, href: siteConfig.links.dribbble, label: 'Dribbble' },
  ]

  const contactInfo = [
    { icon: Mail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: Phone, label: 'Phone', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\D/g, '')}` },
    { icon: MapPin, label: 'Address', value: siteConfig.contact.address, href: siteConfig.contact.mapsUrl },
  ]

  return (
    <footer className="bg-charcoal-950 text-cream-100 relative overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" aria-hidden="true" />

      <div className="container-custom relative py-16 lg:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 xl:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="Utkarsh Multimedia - Home">
              <span className="text-gold-400 font-display font-medium text-2xl">Utkarsh</span>
              <span className="font-display font-medium text-2xl">Multimedia</span>
            </Link>
            <p className="body text-cream-400 max-w-xs mb-8 text-pretty">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 text-cream-400 hover:text-gold-400 transition-colors duration-200 group"
                  target={item.label === 'Address' ? '_blank' : undefined}
                  rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-charcoal-800 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-cream-400 group-hover:text-gold-400 transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="caption text-cream-500">{item.label}</p>
                    <p className="body-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-charcoal-800 flex items-center justify-center text-cream-400 hover:bg-gold-500 hover:text-charcoal-950 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="heading-6 text-cream-100 mb-6">Services</h4>
            <nav aria-label="Services">
              <ul className="space-y-3">
                {footerNav.services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="body-sm text-cream-400 hover:text-gold-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="heading-6 text-cream-100 mb-6">Company</h4>
            <nav aria-label="Company">
              <ul className="space-y-3">
                {footerNav.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="body-sm text-cream-400 hover:text-gold-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="heading-6 text-cream-100 mb-6">Support</h4>
            <nav aria-label="Support">
              <ul className="space-y-3">
                {footerNav.support.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="body-sm text-cream-400 hover:text-gold-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="heading-6 text-cream-100 mb-6">Legal</h4>
            <nav aria-label="Legal">
              <ul className="space-y-3">
                {footerNav.legal.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="body-sm text-cream-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-12 border-charcoal-800" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="body-sm text-cream-500">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="caption text-cream-600 mt-1">
              Crafted with precision & passion.
            </p>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <p className="caption text-cream-500 mb-3">Certifications & Standards</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-800 border border-charcoal-700 text-caption text-cream-400"
                >
                  <Check className="w-3 h-3 text-gold-500" aria-hidden="true" />
                  {cert.name}
                </span>
              ))}
            </div>
          </div>

          {/* Technology Partners */}
          <div className="text-center md:text-right">
            <p className="caption text-cream-500 mb-3">Technology Partners</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="px-3 py-1.5 rounded-full bg-charcoal-800 border border-charcoal-700 text-caption text-cream-400 font-medium"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Re-export Separator from UI
import { Separator } from '@/components/ui/Separator'