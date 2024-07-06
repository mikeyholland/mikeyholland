'use client';

import React, { useContext } from 'react';
import clsx from 'clsx';
import { BgContext } from 'src/app/context/bgContext';
import { TextContext } from 'src/app/context/textContext';

interface LookupOptions {
  [others: string]: any;
}

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const { bgColor } = useContext(BgContext);
  const { textColor } = useContext(TextContext);

  const lookup: LookupOptions = {
    Black: 'text-eerieBlack',
    White: 'text-white',
  };

  return (
    <div
      className={clsx(
        `transition ease-in-out duration-700 ${textColor && lookup[textColor]}`,
      )}
      style={{ backgroundColor: bgColor && bgColor }}
    >
      {children}
    </div>
  );
}
