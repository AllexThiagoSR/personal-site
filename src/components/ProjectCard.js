import formatRepoName from '@/helpers/formatRepoName';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import externalLinkIcon from '../images/externalLinkIcon.svg';
import gitHubIcon from '../images/githubIcon.svg';
import Image from 'next/image';

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className="project-card">
      <div className="project-title">
        <h3>{ formatRepoName(project.name) }</h3>
        <ul className="project-links">
          <li>
            <Link href={ project.url } target="_blank">
              <Image alt="Deploy" src={ externalLinkIcon.src } width={ 20 } height={ 20 }/>
            </Link>
          </li>
          <li>
            <Link href={ project.github_url } target="_blank">
              <Image alt="GitHub Repository" className="external-link" src={ gitHubIcon.src } width={ 20 } height={ 20 }/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="project-infos">
        <p>{ project.description }</p>
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