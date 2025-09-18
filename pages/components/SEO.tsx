// components/SEO.tsx
import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function SEO({
  title = "Λαογραφικό Μουσείο Καλλιθέας",
  description = "Επίσημη ιστοσελίδα του Λαογραφικού Μουσείου Καλλιθέας. Πληροφορίες, εκθέσεις και εκδηλώσεις.",
  image = "https://kemelak.gr/museum-preview.jpg",
  url = "https://kemelak.gr",
}: SEOProps) {
  return (
    <Head>
      {/* Βασικά SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Μουσείο Καλλιθέας, Λαογραφικό Μουσείο, Παράδοση Καλλιθέα, Πολιτιστική Κληρονομιά Καλλιθέας"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="el_GR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Museum",
            name: "Λαογραφικό Μουσείο Καλλιθέας",
            image: image,
            url: url,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Καλλιθέα",
              addressLocality: "Καλλιθέα",
              addressRegion: "Αττική",
              postalCode: "17676",
              addressCountry: "GR",
            },
          }),
        }}
      />
    </Head>
  );
}
