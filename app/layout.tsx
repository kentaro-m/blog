import { Provider } from './Provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      url: '/favicon/safari-pinned-tab.svg',
    },
  ],
  manifest: '/favicon/site.webmanifest',
  themeColor: '#ffffff',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
