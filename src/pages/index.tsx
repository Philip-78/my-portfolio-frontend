import React from 'react';
import About from '@/src/components/About';
import Skills from '@/src/components/Skills';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <section id="comic">
          <h3>Comic of the day</h3>
          <Link href="/comic">Read the comic</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
