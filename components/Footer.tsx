// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useLanguage } from '@/lib/language'

// export default function Footer() {
//   const { t } = useLanguage()
//   const currentYear = new Date().getFullYear()

//   const socialLinks = [
//     { name: 'Instagram', href: 'https://instagram.com/anmar', icon: '📷' },
//     { name: 'Vimeo', href: 'https://vimeo.com/anmar', icon: '🎬' },
//     { name: 'Email', href: 'mailto:hello@anmar.fi', icon: '✉️' },
//   ]

//   return (
//     <footer className="bg-black border-t border-gray-100 mt-24">
//       <div className="container-custom section-padding py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//           {/* --- Brand Section with Logo --- */}
//           <div>
//             <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
//               <Image 
//                 src="/images/logo.png" 
//                 alt="ANMAR"
//                 width={120}
//                 height={40}
//                 className="h-10 w-auto object-contain" 
//               />
//             </Link>
//             <p className="text-gray-400 text-sm">
//               Visual Storyteller
//               <br />
//               Tampere, Finland
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">{t('nav.work')}</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/work"
//                   className="text-gray-400 hover:text-yellow transition-colors text-sm"
//                 >
//                   {t('portfolio.filters.portraits')}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/work"
//                   className="text-gray-400 hover:text-yellow transition-colors text-sm"
//                 >
//                   {t('portfolio.filters.events')}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/work"
//                   className="text-gray-400 hover:text-yellow transition-colors text-sm"
//                 >
//                   {t('portfolio.filters.cinematic')}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/work"
//                   className="text-gray-400 hover:text-yellow transition-colors text-sm"
//                 >
//                   {t('portfolio.filters.commercial')}
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">{t('contact.info.follow')}</h4>
//             <ul className="space-y-2">
//               {socialLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-yellow transition-colors text-sm flex items-center gap-2"
//                   >
//                     <span>{link.icon}</span>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-400 text-sm">
//             © {currentYear} Anmar. {t('footer.rights')}.
//           </p>
//           <div className="flex gap-6">
//             <Link
//               href="/about"
//               className="text-gray-400 hover:text-yellow transition-colors text-sm"
//             >
//               {t('nav.about')}
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-400 hover:text-yellow transition-colors text-sm"
//             >
//               {t('nav.contact')}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }










'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/anmar', icon: '📷' },
    { name: 'Vimeo', href: 'https://vimeo.com/anmar', icon: '🎬' },
    { name: 'Email', href: 'mailto:hello@anmar.fi', icon: '✉️' },
  ]

  return (
    <footer className="bg-black border-t border-gray-100 mt-24">
      <div className="container-custom section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* --- Brand Section with Logo --- */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/logo.png" 
                alt="ANMAR"
                width={120}
                height={40}
                // FIX APPLIED HERE: "w-auto"
                className="h-auto w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Visual Storyteller
              <br />
              Tampere, Finland
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('nav.work')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/work"
                  className="text-gray-400 hover:text-yellow transition-colors text-sm"
                >
                  {t('portfolio.filters.portraits')}
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-400 hover:text-yellow transition-colors text-sm"
                >
                  {t('portfolio.filters.events')}
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-400 hover:text-yellow transition-colors text-sm"
                >
                  {t('portfolio.filters.cinematic')}
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-400 hover:text-yellow transition-colors text-sm"
                >
                  {t('portfolio.filters.commercial')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('contact.info.follow')}</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Anmar. {t('footer.rights')}.
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-gray-400 hover:text-yellow transition-colors text-sm"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-yellow transition-colors text-sm"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}