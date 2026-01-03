'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  const { t } = useLanguage()

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/anmar', icon: '📷' },
    { name: 'Vimeo', href: 'https://vimeo.com/anmar', icon: '🎬' },
    { name: 'Email', href: 'mailto:hello@anmar.fi', icon: '✉️' },
  ]

  return (
    <div className="pt-32 pb-24 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                {t('contact.info.follow')}
              </h2>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-yellow transition-colors group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span className="text-lg">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                {t('contact.info.location')}
              </h2>
              <div className="bg-gray-50 border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-white font-medium mb-1">Tampere</p>
                    <p className="text-gray-400">Finland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="border-t border-gray-100 pt-8">
              <div className="bg-yellow/10 border-2 border-yellow p-6">
                <p className="text-yellow font-medium mb-2">
                  Available for projects
                </p>
                <p className="text-gray-300 text-sm">
                  Currently accepting new photography and videography projects in Tampere and throughout Finland.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
