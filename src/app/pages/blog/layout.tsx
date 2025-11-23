import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Software Engineering Insights",
  description: "Articles on software engineering, design, architecture, and building products that make a difference. Learn about React, Next.js, TypeScript, and modern development practices.",
  openGraph: {
    title: "Blog | Kariem Gerges",
    description: "Software engineering insights, best practices, and technical articles.",
    type: "website",
  },
  keywords: [
    "Software Engineering Blog",
    "React Blog",
    "Next.js Blog",
    "TypeScript Articles",
    "Web Development Blog",
    "Programming Articles",
    "Tech Blog"
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

