import React from 'react';
import Image from 'next/image';

function Project() {
  return (
    <div className="h-screen">
      <div className="flex">
        <div className="">
          <h4>Mindful Chef</h4>
          <p>something</p>
        </div>
        <div className="flex gap-12">
          <Image
            src="https://placehold.co/600x400/EEE/31343C"
            width="600"
            height="400"
            alt="Placehold"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
