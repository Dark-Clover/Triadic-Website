export const LocalBusinessSchema = () => {
  return (
    <>
      {/* Local Business Schema for Islamabad */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Triadic Media Podcast Studio",
            "description": "Best podcast studio in Islamabad, centrally located in Blue Area near Centaurus Mall. Professional 24-bit audio recording with expert engineers.",
            "url": "https://triadicmedia.com/podcast",
            "telephone": "+971562997778",
            "email": "info@triadicmedia.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Blue Area",
              "addressLocality": "Islamabad",
              "addressRegion": "Islamabad Capital Territory",
              "postalCode": "44000",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.7000,
              "longitude": 73.0000
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "currenciesAccepted": "PKR, USD, AED",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "areaServed": ["Islamabad", "Rawalpindi", "Pakistan", "Blue Area", "F-7", "F-8", "F-6", "G-8", "G-9"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Podcast Production Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Podcast Recording",
                    "description": "Studio recording with 24-bit audio quality, professional microphones, and soundproofing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Audio Engineering & Mastering",
                    "description": "Expert audio editing, mixing, and mastering for broadcast-ready quality"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Strategy & Marketing",
                    "description": "Podcast content planning, distribution, and marketing strategies"
                  }
                }
              ]
            },
            "sameAs": [
              "https://facebook.com/triadicmedia",
              "https://twitter.com/triadicmedia",
              "https://instagram.com/triadicmedia"
            ],
            "image": "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png",
            "logo": "https://i.ibb.co/C3frKdzY/Gear-Podcast-Gear-1327244548.png"
          })
        }}
      />
    </>
  );
};
