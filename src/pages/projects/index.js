import ProjectsList from '@/components/ProjectsList';
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
    <main>
      <h2 className="page-title">Projects</h2>
      <ProjectsList deployments={ deployments }/>
    </main>
  );
}

export default Projects;
