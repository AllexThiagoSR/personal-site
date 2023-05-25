import formatRepoName from '@/helpers/formatRepoName';
import React from 'react';
import PropTypes from 'prop-types';
import ProjectLinks from './ProjectLinks';
import LanguagesList from './LanguagesList';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-title">
        <h3>{ formatRepoName(project.name) }</h3>
        <ProjectLinks url={ project.url } gitHubUrl={ project.githubUrl } />
      </div>
      <div className="project-infos">
        <p className="description">{ project.description }</p>
        <LanguagesList languages={ project.languages }/>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    githubUrl: PropTypes.string,
    languages: PropTypes.objectOf(PropTypes.number),
    name: PropTypes.string,
    url: PropTypes.string,
  })
};

export default ProjectCard;