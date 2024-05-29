'use client';

import React from 'react';

import HorizontalPanes from './HorizontalPanes';

function Projects() {
  return (
    <>
      <h3>Projects</h3>
      <div className="relative flex items-center bg-eerieBlack text-honeydew">
        <div className="flex justify-center items-center">
          <HorizontalPanes>
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
          </HorizontalPanes>
        </div>
      </div>
      <div className="relative flex items-center bg-burntUmber text-honeydew">
        <div className="flex">
          <HorizontalPanes>
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
            <img
              src="https://placehold.co/400x400/EEE/31343C"
              width="400"
              height="400"
              alt="Placehold"
              className="mx-12"
            />
          </HorizontalPanes>
        </div>
      </div>
      <article className="bg-persianGreen flex items-center justify-center h-screen text-white">
        something here
      </article>
      <article className="bg-paynesGray flex items-center justify-center h-screen text-white">
        something here
      </article>
      <article className="bg-burntUmber flex items-center justify-center h-screen text-white">
        something here
      </article>
      <article className="bg-eerieBlack flex items-center justify-center h-screen text-white">
        something here
      </article>
    </>
  );
}

export default Projects;
