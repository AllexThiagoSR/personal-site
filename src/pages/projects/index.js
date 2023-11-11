import ProjectsList from '@/components/projects/ProjectsList';
import makeHeaderWithAuth from '@/helpers/makeHeaderWithAuth';
import uniqueProject from '@/helpers/uniqueObject';
import Head from 'next/head';
import React from 'react';

export async function getStaticProps() {
  const githubToken = process.env.GITHUB_API_TOKEN;
  const GITHUB_BASE_URL = 'https://api.github.com/repos/AllexThiagoSR/';
  const projects = [
    'personal-site',
    'preview-tunes',
    'event-house-manager',
    'biblioteca-ze-nacional',
    'wallet-manager',
    'trunfo-backend',
    'trunfo-frontend',
    'manage_app'
  ];
  const finalList = projects.map(async (name) => {
    const {
      html_url,
      description,
      languages_url,
      homepage,
    } = await( await fetch(GITHUB_BASE_URL + name, makeHeaderWithAuth(githubToken))).json();
    const languages = await (await fetch(languages_url, makeHeaderWithAuth(githubToken))).json();
    return { name, url: homepage, githubUrl: html_url, description, languages };
  });
  return {
    props: {
      deployments: await Promise.all(finalList),
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
