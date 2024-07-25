import React from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import SmoothScrolling from '../../components/SmoothScrolling';

export const metadata: Metadata = {
  title: 'Mikey Holland',
  description: 'London based Frontend Developer',
};

export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GoogleAnalytics gaId="G-MXGVPJYR2K" />
      <SmoothScrolling>{children}</SmoothScrolling>;
    </>
  );
}
