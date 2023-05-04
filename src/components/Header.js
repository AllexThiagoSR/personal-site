import React from 'react';
import NavBar from './NavBar';
import Link from 'next/link';

function Header() {
  return (
    <header className="header">
      <Link href="/">
        <svg className="header-logo" width="40" height="40" >
          <rect rx="7" ry="7" width="40" height="40"/>
          <text className="header-logo-text" x="7" y="35">A</text>
        </svg>
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
