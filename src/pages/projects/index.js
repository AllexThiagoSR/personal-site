import ProjectsList from '@/components/projects/ProjectsList';
import makeHeaderWithAuth from '@/helpers/makeHeaderWithAuth';
import uniqueProject from '@/helpers/uniqueObject';
import Head from 'next/head';
import React from 'react';

export async function getStaticProps() {
  const token = process.env.ACCESS_API_TOKEN;
  const githubToken = process.env.GITHUB_API_TOKEN
  const GITHUB_BASE_URL = 'https://api.github.com/repos/AllexThiagoSR/';
  const data = await fetch('https://api.vercel.com/v6/deployments', makeHeaderWithAuth(token));
  const { deployments } = await data.json();
  const finalList = deployments.map(async({ name }) => {
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
      deployments: uniqueProject(await Promise.all(finalList)),
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
