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
          {
            aboutText.firstMiddle.map((text, index) => <p key={ "first_middle" + index}>{ text }</p>)
          }
          {
            aboutText.secondMiddle.map((text, index) => <p key={ "second_middle" + index}>{ text }</p>)
          }
          <p>{ aboutText.conclusion }
            <Link href="https://github.com/AllexThiagoSR/personal-site">link</Link>.
          </p>
          <p>{ aboutText.finalPhrase }</p>
        </section>
      </main>
    </>
  );
}

export default About;
