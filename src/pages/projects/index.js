import React from 'react';

export async function getStaticProps() {
  const { deployments } = await (await fetch('http://localhost:3000/api/projects')).json();
  console.log(deployments);
  return {
    props: {
      deployments,
    },
    revalidate: 10,
  }
}

function Projects({ deployments }) {
  console.log(deployments);
  return (
    <main>
      <h2 className="page-title">Projects</h2>
      <ul className="projects-list">
      {
        deployments.map((project, index) => (
          <li key={ index + 1 + 'º Project'}>{project.name}</li>
        ))
      }
      </ul>
    </main>
  );
}

export default Projects;
