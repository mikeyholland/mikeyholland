import React from 'react';

export default function ArrowRight({ className }: { className: string }) {
  return (
    <svg
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m14.523 18.787 6.255-6.26a.747.747 0 0 0 0-1.06l-6.255-6.258a.75.75 0 0 0-1.056.004.746.746 0 0 0-.004 1.056l4.978 4.978H3.749a.75.75 0 0 0 0 1.5h14.692l-4.979 4.979a.746.746 0 0 0 .006 1.054.752.752 0 0 0 .533.222c.19 0 .378-.072.522-.215z"
        fillRule="nonzero"
      />
    </svg>
  );
}
