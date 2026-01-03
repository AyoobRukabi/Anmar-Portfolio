export interface PortfolioItem {
  id: string
  title: string
  category: 'portraits' | 'events' | 'cinematic' | 'commercial'
  image: string
  description: string
  date: string
  location?: string
  tags?: string[]
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Golden Hour Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop',
    description: 'Natural light portrait session during golden hour',
    date: '2024-03',
    location: 'Tampere, Finland',
    tags: ['portrait', 'natural-light', 'outdoor']
  },
  {
    id: '2',
    title: 'Corporate Event',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    description: 'Annual corporate gala event coverage',
    date: '2024-02',
    location: 'Helsinki, Finland',
    tags: ['event', 'corporate', 'indoor']
  },
  {
    id: '3',
    title: 'Urban Cinematic',
    category: 'cinematic',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=675&fit=crop',
    description: 'Cinematic video production in urban setting',
    date: '2024-01',
    location: 'Tampere, Finland',
    tags: ['video', 'cinematic', 'urban']
  },
  {
    id: '4',
    title: 'Fashion Editorial',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop',
    description: 'Commercial fashion photography for local brand',
    date: '2023-12',
    location: 'Tampere, Finland',
    tags: ['fashion', 'commercial', 'editorial']
  },
  {
    id: '5',
    title: 'Wedding Moments',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    description: 'Intimate wedding ceremony documentation',
    date: '2023-11',
    location: 'Turku, Finland',
    tags: ['wedding', 'event', 'documentary']
  },
  {
    id: '6',
    title: 'Studio Portrait',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    description: 'Professional studio portrait session',
    date: '2023-10',
    location: 'Tampere, Finland',
    tags: ['portrait', 'studio', 'professional']
  },
  {
    id: '7',
    title: 'Product Launch',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=675&fit=crop',
    description: 'New product launch event video',
    date: '2023-09',
    location: 'Helsinki, Finland',
    tags: ['commercial', 'video', 'event']
  },
  {
    id: '8',
    title: 'Nordic Landscapes',
    category: 'cinematic',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop',
    description: 'Cinematic landscape videography',
    date: '2023-08',
    location: 'Lapland, Finland',
    tags: ['landscape', 'cinematic', 'nature']
  },
  {
    id: '9',
    title: 'Artist Portrait Series',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop',
    description: 'Portrait series of local artists',
    date: '2023-07',
    location: 'Tampere, Finland',
    tags: ['portrait', 'series', 'artistic']
  }
]

export const getPortfolioByCategory = (category?: string) => {
  if (!category || category === 'all') {
    return portfolioData
  }
  return portfolioData.filter(item => item.category === category)
}
