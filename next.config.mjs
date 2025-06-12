    import withNextIntl from 'next-intl/plugin';
    
    const withNextIntlConfig = withNextIntl(
      './i18n.js'
    );
    
    /** @type {import('next').NextConfig} */
    const nextConfig = {};
    
    export default withNextIntlConfig(nextConfig);
    