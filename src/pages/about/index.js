import Head from 'next/head';
import React from 'react';
import aboutText from '@/helpers/aboutText';
import Link from 'next/link';

function About() {
  return (
    <>
      <Head>
        <title>Sobre mim</title>
      </Head>
      <main>
        <h2 className="page-title">Sobre mim</h2>
        <section className="about-section">
          <p>{ aboutText.introduction }</p>
          <p>{ aboutText.firstMiddle }</p>
          <p>{ aboutText.secondMiddle }</p>
          <p>{ aboutText.conclusion }
            <Link href="https://github.com/AllexThiagoSR/personal-site">link</Link>.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
