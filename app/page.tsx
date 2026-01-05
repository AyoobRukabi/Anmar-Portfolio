// 'use client'

// import Hero from '@/components/Hero'
// import FeaturedWork from '@/components/FeaturedWork'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { useLanguage } from '@/lib/language'
// import ContactForm from '@/components/ContactForm'

// export default function HomePage() {
//   const { t } = useLanguage()

//   const services = [
//     { name: t('about.services.portrait'), icon: '📷' },
//     { name: t('about.services.event'), icon: '🎉' },
//     { name: t('about.services.cinematic'), icon: '🎬' },
//     { name: t('about.services.commercial'), icon: '💼' },
//   ]

//   const socialLinks = [
//     { name: 'Instagram', href: 'https://instagram.com/anmar', icon: '📷' },
//     { name: 'Vimeo', href: 'https://vimeo.com/anmar', icon: '🎬' },
//     { name: 'Email', href: 'mailto:hello@anmar.fi', icon: '✉️' },
//   ]

//   return (
//     <>
//       {/* Hero Section */}
//       <Hero />

//       {/* Featured Work Section */}
//       <section id="work" className="scroll-mt-20">
//         <FeaturedWork />
//       </section>

//       {/* About Section */}
//       <section id="about" className="section-padding py-24 md:py-32 bg-gradient-to-b from-black via-gray-900/30 to-black scroll-mt-20">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
//               {t('about.title')}
//             </h2>
//             <p className="text-2xl md:text-3xl text-yellow font-light max-w-3xl mx-auto">
//               {t('about.hero')}
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="relative aspect-[3/4] bg-gray-100 max-w-md mx-auto lg:mx-0">
//                 {/* UPDATED IMAGE SOURCE BELOW */}
//                 <Image
//                   src="/images/anmar.jpg"
//                   alt="Anmar"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 border-4 border-yellow translate-x-4 translate-y-4 -z-10" />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="space-y-6"
//             >
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 {t('about.bio')}
//               </p>
              
//               <div className="border-l-4 border-yellow pl-6">
//                 <h3 className="text-2xl font-display font-bold text-white mb-3">
//                   {t('about.approach.title')}
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   {t('about.approach.text')}
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
//               {t('about.services.title')}
//             </h3>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-gray-50 border border-gray-100 p-8 text-center hover:border-yellow transition-all duration-300 group"
//               >
//                 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
//                   {service.icon}
//                 </div>
//                 <h4 className="text-xl font-semibold text-white group-hover:text-yellow transition-colors">
//                   {service.name}
//                 </h4>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section-padding py-24 md:py-32 scroll-mt-20">
//         <div className="container-custom">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
//               {t('contact.title')}
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               {t('contact.subtitle')}
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <ContactForm />
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="space-y-8"
//             >
//               {/* Social Links */}
//               <div>
//                 <h3 className="text-2xl font-display font-bold text-white mb-6">
//                   {t('contact.info.follow')}
//                 </h3>
//                 <div className="space-y-4">
//                   {socialLinks.map((link) => (
//                     <a
//                       key={link.name}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-4 text-gray-400 hover:text-yellow transition-colors group"
//                     >
//                       <span className="text-3xl group-hover:scale-110 transition-transform">
//                         {link.icon}
//                       </span>
//                       <span className="text-lg">{link.name}</span>
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="border-t border-gray-100 pt-8">
//                 <h3 className="text-2xl font-display font-bold text-white mb-4">
//                   {t('contact.info.location')}
//                 </h3>
//                 <div className="bg-gray-50 border border-gray-100 p-6">
//                   <div className="flex items-start gap-4">
//                     <span className="text-3xl">📍</span>
//                     <div>
//                       <p className="text-white font-medium mb-1">Tampere</p>
//                       <p className="text-gray-400">Finland</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Call to Action */}
//               <div className="border-t border-gray-100 pt-8">
//                 <div className="bg-yellow/10 border-2 border-yellow p-6">
//                   <p className="text-yellow font-medium mb-2">
//                     Available for projects
//                   </p>
//                   <p className="text-gray-300 text-sm">
//                     Currently accepting new photography and videography projects in Tampere and throughout Finland.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }








// Black and white an grey backgroungnds for sections #############################################################
'use client'

import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  const { t } = useLanguage()

  const services = [
    { name: t('about.services.portrait'), icon: '📷' },
    { name: t('about.services.event'), icon: '🎉' },
    { name: t('about.services.cinematic'), icon: '🎬' },
    { name: t('about.services.commercial'), icon: '💼' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/anmar', icon: '📷' },
    { name: 'Vimeo', href: 'https://vimeo.com/anmar', icon: '🎬' },
    { name: 'Email', href: 'mailto:hello@anmar.fi', icon: '✉️' },
  ]

  return (
    <>
      {/* Hero Section (Visual/Black) */}
      <Hero />

      {/* 1. Featured Work Section -> BLACK */}
      <section id="work" className="section-padding py-24 md:py-32 bg-black scroll-mt-20">
        <FeaturedWork />
      </section>

      {/* 2. About Section -> WHITE */}
      <section id="about" className="section-padding py-24 md:py-32 bg-white scroll-mt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Text color changed to BLACK for visibility on white bg */}
            <h2 className="text-5xl md:text-6xl font-display font-bold text-black mb-6">
              {t('about.title')}
            </h2>
            {/* Subtitle changed to Dark Gray */}
            <p className="text-2xl md:text-3xl text-gray-800 font-light max-w-3xl mx-auto">
              {t('about.hero')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] bg-gray-100 max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/anmar.jpg"
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
              className="space-y-6"
            >
              {/* Bio text changed to dark gray */}
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.bio')}
              </p>
              
              <div className="border-l-4 border-yellow pl-6">
                {/* Approach title changed to Black */}
                <h3 className="text-2xl font-display font-bold text-black mb-3">
                  {t('about.approach.title')}
                </h3>
                {/* Approach text changed to dark gray */}
                <p className="text-gray-700 leading-relaxed">
                  {t('about.approach.text')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Title changed to Black */}
            <h3 className="text-4xl md:text-5xl font-display font-bold text-black mb-12">
              {t('about.services.title')}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // Updated card colors for white background
                className="bg-gray-50 border border-gray-200 p-8 text-center hover:border-yellow transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                {/* Service text changed to Black */}
                <h4 className="text-xl font-semibold text-black group-hover:text-yellow-600 transition-colors">
                  {service.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Section -> DARK GREY */}
      <section id="contact" className="section-padding py-24 md:py-32 bg-gray-900 scroll-mt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  {t('contact.info.follow')}
                </h3>
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
              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {t('contact.info.location')}
                </h3>
                <div className="bg-black/30 border border-gray-800 p-6">
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
              <div className="border-t border-gray-800 pt-8">
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
      </section>
    </>
  )
}