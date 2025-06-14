    import {getRequestConfig} from 'next-intl/server';
    import {notFound} from 'next/navigation';

    const locales = ['en', 'de', 'pl'];
    
    export default getRequestConfig(async ({locale}) => {
      if (!locales.includes(locale)) notFound();
     
      return {
        messages: (await import(`./messages/${locale}.json`)).default
      };
    });
    