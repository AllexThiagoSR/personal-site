import React from 'react';
import ProjectCard from './ProjectCard';
// import PropTypes from 'prop-types';

function ProjectsList({ deployments }) {
  return (
    <ul className="projects-list">
      {
        deployments.map((project, index) => (
          <li key={ index + 1 + 'º Project'}>
            <ProjectCard project={ project } />
          </li>
        ))
      }
    </ul>
  );
}


ProjectsList.propTypes = {
  
};

export default ProjectsList;