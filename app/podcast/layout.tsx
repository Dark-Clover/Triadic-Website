import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Podcast Studio in Islamabad - Triadic Media | Professional Podcast Production',
  description: 'Triadic Media offers the best podcast studio in Islamabad, centrally located in Blue Area near Centaurus Mall. Professional 24-bit audio recording, expert engineers, and comprehensive podcast production services. Serving F-7, F-8, and twin cities area. Book your session today!',
  keywords: [
    'podcast studio Islamabad',
    'best podcast studio Islamabad',
    'podcast production Islamabad',
    'professional podcast studio',
    'audio recording studio Islamabad',
    'podcast editing Islamabad',
    'podcast studio Blue Area',
    'podcast studio F-7 F-8',
    'podcast studio F-6 F-7',
    'podcast studio G-8 G-9',
    'podcast studio near Centaurus',
    'podcast studio near Serena Hotel',
    'podcast recording services',
    'audio production studio',
    'podcast marketing Islamabad',
    'podcast distribution services',
    'professional audio recording',
    'soundproof studio Islamabad',
    'podcast equipment rental',
    'audio engineering services',
    'podcast content strategy',
    'business podcast production',
    'technology podcast studio',
    'wellness podcast production',
    'entertainment podcast studio',
    'podcast studio near me',
    'audio recording studio Blue Area',
    'professional podcast production Islamabad',
    '24-bit audio recording studio',
    'podcast studio twin cities',
    'podcast studio Rawalpindi Islamabad'
  ],
  authors: [{ name: 'Triadic Media' }],
  creator: 'Triadic Media',
  publisher: 'Triadic Media',
  robots: 'index, follow',
      openGraph: {
      title: 'Best Podcast Studio in Islamabad - Blue Area | Triadic Media',
      description: 'Professional podcast production studio in Islamabad Blue Area, near Centaurus Mall. State-of-the-art equipment, expert audio engineers, serving F-7, F-8, and twin cities. Book your session today!',
      url: 'https://triadicmedia.com/podcast',
      siteName: 'Triadic Media',
      images: [
        {
          url: 'https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png',
          width: 1200,
          height: 630,
          alt: 'Professional Podcast Studio in Islamabad Blue Area - Best Audio Recording Studio',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Podcast Studio in Islamabad - Blue Area | Triadic Media',
    description: 'Professional podcast production studio in Islamabad Blue Area, near Centaurus Mall. Expert audio engineers, 24-bit recording, serving F-7, F-8, and twin cities.',
    images: ['https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png'],
    creator: '@triadicmedia',
    site: '@triadicmedia',
  },
  alternates: {
    canonical: 'https://triadicmedia.com/podcast',
  },
  other: {
    'geo.region': 'PK-ISB',
    'geo.placename': 'Islamabad',
    'geo.position': '33.7000;73.0000',
    'ICBM': '33.7000,73.0000',
    'DC.title': 'Best Podcast Studio in Islamabad',
    'DC.description': 'Professional podcast production studio in Islamabad with state-of-the-art equipment and expert audio engineers.',
    'DC.subject': 'podcast studio, podcast production, audio recording, Islamabad',
    'DC.creator': 'Triadic Media',
    'DC.publisher': 'Triadic Media',
    'DC.contributor': 'Triadic Media',
    'DC.date': '2024',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://triadicmedia.com/podcast',
    'DC.language': 'en',
    'DC.coverage': 'Islamabad, Pakistan',
    'DC.rights': 'Copyright Triadic Media 2024',
  },
}

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
