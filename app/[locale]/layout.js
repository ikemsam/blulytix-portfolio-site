    import '../globals.css';
    import { Inter } from 'next/font/google';
    import {NextIntlClientProvider, useMessages} from 'next-intl';
    import { ThemeProvider } from '../../components/ThemeProvider';
    import Header from '../../components/Header';
    import CodeBackground from '../../components/CodeBackground';

    const inter = Inter({ subsets: ['latin'] });

    export const metadata = {
      title: 'Samuel Ikem | Data Scientist & AI/ML Engineer',
      description: 'Portfolio for Samuel Ikem, AI/ML Engineer.',
    };

    export default function LocaleLayout({children, params: {locale}}) {
      const messages = useMessages();
     
      return (
        <html lang={locale} suppressHydrationWarning>
          <body className={`${inter.className} bg-transparent`}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ThemeProvider>
                <CodeBackground />
                <div className="relative z-10">
                    <Header />
                    <main className="pt-20"> 
                      {children}
                    </main>
                </div>
              </ThemeProvider>
            </NextIntlClientProvider>
          </body>
        </html>
      );
    }
    