import React from 'react';
import ProjectCard from './ProjectCard';
// import PropTypes from 'prop-types';

function ProjectsList({ deployments }) {
  return (
    <ul className="projects-list">
      {
        deployments.map((project, index) => (
          <li key={ index + 1 + 'º Project'} className="project-card-wrapper">
            <ProjectCard project={ project } />
          </li>
        ))
      }
      <li>
        <ProjectCard project={ deployments[0] } />
      </li>
    </ul>
  );
}


ProjectsList.propTypes = {
  
};

export default ProjectsList;