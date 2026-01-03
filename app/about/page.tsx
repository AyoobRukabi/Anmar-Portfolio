'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/language'

export default function AboutPage() {
  const { t } = useLanguage()

  const services = [
    t('about.services.portrait'),
    t('about.services.event'),
    t('about.services.cinematic'),
    t('about.services.commercial'),
  ]

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="section-padding mb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-yellow font-light max-w-3xl mx-auto">
              {t('about.hero')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding mb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                  alt="Anmar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-4 border-yellow translate-x-4 translate-y-4 -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {t('about.bio')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding mb-24 bg-gradient-to-b from-transparent via-gray-50 to-transparent py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('about.approach.title')}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.approach.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
              {t('about.services.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-8 text-center hover:border-yellow transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {index === 0 && '📷'}
                  {index === 1 && '🎉'}
                  {index === 2 && '🎬'}
                  {index === 3 && '💼'}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-yellow transition-colors">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
