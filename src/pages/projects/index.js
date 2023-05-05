import React from 'react';

function Projects() {
  const fetchPow = async () => {
    console.log(await(await fetch('http://localhost:3000/api/projects')).json());
  };
  
  fetchPow();
  return (
    <div>
      Projects
    </div>
  );
}

export default Projects;
