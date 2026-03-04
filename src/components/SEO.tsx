import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "Sri Kodanda Ramaswamy Devalayam - Tiruvuru | శ్రీ కోదండ రామస్వామి దేవాలయం",
  description = "Sri Kodanda Ramaswamy Devalayam in Tiruvuru is a sacred Hindu temple dedicated to Lord Rama. Experience divine darshan, daily poojas, special events, and spiritual blessings. Visit us for Rama Navami, Hanuman Jayanti, and other religious ceremonies.",
  keywords = "Kodanda Ramaswamy Temple, Tiruvuru Temple, Lord Rama Temple, Hindu Temple Tiruvuru, Sri Rama Mandir, Kodanda Rama Temple, Krishna District Temple, Andhra Pradesh Temple, Rama Darshan, Temple Pooja Timings, Hanuman Temple, Religious Events Tiruvuru, Temple Donations, Spiritual Center, Hindu Pilgrimage, కోదండ రామస్వామి దేవాలయం, తిరువూరు దేవాలయం",
  image = "/temple-hero.jpg",
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = "website",
  author = "Sri Kodanda Ramaswamy Devalayam Trust",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonicalUrl,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://kodandaramaswamy-tiruvuru.org";
  const fullUrl = url || siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonical = canonicalUrl || fullUrl;

  // Default structured data for temple
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HinduTemple",
        "@id": `${siteUrl}/#temple`,
        "name": "Sri Kodanda Ramaswamy Devalayam",
        "alternateName": "శ్రీ కోదండ రామస్వామి దేవాలయం",
        "url": siteUrl,
        "logo": `${siteUrl}/favicon.ico`,
        "image": fullImageUrl,
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Temple Street",
          "addressLocality": "Tiruvuru",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "521235",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "16.7833",
          "longitude": "80.8167"
        },
        "telephone": "+91-XXXXXXXXXX",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "06:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "Free Entry",
        "sameAs": [
          "https://www.facebook.com/kodandaramaswamy",
          "https://www.instagram.com/kodandaramaswamy",
          "https://twitter.com/kodandaramaswamy"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Sri Kodanda Ramaswamy Devalayam",
        "description": description,
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        "inLanguage": ["en-IN", "te-IN"]
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Sri Kodanda Ramaswamy Devalayam Trust",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/favicon.ico`,
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Telugu", "Hindi"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          }
        ]
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />}
      
      {/* Language and Region */}
      <meta name="language" content="English, Telugu, Hindi" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Tiruvuru" />
      <meta name="geo.position" content="16.7833;80.8167" />
      <meta name="ICBM" content="16.7833, 80.8167" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Sri Kodanda Ramaswamy Devalayam" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="te_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@kodandaramaswamy" />
      <meta name="twitter:site" content="@kodandaramaswamy" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#FF6B35" />
      <meta name="msapplication-TileColor" content="#FF6B35" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Kodanda Ramaswamy Temple" />
      <meta name="application-name" content="Kodanda Ramaswamy Temple" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
