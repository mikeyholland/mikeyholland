'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useRect } from '@studio-freight/hamo';
import { useLenis } from '@studio-freight/react-lenis';
import cn from 'clsx';
import gsap from 'gsap';
import { useWindowSize } from 'react-use';
import { clamp, mapRange } from '../lib/maths';

export default function HorizontalPanes({
  children,
}: {
  children: React.ReactNode;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 800px)');
  const [wrapperRectRef, wrapperRect] = useRect();
  const [elementRectRef, elementRect] = useRect();
  const { height: windowHeight } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useLenis(
    ({ actualScroll }) => {
      if (!elementRect?.width || !wrapperRect?.top || !elementRef.current)
        return;

      const start = wrapperRect.top - windowHeight;
      const end = wrapperRect.top + wrapperRect.height - windowHeight;

      let progress = mapRange(start, end, actualScroll, 0, 1);
      progress = clamp(0, progress, 1);

      const x = progress * (elementRef.current.scrollWidth - windowWidth);

      const cards = [...elementRef.current.children];

      gsap.to(cards, {
        x: -x,
        stagger: 0.011,
        ease: 'linear',
        duration: 0,
      });
    },
    [wrapperRect, elementRect],
  );

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(
        Math.min(window.innerWidth, document.documentElement.offsetWidth),
      );
    };

    window.addEventListener('resize', onResize, false);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);

  return (
    <div
      ref={wrapperRectRef}
      style={
        elementRect && isMobile === false
          ? { height: `${elementRef.current?.scrollWidth}px` }
          : {}
      }
    >
      <div className="sticky top-1/4 flex overflow-hidden">
        {isMobile === false ? (
          <div
            ref={(node) => {
              elementRef.current = node;
              elementRectRef(node);
            }}
            className={cn('flex', 'hide-on-mobile')}
          >
            {children}
          </div>
        ) : (
          <div className={cn('flex flex-column', 'hide-on-desktop')}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
