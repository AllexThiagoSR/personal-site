import SkillsList from '@/components/SkillsList';
import Head from 'next/head';
import Image from 'next/image';
import placeholderImage from 'src/images/placeholderImage.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Call me Allex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="short-description">
          <p>
            Opa! Meu nome é Allex Thiago.
            Sou um Desenvolvedor Web Fullstack
            apaixonado em resolver problemas no mundo da tecnologia.
          </p>
          <Image
            src={ placeholderImage }
            alt="Author"
            width={ 292 }
            height={ 200 }
          />
        </section>
        <SkillsList />
      </main>
    </>
  )
}
