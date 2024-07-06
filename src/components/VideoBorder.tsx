'use client';

import React, { useContext } from 'react';
import clsx from 'clsx';

import { TextContext } from 'src/app/context/textContext';

export default function VideoBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  const { textColor } = useContext(TextContext);
  return (
    <div
      className={clsx(
        'p-2 lg:p-4 rounded',
        textColor === 'Black' ? 'bg-eerieBlack' : 'bg-white',
      )}
    >
      <div className="relative bg-eerieBlack md:min-w-24 flex items-center">
        {children}
      </div>
    </div>
  );
}
