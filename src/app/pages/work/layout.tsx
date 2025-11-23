import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio Projects | Complete Project Showcase",
  description: "Explore a comprehensive collection of enterprise solutions including web applications, mobile platforms, and innovative digital experiences. Projects built with React, Next.js, Node.js, and modern technologies.",
  openGraph: {
    title: "Portfolio Projects | Kariem Gerges",
    description: "Complete project showcase featuring enterprise solutions, web applications, and mobile platforms.",
    type: "website",
  },
  keywords: [
    "Portfolio",
    "Projects",
    "Web Applications",
    "Mobile Apps",
    "React Projects",
    "Next.js Projects",
    "Enterprise Solutions",
    "Software Projects"
  ],
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

