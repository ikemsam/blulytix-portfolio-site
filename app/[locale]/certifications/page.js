"use client";

import { useTheme } from '../../../components/ThemeProvider';
import { useTranslations } from 'next-intl';

const certificationsData = [
  { title: 'AWS ML Engineer Associate Learning Path', issuer: 'AWS Training and Certification', date: 'Completed Oct 2024', credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/' },
  { title: 'Artificial Intelligence Governance Professional (AIGP)', issuer: 'Purpose and Means', date: 'Issued Feb 2025', credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/' },
  { title: 'Intro to AI Transformers Course', issuer: 'Codecademy', date: 'Issued Jan 2025', credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/' },
  { title: 'Data Analysis in Python', issuer: 'ALX Academy', date: 'Issued Feb 2024', credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/' },
  { title: 'Google Data Analytics Specialization', issuer: 'Coursera', date: 'Issued May 2022', credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/' },
];

export default function CertificationsPage() {
  const { theme } = useTheme();
  const t = useTranslations('CertificationsPage');

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#2A8CFC] to-[#FF6B6B] bg-clip-text text-transparent">
                {t('title')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl opacity-90">
                {t('subtitle')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index} 
                className="p-6 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/20 hover:-translate-y-1 flex flex-col text-left"
            >
                <h3 className="text-xl font-bold mb-2 flex-grow">{cert.title}</h3>
                <p className="text-md font-semibold mb-1 text-[#2A8CFC]">{cert.issuer}</p>
                <p className="text-sm opacity-75">{cert.date}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
