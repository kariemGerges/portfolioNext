import { Metadata } from 'next';
import { Suspense } from 'react';

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
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      {children}
    </Suspense>
  );
}

