import ProjectsList from '@/components/projects/ProjectsList';
import Head from 'next/head';
import React from 'react';

export async function getStaticProps() {
  const deployments = await (await fetch('http://localhost:3000/api/projects')).json();
  return {
    props: {
      deployments,
    },
    revalidate: 10,
  }
}

function Projects({ deployments }) {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <main>
        <h2 className="page-title">Projetos</h2>
        <ProjectsList deployments={ deployments }/>
      </main>
    </>
  );
}

export default Projects;
