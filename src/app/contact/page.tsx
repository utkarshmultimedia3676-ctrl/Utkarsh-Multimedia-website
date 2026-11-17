'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Loader2, FileText, Paperclip } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import { siteConfig } from '@/data/site'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    attachment: null as File | null,
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [isDragging, setIsDragging] = useState(false)

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Project description is required'
    else if (formData.message.trim().length < 20) newErrors.message = 'Please provide more details (at least 20 characters)'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('submitting')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, replace with actual API call
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })

    setStatus('success')
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      attachment: null,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type and size
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/zip', 'application/x-zip-compressed']
      const maxSize = 10 * 1024 * 1024 // 10MB

      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, attachment: 'Please upload a PDF, JPG, PNG, or ZIP file' }))
        return
      }
      if (file.size > maxSize) {
        setErrors((prev) => ({ ...prev, attachment: 'File size must be less than 10MB' }))
        return
      }

      setFormData((prev) => ({ ...prev, attachment: file }))
      setErrors((prev) => ({ ...prev, attachment: undefined }))
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/zip', 'application/x-zip-compressed']
      const maxSize = 10 * 1024 * 1024

      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, attachment: 'Please upload a PDF, JPG, PNG, or ZIP file' }))
        return
      }
      if (file.size > maxSize) {
        setErrors((prev) => ({ ...prev, attachment: 'File size must be less than 10MB' }))
        return
      }

      setFormData((prev) => ({ ...prev, attachment: file }))
      setErrors((prev) => ({ ...prev, attachment: undefined }))
    }
  }

  const removeAttachment = () => {
    setFormData((prev) => ({ ...prev, attachment: null }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16" aria-labelledby="contact-hero-title">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
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
            <span className="caption text-cream-100">Let's Start a Conversation</span>
          </motion.div>
          <motion.h1
            id="contact-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-cream-50 mb-6 text-balance"
          >
            Get in
            <br />
            <span className="gradient-text gradient-text-dark">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead text-cream-300 max-w-2xl mx-auto text-pretty"
          >
            Have a project in mind? Need a quote? Just want to chat? We're here to help. Fill out the form and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white dark:bg-charcoal-950" aria-labelledby="contact-form-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24 space-y-8"
              >
                <Card variant="default" padding="lg">
                  <h3 className="heading-5 mb-6">Let's Talk</h3>
                  <p className="body text-charcoal-600 dark:text-cream-400 mb-8">
                    Prefer to reach out directly? We're available through multiple channels.
                  </p>

                  <div className="space-y-6">
                    {/* Email */}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-cream-50 transition-all">
                        <Mail className="w-5 h-5 text-brand-600 dark:text-brand-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="caption text-charcoal-500 dark:text-cream-500">Email Us</p>
                        <p className="body font-medium text-charcoal-900 dark:text-cream-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{siteConfig.contact.email}</p>
                        <p className="caption text-charcoal-500 dark:text-cream-500 mt-1">Typically replies within 24 hours</p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                      className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-cream-50 transition-all">
                        <Phone className="w-5 h-5 text-brand-600 dark:text-brand-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="caption text-charcoal-500 dark:text-cream-500">Call Us</p>
                        <p className="body font-medium text-charcoal-900 dark:text-cream-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{siteConfig.contact.phone}</p>
                        <p className="caption text-charcoal-500 dark:text-cream-500 mt-1">{siteConfig.businessHours.weekdays}</p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-cream-50 transition-all">
                        <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="caption text-charcoal-500 dark:text-cream-500">WhatsApp</p>
                        <p className="body font-medium text-charcoal-900 dark:text-cream-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Quick chat anytime</p>
                        <p className="caption text-charcoal-500 dark:text-cream-500 mt-1">Click to open WhatsApp</p>
                      </div>
                    </a>

                    {/* Address */}
                    <a
                      href={siteConfig.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl bg-charcoal-50 dark:bg-charcoal-800/50 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-cream-50 transition-all">
                        <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400 group-hover:text-cream-50 transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="caption text-charcoal-500 dark:text-cream-500">Visit Us</p>
                        <p className="body font-medium text-charcoal-900 dark:text-cream-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{siteConfig.contact.address}</p>
                        <p className="caption text-charcoal-500 dark:text-cream-500 mt-1">By appointment only</p>
                      </div>
                    </a>
                  </div>
                </Card>

                {/* Quick Stats */}
                <Card variant="default" padding="lg">
                  <h3 className="heading-5 mb-6">Why Clients Choose Us</h3>
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle, label: 'Free consultation & quote', color: 'brand' },
                      { icon: Clock, label: '24-hour response guarantee', color: 'brand' },
                      { icon: FileText, label: 'No hidden fees or surprises', color: 'brand' },
                      { icon: Paperclip, label: 'File review included', color: 'brand' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                        </div>
                        <span className="body-sm text-charcoal-700 dark:text-cream-300">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="default" padding="xl">
                  <div className="mb-8">
                    <h2 id="contact-form-title" className="heading-2 mb-2">Send Us a Message</h2>
                    <p className="body text-charcoal-600 dark:text-cream-400">
                      Tell us about your project. The more detail you provide, the better we can prepare for our conversation.
                    </p>
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence mode="wait">
                    {status === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-8 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3"
                        role="alert"
                      >
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium text-green-800 dark:text-green-200">Message Sent Successfully!</p>
                          <p className="body-sm text-green-700 dark:text-green-300 mt-1">Thank you for reaching out. We'll review your project details and get back to you within 24 hours.</p>
                        </div>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-8 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3"
                        role="alert"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium text-red-800 dark:text-red-200">Something Went Wrong</p>
                          <p className="body-sm text-red-700 dark:text-red-300 mt-1">Please try again or contact us directly at {siteConfig.contact.email}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Row 1: Name & Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Your Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="John Smith"
                        required
                        autoComplete="name"
                      />
                      <Input
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corporation"
                        autoComplete="organization"
                      />
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Email Address *"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="john@acme.com"
                        required
                        autoComplete="email"
                      />
                      <Input
                        label="Phone Number *"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+1 (555) 123-4567"
                        required
                        autoComplete="tel"
                      />
                    </div>

                    {/* Row 3: Service & Budget */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="label">
                          Service Required *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="input"
                          aria-invalid={errors.service ? 'true' : 'false'}
                          aria-describedby={errors.service ? 'service-error' : undefined}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.slug} value={service.slug}>
                              {service.title}
                            </option>
                          ))}
                          <option value="other">Other / Not Sure</option>
                        </select>
                        {errors.service && (
                          <p id="service-error" className="mt-1.5 text-sm text-red-500" role="alert">
                            {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="budget" className="label">
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-plus">$100,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Timeline */}
                    <div>
                      <label htmlFor="timeline" className="label">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    {/* Row 5: Message */}
                    <Textarea
                      label="Project Description *"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      placeholder="Tell us about your project: goals, challenges, target audience, specific requirements, inspiration, etc. The more detail the better."
                      required
                      rows={6}
                    />

                    {/* Row 6: File Attachment */}
                    <div>
                      <label htmlFor="attachment" className="label">
                        File Attachment (Optional)
                      </label>
                      <div
                        className={cn(
                          'border-2 rounded-xl p-6 transition-all duration-200',
                          isDragging
                            ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20'
                            : 'border-charcoal-300 dark:border-charcoal-700 hover:border-brand-300 dark:hover:border-brand-700',
                          formData.attachment && 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
                        )}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <input
                          id="attachment"
                          type="file"
                          name="attachment"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png,.zip"
                          disabled={status === 'submitting'}
                          aria-describedby={errors.attachment ? 'attachment-error' : 'attachment-help'}
                        />
                        {formData.attachment ? (
                          <div className="flex items-center justify-between p-4 bg-white dark:bg-charcoal-800 rounded-xl">
                            <div className="flex items-center gap-4">
                              <FileText className="w-8 h-8 text-green-500" aria-hidden="true" />
                              <div>
                                <p className="font-medium text-charcoal-900 dark:text-cream-100">{formData.attachment.name}</p>
                                <p className="body-sm text-charcoal-500 dark:text-cream-500">
                                  {(formData.attachment.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeAttachment}
                              className="p-2 rounded-lg text-charcoal-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                              aria-label="Remove attachment"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <div className="text-center">
                            <Paperclip className="w-10 h-10 mx-auto text-charcoal-300 dark:text-charcoal-600 mb-3" aria-hidden="true" />
                            <p className="body text-charcoal-600 dark:text-cream-400 mb-1">
                              Drag & drop a file here, or click to browse
                            </p>
                            <p id="attachment-help" className="caption text-charcoal-500 dark:text-cream-500">
                              PDF, JPG, PNG, ZIP • Max 10MB
                            </p>
                          </div>
                        )}
                        {errors.attachment && (
                          <p id="attachment-error" className="mt-2 text-sm text-red-500" role="alert">
                            {errors.attachment}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      isLoading={status === 'submitting'}
                      disabled={status === 'submitting' || status === 'success'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : status === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" aria-hidden="true" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </Button>

                    <p className="caption text-charcoal-500 dark:text-cream-500 text-center md:text-left">
                      By submitting this form, you agree to our <a href="/privacy" className="link link-underline">Privacy Policy</a> and <a href="/terms" className="link link-underline">Terms of Service</a>.
                    </p>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-sm bg-charcoal-100 dark:bg-charcoal-900 border-y border-charcoal-200 dark:border-charcoal-800" aria-label="Location map">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-3 mb-4">Visit Our Studio</h2>
              <p className="body text-charcoal-600 dark:text-cream-400 mb-6">
                We're located in the heart of the creative district. Schedule a visit to see our design studio and production facility in person.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-body-sm text-charcoal-700 dark:text-cream-300">
                  <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.contact.address}</span>
                </div>
                <div className="flex items-center gap-3 text-body-sm text-charcoal-700 dark:text-cream-300">
                  <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.businessHours.weekdays} • {siteConfig.businessHours.saturday} • {siteConfig.businessHours.sunday}</span>
                </div>
                <div className="flex items-center gap-3 text-body-sm text-charcoal-700 dark:text-cream-300">
                  <Phone className="w-5 h-5 text-brand-500 flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
              </div>
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 btn btn-outline"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-74.001234!3d40.712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590000000000%3A0x0!2s1200%20Creative%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apex Creative Studio Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-lg relative overflow-hidden" aria-labelledby="final-contact-title">
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
            <h2 id="final-contact-title" className="heading-display text-cream-50 mb-6 text-balance">
              Prefer to
              <br />
              <span className="gradient-text gradient-text-dark">Chat Directly?</span>
            </h2>
            <p className="lead text-cream-300 mb-10 text-pretty">
              Skip the form. Book a 15-minute discovery call or message us on WhatsApp for an instant response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://calendly.com/apexcreative/discovery" target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />
                  WhatsApp Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}