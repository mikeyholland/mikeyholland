'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        orientation: 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  );
}
