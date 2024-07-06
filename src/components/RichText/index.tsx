import React from 'react';
import { PortableText, PortableTextBlock } from 'next-sanity';
import clsx from 'clsx';

import RichTextStyles from './rich-text.module.css';

export default function RichText({
  value,
  className,
}: {
  value: PortableTextBlock;
  className?: string;
}) {
  return (
    <div className={clsx(className, RichTextStyles.richText)}>
      <PortableText value={value} />
    </div>
  );
}
