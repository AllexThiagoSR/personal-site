import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><Link href="/about">Sobre</Link></li>
        <li><Link href="/projects">Projetos</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
