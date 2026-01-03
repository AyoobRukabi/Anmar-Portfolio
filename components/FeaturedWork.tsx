'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { portfolioData } from '@/lib/portfolio-data'

export default function FeaturedWork() {
  const { t } = useLanguage()
  const featuredItems = portfolioData.slice(0, 3)

  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center">
            {t('home.featured.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={`/work`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-yellow transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm capitalize">
                  {t(`portfolio.filters.${item.category}`)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/work" className="btn-primary inline-block">
            {t('home.featured.viewAll')} →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
