import React from 'react';
// import gitHubLogoIcon from '../images/githubIcon.svg';
// import linkedinLogoIcon from '../images/linkedinLogo.svg';
// import gmailLogoIcon from '../images/gmailLogo.svg';
import ContactCard from './ContactCard';
import contactsItems from '@/helpers/contacts';

function Aside() {
  return (
    <aside className="aside-section">
      <hr/>
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
