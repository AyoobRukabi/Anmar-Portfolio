'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import Gallery from '@/components/Gallery'

export default function WorkPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-32 pb-24 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            {t('portfolio.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
        </motion.div>

        <Gallery />
      </div>
    </div>
  )
}
