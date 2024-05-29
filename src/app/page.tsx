import Image from 'next/image';

import About from './components/About';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <About />
      <Projects />
    </>
  );
}
