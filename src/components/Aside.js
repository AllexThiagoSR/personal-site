import React from 'react';
import Image from 'next/image';
import gitHubIcon from '../images/githubIcon.svg';
import linkedinLogo from '../images/linkedinLogo.svg';
import gmailLogo from '../images/gmailLogo.svg';


function Aside() {
  return (
    <aside className="aside-section">
      <ul className="contacts-list">
        <li>
          <Image
            alt="GitHub"
            src={ linkedinLogo }
            width={ 30 }
            height={ 30 }
            className="logo"
          />
        </li>
        <li>
          <Image
            alt="GitHub"
            src={ gitHubIcon }
            width={ 30 }
            height={ 30 }
            className="logo"
          />
        </li>
        
        <li>
          <Image
            alt="GitHub"
            src={ gmailLogo }
            width={ 30 }
            height={ 30 }
            className="logo"
          />
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
