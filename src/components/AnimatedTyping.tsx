'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AnimatedTypingComponent = ({
  values,
  className,
}: {
  values: string[];
  className?: string;
}) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: values,
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [values]);

  return (
    <div className={className}>
      <span ref={el} />
    </div>
  );
};

export default AnimatedTypingComponent;
