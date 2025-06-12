"use client";

import { useTheme } from '../../components/ThemeProvider';
import { useTranslations } from 'next-intl';
import { Link } from '../../navigation';

export default function Home() {
  const { theme } = useTheme();
  const t = useTranslations('HomePage');
  const tHeader = useTranslations('Header');
  const tResume = useTranslations('ResumePage');

  const certificationsData = [
    {
      title: 'AWS ML Engineer Associate Learning Path',
      issuer: 'AWS Training and Certification',
      date: 'Completed Oct 2024',
      credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/' 
    },
    {
      title: 'Artificial Intelligence Governance Professional (AIGP)',
      issuer: 'Purpose and Means',
      date: 'Issued Feb 2025',
      credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/'
    },
    {
      title: 'Intro to AI Transformers Course',
      issuer: 'Codecademy',
      date: 'Issued Jan 2025',
      credentialUrl: 'https://www.linkedin.com/in/samuelikem/details/certifications/'
    },
  ];

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Hero Section */}
            <section className="text-center py-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2A8CFC] to-[#FF6B6B] bg-clip-text text-transparent">
                Samuel Ikem
              </h1>
              <h2 className="text-3xl md:text-4xl mb-4 font-semibold">{t('title')}</h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
                {t('subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/projects">
                    <button className="bg-[#2A8CFC] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        {t('projectsButton')}
                    </button>
                </Link>
                <a href="/Samuel_Ikem_Resume.pdf" download="Samuel_Ikem_Resume.pdf" rel="noopener noreferrer" target="_blank">
                    <button className={`border-2 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105
                                      ${theme === 'dark' ? 'border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white' : 'border-[#2A8CFC] text-[#2A8CFC] hover:bg-[#2A8CFC] hover:text-white'}`}>
                      {t('resumeButton')}
                    </button>
                </a>
              </div>
            </section>

            {/* About Me Section - RESTORED */}
            <section className="max-w-5xl mx-auto w-full">
                 <div className="p-8 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                    <h2 className="text-3xl font-bold border-b-2 border-[#2A8CFC] pb-2 mb-4">{tResume('summaryTitle')}</h2>
                    <p className="text-lg leading-relaxed">{tResume('summaryContent')}</p>
                </div>
            </section>

            {/* Certifications Preview Section */}
            <section className="max-w-5xl mx-auto py-10 text-center w-full">
                <div className="p-8 rounded-xl bg-gray-400/10 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                    <h2 className="text-4xl font-semibold mb-12">{tHeader('certifications')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {certificationsData.map((cert, index) => (
                            <div key={index} className="bg-gray-500/10 dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col text-left">
                                <h3 className="text-lg font-bold mb-2 flex-grow">{cert.title}</h3>
                                <p className="text-md font-semibold mb-1 text-[#2A8CFC]">{cert.issuer}</p>
                                <p className="text-sm opacity-75 mb-4">{cert.date}</p>
                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={`mt-auto text-center font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'bg-[#2A8CFC] text-white hover:bg-blue-700' : 'bg-[#FF6B6B] text-white hover:bg-red-700'}`}>
                                    Show Credential
                                </a>
                            </div>
                        ))}
                    </div>
                    <Link href="/certifications">
                        <button className="bg-[#FF6B6B] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                            View All {tHeader('certifications')}
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    </div>
  );
}
