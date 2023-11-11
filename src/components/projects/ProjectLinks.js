import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import externalLinkIcon from '../../images/externalLinkIcon.svg';
import gitHubIcon from '../../images/githubIcon.svg';

function ProjectLinks({ url, gitHubUrl }) {
  return (
    <ul className="project-links">
      <li>
        {
          url && (
            <Link href={ url } target="_blank">
              <Image alt="Deploy" src={ externalLinkIcon.src } width={ 20 } height={ 20 }/>
            </Link>
          )
        }
      </li>
      <li>
        <Link href={ gitHubUrl } target="_blank">
          <Image alt="GitHub Repository" className="external-link" src={ gitHubIcon.src } width={ 20 } height={ 20 }/>
        </Link>
      </li>
    </ul>
  );
}

ProjectLinks.propTypes = {
  url: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string.isRequired,
};

export default ProjectLinks;
