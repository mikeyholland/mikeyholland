import React from 'react';

function About() {
  return (
    <section className="w-full h-screen p-4 text-eerieBlack bg-honeydew py-24">
      <div className="flex items-baseline gap-4">
        <h1 className="font-bold text-7xl">Mikey Holland</h1>
        <h2 className="text-burntUmber italic text-4xl">Frontend Developer</h2>
      </div>
      <div className="flex gap-12 my-12">
        <div className="max-w-prose">
          <h3 className="font-bold">About</h3>
          <p>
            Suspendisse lectus nibh, porttitor laoreet accumsan id, fringilla
            sed orci. Integer feugiat nibh et risus imperdiet, vitae interdum
            magna placerat. Maecenas hendrerit quis diam a malesuada. Praesent
            fermentum ante ac dolor volutpat ullamcorper. Duis quis condimentum
            libero. Cras id eros et nisi rutrum dignissim in vitae arcu. Mauris
            gravida sapien vitae ligula faucibus, tincidunt convallis sem
            laoreet. Phasellus fermentum, justo quis aliquet hendrerit, nibh
            nisi pretium purus, eu sodales leo ex at elit. Mauris pulvinar,
            velit cursus faucibus faucibus, metus tortor dictum ante, a
            ultricies libero massa id tortor.
          </p>
        </div>
        <div className="max-w-prose">
          <h3 className="font-bold">How I work</h3>
          <h4>Startup/Agency/In house</h4>
          <h4>Freelance</h4>
          <h4>Collaboration</h4>
        </div>
      </div>
      <div>
        <div className="max-w-prose">
          <h3 className="font-bold">Skills / Key Technologies</h3>
          <p>
            Next.js (pages or app router), Remix.js, React, Redux, Typescript,
            Tailwind, Emotion/Styled Components
          </p>
          <p>Shopify/Hydrogen, Dato CMS, Sanity</p>
        </div>
      </div>
    </section>
  );
}

export default About;
