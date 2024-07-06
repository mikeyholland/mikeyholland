'use client';

import React, { useEffect, useRef } from 'react';
import { useAnimationControls, motion, useInView } from 'framer-motion';

export default function AnimatedTitle({
  headingElement,
  children,
  className,
}: {
  headingElement: React.ElementType;
  children: string;
  className: string;
}) {
  const Heading = headingElement;
  const ref = useRef<HTMLElement>(null);
  const ctrls = useAnimationControls();

  const isInView = useInView(ref, {
    once: true,
    amount: 'all',
  });

  useEffect(() => {
    if (isInView) {
      ctrls.start('visible');
    }
    if (!isInView) {
      ctrls.start('hidden');
    }
  }, [ctrls, isInView]);

  const wrapAnimation = {
    hidden: {},
    visible: {},
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: '50px',
    },
    visible: {
      opacity: 1,
      y: '0',
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <Heading
      aria-label={children}
      role="heading"
      ref={ref}
      className={className}
    >
      <motion.span
        initial="hidden"
        animate={ctrls}
        aria-hidden="true"
        transition={{
          delayChildren: 0.5,
          staggerChildren: 0.05,
        }}
        variants={wrapAnimation}
      >
        {children.split(' ').map((word) => {
          return (
            <motion.span
              className="inline-block mr-2 nowrap"
              aria-hidden="true"
              key={word}
              variants={wordAnimation}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Heading>
  );
}
