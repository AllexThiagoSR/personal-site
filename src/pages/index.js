import SkillsList from '@/components/home/SkillsList';
import Head from 'next/head';
import Image from 'next/image';
import me from  'src/images/me.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className="short-description">
          <div className="text-container">
            <p className="short-description-text">
              Opa! Meu nome é Allex Thiago.
              Sou um Desenvolvedor Web Fullstack Junior
              apaixonado em resolver problemas no mundo da tecnologia,
              e estou em busca de oportunidades de me desenvolver e me desafiar.
            </p>
            <SkillsList /> 
          </div>
          <div className='image-container'>
            <Image
              src={ me }
              alt="Author"
              width={ '100%' }
              height={ '100%' }
              className='me'
            />
          </div>
        </section>
      </main>
    </>
  )
}
