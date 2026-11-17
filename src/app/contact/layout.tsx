import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Utkarsh Multimedia. Request a quote, discuss your project, or just say hello. We respond within 24 hours.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}