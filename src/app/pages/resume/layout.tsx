import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Kariem Gerges',
  description: 'Professional resume and experience of Kariem Gerges - Software Engineer & Product Designer with 5+ years of experience building enterprise solutions.',
  openGraph: {
    title: 'Resume | Kariem Gerges',
    description: 'Professional resume and experience of Kariem Gerges - Software Engineer & Product Designer.',
    type: 'profile',
  },
  alternates: {
    canonical: '/pages/resume',
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

