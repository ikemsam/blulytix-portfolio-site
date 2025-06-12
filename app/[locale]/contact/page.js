"use client";

import { useTheme } from '../../../components/ThemeProvider';
import { useTranslations } from 'next-intl';

// Updated contact links, TikTok has been removed.
const contactLinks = [
    {
        platform: "Email",
        handle: "ikemsamuel66@gmail.com",
        url: "mailto:ikemsamuel66@gmail.com",
        cta: "Send me an email",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        platform: "LinkedIn",
        handle: "/in/samuelikem",
        url: "https://www.linkedin.com/in/samuelikem",
        cta: "Connect professionally",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        platform: "GitHub",
        handle: "/ikemsam",
        url: "https://github.com/ikemsam",
        cta: "View my code",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        platform: "Instagram",
        handle: "@blulytix",
        url: "https://www.instagram.com/blulytix?igsh=ZjZlbHpuMmtsdWNp&utm_source=qr",
        cta: "Follow my journey",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.011 7.053.069 2.593.284 0 2.593 0 7.053c-.058 1.28-.069 1.687-.069 4.947s.011 3.667.069 4.947c.284 4.46 2.593 6.77 7.053 6.988 1.28.058 1.687.069 4.947.069s3.667-.011 4.947-.069c4.46-.218 6.77-2.528 6.988-7.053.058-1.28.069-1.687.069-4.947s-.011-3.667-.069-4.947C21.407 2.593 19.098.284 14.638.069 13.358.011 12.95 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
            </svg>
        )
    },
];

export default function ContactPage() {
  const { theme } = useTheme();
  const t = useTranslations('ContactPage');

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-[#0f0f0f] text-[#f7f9f9]' : 'bg-[#f7f9f9] text-[#0f0f0f]'}`}>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#2A8CFC] to-[#FF6B6B] bg-clip-text text-transparent">
                {t('title')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl opacity-80">
                {t('subtitle')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactLinks.map((link) => (
                <a
                    href={link.url}
                    key={link.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme === 'dark' ? 'bg-[#1a1a1a] hover:bg-gray-800' : 'bg-white border hover:bg-gray-50'} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center`}
                >
                    <div className={`mb-4 ${theme === 'dark' ? 'text-[#2A8CFC]' : 'text-[#FF6B6B]'}`}>
                        {link.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{link.platform}</h2>
                    <p className="text-base opacity-70 mb-4">{link.handle}</p>
                    <p className="text-lg font-semibold text-[#2A8CFC]">{link.cta}</p>
                </a>
            ))}
        </div>

      </main>
    </div>
  );
}
