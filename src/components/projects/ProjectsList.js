import React from 'react';
import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

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
    </ul>
  );
}

ProjectsList.propTypes = {
  deployments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      githubUrl: PropTypes.string,
      description: PropTypes.string,
      languages: PropTypes.objectOf(PropTypes.number),
    })
  ).isRequired,
};

export default ProjectsList;