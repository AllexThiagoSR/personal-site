import React from 'react';

export async function getStaticProps() {
  const { deployments } = await (await fetch('http://localhost:3000/api/projects')).json();
  console.log(deployments);
  return {
    props: {
      deployments,
    },
  }
}

function Projects({ deployments }) {
  console.log(deployments);
  return (
    <div>
      Projects
      {
        deployments.map((project) => (
          <p>{project.name}</p>
        ))
      }
    </div>
  );
}

export default Projects;
