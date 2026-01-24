import { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from '@/app/components/ui/sonner';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kariemgerges.com'),
  title: {
    default: "Kariem Gerges | Software Engineer & Product Designer | Enterprise Solutions",
    template: "%s | Kariem Gerges"
  },
  description: "Software Engineer & Product Designer with 5+ years of experience building scalable enterprise solutions. Specializing in React, Next.js, TypeScript, Node.js, and cloud architecture. View portfolio of 50+ projects delivered.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Product Designer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Enterprise Solutions",
    "Web Development",
    "UI/UX Design",
    "Cloud Architecture",
    "MongoDB",
    "Portfolio",
    "Kariem Gerges"
  ],
  authors: [{ name: "Kariem Gerges" }],
  creator: "Kariem Gerges",
  publisher: "Kariem Gerges",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com",
    siteName: "Kariem Gerges Portfolio",
    title: "Kariem Gerges | Software Engineer & Product Designer",
    description: "Enterprise software solutions architect with 5+ years of experience. Specializing in React, Next.js, TypeScript, and scalable cloud architecture.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com"}/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Kariem Gerges - Software Engineer & Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kariem Gerges | Software Engineer & Product Designer",
    description: "Enterprise software solutions architect with 5+ years of experience. Specializing in React, Next.js, TypeScript, and scalable cloud architecture.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com"}/hero.jpg`],
    creator: "@kariemgerges",
    site: "@kariemgerges",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kariem Gerges",
    "jobTitle": "Software Engineer & Product Designer",
    "description": "Enterprise software solutions architect with 5+ years of experience specializing in React, Next.js, TypeScript, and scalable cloud architecture.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com",
    "email": "kariem.gerges@outlook.com",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com"}/hero.jpg`,
    "sameAs": [
      "https://github.com/kariemGerges",
      "https://www.linkedin.com/in/kariem-gerges-458294195/"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Cloud Architecture",
      "UI/UX Design",
      "Product Design"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Engineering"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  // Website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kariem Gerges Portfolio",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com",
    "description": "Software Engineer & Product Designer portfolio showcasing enterprise solutions and technical expertise.",
    "author": {
      "@type": "Person",
      "name": "Kariem Gerges"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com"}/pages/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Kariem Gerges" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <Header />
        {children}
        <Toaster />
        <Footer ownerName="Kariem Gerges" />
      </body>
    </html>
  );
}
