import formatRepoName from '@/helpers/formatRepoName';
import Link from 'next/link';
import React from 'react';
// import PropTypes from 'prop-types';

ProjectCard.propTypes = {
  
};

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className="project-card">
      <span>{ `Project Name: ${formatRepoName(project.name)}` }</span>
      <p>{ project.description }</p>
      <Link href={ project.url } target="_blank">
        Deploy
      </Link>
      <Link href={ project.github_url } target="_blank">
        GitHub Repo
      </Link>
    </div>
  );
}

export default ProjectCard;