// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import { useLanguage } from '@/lib/language'
// import { portfolioData, getPortfolioByCategory } from '@/lib/portfolio-data'

// export default function Gallery() {
//   const { t } = useLanguage()
//   const [activeFilter, setActiveFilter] = useState('all')
//   const [selectedImage, setSelectedImage] = useState<number | null>(null)

//   const filters = ['all', 'portraits', 'events', 'cinematic', 'commercial']
//   const filteredItems = getPortfolioByCategory(activeFilter)

//   const handlePrevious = () => {
//     if (selectedImage === null) return
//     const currentIndex = filteredItems.findIndex((_, i) => i === selectedImage)
//     const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
//     setSelectedImage(prevIndex)
//   }

//   const handleNext = () => {
//     if (selectedImage === null) return
//     const currentIndex = filteredItems.findIndex((_, i) => i === selectedImage)
//     const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
//     setSelectedImage(nextIndex)
//   }

//   return (
//     <>
//       {/* Filter Bar */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12">
//         {filters.map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`px-6 py-2 font-medium transition-all duration-300 ${
//               activeFilter === filter
//                 ? 'bg-yellow text-black'
//                 : 'text-white border border-gray-100 hover:border-yellow hover:text-yellow'
//             }`}
//           >
//             {t(`portfolio.filters.${filter}`)}
//           </button>
//         ))}
//       </div>

//       {/* Gallery Grid */}
//       <motion.div
//         layout
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         <AnimatePresence mode="popLayout">
//           {filteredItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               layout
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.4 }}
//               onClick={() => setSelectedImage(index)}
//               className="cursor-pointer group"
//             >
//               <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow transition-colors duration-300" />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-xl font-semibold text-white mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm">{item.location}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedImage !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//           >
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-6 right-6 text-white hover:text-yellow text-4xl z-10"
//               aria-label="Close"
//             >
//               ×
//             </button>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation()
//                 handlePrevious()
//               }}
//               className="absolute left-6 text-white hover:text-yellow text-4xl z-10"
//               aria-label="Previous"
//             >
//               ←
//             </button>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation()
//                 handleNext()
//               }}
//               className="absolute right-6 text-white hover:text-yellow text-4xl z-10"
//               aria-label="Next"
//             >
//               →
//             </button>

//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative max-w-6xl max-h-[90vh] w-full"
//             >
//               <div className="relative w-full h-[80vh]">
//                 <Image
//                   src={filteredItems[selectedImage].image}
//                   alt={filteredItems[selectedImage].title}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <div className="bg-black/50 backdrop-blur-sm p-6 mt-4">
//                 <h3 className="text-2xl font-display font-bold text-white mb-2">
//                   {filteredItems[selectedImage].title}
//                 </h3>
//                 <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
//                   <span className="capitalize">
//                     {t(`portfolio.filters.${filteredItems[selectedImage].category}`)}
//                   </span>
//                   <span>|</span>
//                   <span>{filteredItems[selectedImage].date}</span>
//                   {filteredItems[selectedImage].location && (
//                     <>
//                       <span>|</span>
//                       <span>{filteredItems[selectedImage].location}</span>
//                     </>
//                   )}
//                 </div>
//                 <p className="text-white mt-4">
//                   {filteredItems[selectedImage].description}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }














'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/language'
import { portfolioData, getPortfolioByCategory } from '@/lib/portfolio-data'

export default function Gallery() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filters = ['all', 'portraits', 'events', 'cinematic', 'commercial']
  const filteredItems = getPortfolioByCategory(activeFilter)

  const handlePrevious = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex((_, i) => i === selectedImage)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    setSelectedImage(prevIndex)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex((_, i) => i === selectedImage)
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(nextIndex)
  }

  // --- NEW LOGIC: Use Row/Col Spans instead of Aspect Ratio ---
  const getItemStyles = (category: string) => {
    switch (category) {
      case 'cinematic':
        return 'md:col-span-2 md:row-span-1' // Wide & Short (Landscape)
      case 'portraits':
        return 'md:col-span-1 md:row-span-2' // Narrow & Tall (Portrait)
      default:
        return 'md:col-span-1 md:row-span-1' // Standard Square
    }
  }

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-yellow text-black'
                : 'text-white border border-gray-100 hover:border-yellow hover:text-yellow'
            }`}
          >
            {t(`portfolio.filters.${filter}`)}
          </button>
        ))}
      </div>

      {/* --- PERFECT BENTO GRID --- */}
      <motion.div
        layout
        // 1. auto-rows-[300px]: Sets a fixed base height for every "block"
        // 2. grid-flow-dense: Fills in the empty gaps automatically
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-4 grid-flow-dense"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const spanClass = getItemStyles(item.category)
            
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(index)}
                // Apply the span class (Wide or Tall)
                className={`relative cursor-pointer group overflow-hidden bg-gray-900 shadow-lg ${spanClass}`}
              >
                {/* Image fills the calculated space completely */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-yellow text-sm font-medium uppercase tracking-wider">
                    {t(`portfolio.filters.${item.category}`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox (Unchanged) */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-yellow text-4xl z-10"
            >
              ×
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-6 text-white hover:text-yellow text-4xl z-10 hidden md:block"
            >
              ←
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-6 text-white hover:text-yellow text-4xl z-10 hidden md:block"
            >
              →
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="relative w-full flex-1 min-h-[50vh] md:min-h-[70vh]">
                <Image
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="bg-black/80 backdrop-blur-md p-6 border-t border-gray-800 shrink-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {filteredItems[selectedImage].title}
                    </h3>
                    <p className="text-gray-400">
                      {filteredItems[selectedImage].description}
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-yellow text-sm mb-1 uppercase">
                      {t(`portfolio.filters.${filteredItems[selectedImage].category}`)}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {filteredItems[selectedImage].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}