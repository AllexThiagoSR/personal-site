import formatRepoName from '@/helpers/formatRepoName';
import React from 'react';
import PropTypes from 'prop-types';
import ProjectLinks from './ProjectLinks';
import LanguagesList from './LanguagesList';

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className="project-card">
      <div className="project-title">
        <h3>{ formatRepoName(project.name) }</h3>
        <ProjectLinks url={ project.url } gitHubUrl={ project.github_url } />
      </div>
      <div className="project-infos">
        <p className="description">{ project.description }</p>
        <LanguagesList languages={ project.languages }/>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  github_url: PropTypes.string.isRequired,
  languages: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;