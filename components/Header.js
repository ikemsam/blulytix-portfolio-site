"use client";

import Image from "next/image";
import { useTheme } from './ThemeProvider';
import { useState, useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, useRouter, usePathname } from '../navigation'; // Using our i18n-aware navigation

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱' },
];

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [isLangMenuOpen, setLangMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const langMenuRef = useRef(null);

    const t = useTranslations('Header');
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const currentLogoSrc = theme === 'dark' ? '/images/logos/blulytix-logo-light.svg' : '/images/logos/blulytix-logo-dark.svg';

    const handleLanguageChange = (newLocale) => {
        router.replace(pathname, {locale: newLocale});
        setLangMenuOpen(false);
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 backdrop-blur-md
                           ${theme === 'dark' ? 'bg-[#0f0f0f]/90 text-[#f7f9f9]' : 'bg-[#f7f9f9]/90 text-[#0f0f0f]'}  
                           border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
            
            <div className="flex items-center gap-8">
                <Link href="/" onClick={closeMobileMenu}>
                    <Image
                        src={currentLogoSrc}
                        alt="Blulytix AI Logo"
                        width={150}
                        height={60}
                        priority
                        className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x60/0f0f0f/f7f9f9?text=Blulytix'; }}
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="hover:text-[#2A8CFC] transition-colors duration-200 text-lg font-medium">{t('home')}</Link>
                    <Link href="/projects" className="hover:text-[#2A8CFC] transition-colors duration-200 text-lg font-medium">{t('projects')}</Link>
                    <Link href="/resume" className="hover:text-[#2A8CFC] transition-colors duration-200 text-lg font-medium">{t('resume')}</Link>
                    <Link href="/certifications" className="hover:text-[#2A8CFC] transition-colors duration-200 text-lg font-medium">{t('certifications')}</Link>
                    <Link href="/contact" className="hover:text-[#2A8CFC] transition-colors duration-200 text-lg font-medium">{t('contact')}</Link>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative" ref={langMenuRef}>
                    <button 
                        onClick={() => setLangMenuOpen(!isLangMenuOpen)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border transition-colors duration-200
                                   ${theme === 'dark' ? 'bg-[#1a1a1a] border-gray-700 text-[#f7f9f9] hover:border-[#2A8CFC]' : 'bg-white border-gray-300 text-[#0f0f0f] hover:border-[#2A8CFC]'}`}
                    >
                        <span>{currentLanguage.flag}</span>
                        <span>{currentLanguage.code.toUpperCase()}</span>
                        <svg className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {isLangMenuOpen && (
                        <div className={`absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50
                                       ${theme === 'dark' ? 'bg-[#1e1e1e] border border-gray-700' : 'bg-white border border-gray-200'}`}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`w-full text-left flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-200
                                               ${locale === lang.code ? 'font-bold text-[#2A8CFC]' : ''}
                                               ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                >
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                    <span className="ml-auto opacity-70">{lang.code.toUpperCase()}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
                
                <button className="md:hidden ml-2 p-2" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                </button>
            </div>
             {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-lg" onClick={closeMobileMenu}>
                     <nav className="flex flex-col items-center gap-6 py-6">
                        <Link href="/" className="hover:text-[#2A8CFC] transition-colors duration-200 text-xl font-medium">{t('home')}</Link>
                        <Link href="/projects" className="hover:text-[#2A8CFC] transition-colors duration-200 text-xl font-medium">{t('projects')}</Link>
                        <Link href="/resume" className="hover:text-[#2A8CFC] transition-colors duration-200 text-xl font-medium">{t('resume')}</Link>
                        <Link href="/certifications" className="hover:text-[#2A8CFC] transition-colors duration-200 text-xl font-medium">{t('certifications')}</Link>
                        <Link href="/contact" className="hover:text-[#2A8CFC] transition-colors duration-200 text-xl font-medium">{t('contact')}</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
