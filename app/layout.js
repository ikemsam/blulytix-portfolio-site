// This root layout applies to special Next.js pages like not-found.js
// It does NOT apply to the pages in your [locale] directory.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
