'use client';

import React, { useEffect } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0);
    }
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        orientation: 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  );
}
