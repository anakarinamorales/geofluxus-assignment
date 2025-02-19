import React from 'react';
import { Roboto } from 'next/font/google';

import { AntdRegistry } from '@ant-design/nextjs-registry';

// Since React 19 adjusted the export method of react-dom, antd cannot directly use the ReactDOM.render method.
// Therefore, you need to use a compatibility configuration to make antd work properly in React 19.
import '@ant-design/v5-patch-for-react-19';

// global style
import './globals.css';

const roboto = Roboto({
  preload: true,
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '400', '500', '700'],
});

export const metadata = {
  title: 'geoFluxus',
  description: 'Generic description for SEO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={roboto.variable}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
