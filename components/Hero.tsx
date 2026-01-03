'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- OPTIMIZED VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 -z-10">
        {/* PERFORMANCE NOTE: 
           1. The 'poster' image loads instantly while the video buffers.
           2. 'playsInline' is required for auto-play on iOS.
           3. 'muted' is required for auto-play on all browsers.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Prioritize WebM (smaller file), fallback to MP4 */}
          {/* <source src="/videos/hero.webm" type="video/webm" /> */}
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Overlays to make text readable over video */}
        <div className="absolute inset-0 bg-black/40" /> {/* General dimming */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" /> {/* Top/Bottom fade */}
      </div>
      
      {/* --- Main Text Content --- */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-hero-mobile md:text-hero font-display font-bold text-white mb-4 drop-shadow-lg">
            {t('home.hero.name')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="text-2xl md:text-3xl text-yellow font-light mb-2 drop-shadow-md">
            {t('home.hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <p className="text-lg md:text-xl text-gray-200 font-mono drop-shadow-md">
            {t('home.hero.location')}
          </p>
        </motion.div>
      </div>

      {/* --- Scroll Down Arrow --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <a 
          href="#work"
          className="flex flex-col items-center gap-2 text-gray-300 hover:text-yellow transition-colors cursor-pointer"
        >
          <span className="text-sm drop-shadow-md">{t('home.hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-yellow text-2xl drop-shadow-md"
          >
            ↓
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}