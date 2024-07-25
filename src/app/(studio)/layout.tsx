import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Mikey Holland - Sanity Studio',
  description: 'Admin area for Mikeyholland.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
