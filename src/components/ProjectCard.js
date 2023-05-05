import React from 'react';
// import PropTypes from 'prop-types';

ProjectCard.propTypes = {
  
};

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      { project.name }
    </div>
  );
}

export default ProjectCard;