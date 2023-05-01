import React from 'react';
import Image from 'next/image';
import gitHubLogoIcon from '../images/githubIcon.svg';
import linkedinLogoIcon from '../images/linkedinLogo.svg';
import gmailLogoIcon from '../images/gmailLogo.svg';
import ContactCard from './ContactCard';

function Aside() {
  const contactsItems = [
    {
      name: 'Linkedin',
      icon: linkedinLogoIcon,
      href: 'https://www.linkedin.com/in/allexthiagosantosrosa/',
    },
    {
      name: 'GitHub',
      icon: gitHubLogoIcon,
      href: 'https://github.com/AllexThiagoSR',
    },
    {
      name: 'Gmail',
      icon: gmailLogoIcon,
      href: 'mailto:allexthiagoDEV@gmail.com',
    }
  ];

  return (
    <aside className="aside-section">
      <ul className="contacts-list">
        {
          contactsItems.map((item) => (
            <li key={ item.name + ' logo'}>
              <ContactCard contact={ item } />
            </li>
          ))
        }
      </ul>
      <hr/>
    </aside>
  );
}

export default Aside;
