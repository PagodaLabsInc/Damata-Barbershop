import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}
export function SEO({
  title = 'Damata Barbershop | Professional Barbers in Somerville, MA',
  description = 'Damata Barbershop offers professional haircuts, hot towel shaves, and beard trims in Somerville, MA. Kid-friendly barbershop with special chairs for children. Book your appointment today for classic cuts and modern styles by skilled barbers.',
  canonicalUrl = 'https://damatabarbers.com/',
  ogImage = "/fade.jpg"
}: SEOProps) {
  return <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="barbershop, haircut, Somerville, MA, beard trim, hot towel shave, men's grooming, fade, classic cut, kids haircut, family barbershop, barber, Massachusetts" />
      <meta name="author" content="Damata Barbershop" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Favicon */}
      <link rel="icon" href="/Damata_Circle.png" type="image/png" />
      <link rel="apple-touch-icon" href="/Damata_Circle.png" />
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Damata Barbershop" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BarberShop",
            "name": "Damata Barbershop",
            "image": "${ogImage}",
            "url": "${canonicalUrl}",
            "telephone": "(857) 991-3045",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "244 Broadway",
              "addressLocality": "Somerville",
              "addressRegion": "MA",
              "postalCode": "02145",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.3836,
              "longitude": -71.0843
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "00:00",
                "closes": "00:00"
              }
            ],
            "priceRange": "$$",
            "description": "Damata Barbershop offers professional haircuts, hot towel shaves, and beard trims in Somerville, MA. Kid-friendly barbershop with special chairs for children.",
            "sameAs": [
              "https://www.facebook.com/damatababershop",
              "https://www.instagram.com/damatababershop"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Barbershop Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Haircuts",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Classic Haircut",
                        "description": "Traditional haircut with clippers and scissors, includes a hot towel and neck shave."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Kid's Haircut",
                        "description": "Haircut for children under 12 years old, includes a lollipop."
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Shaves & Beard",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Hot Towel Shave",
                        "description": "Traditional straight razor shave with hot towels and premium shaving products."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Beard Trim",
                        "description": "Precise beard shaping and trimming to keep your facial hair looking its best."
                      }
                    }
                  ]
                }
              ]
            }
          }
        `}
      </script>
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "${canonicalUrl}"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "${canonicalUrl}#services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Gallery",
                "item": "${canonicalUrl}#gallery"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "${canonicalUrl}#contact"
              }
            ]
          }
        `}
      </script>
    </Helmet>;
}