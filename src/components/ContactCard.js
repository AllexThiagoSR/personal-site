import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ContactCard({ contact: { href, name, icon } }) {
  return (
    <Link href={ href }>
      <Image
        alt={ name }
        src={ icon }
        width={ 30 }
        height={ 30 }
        className="logo"
      />
    </Link>
  );
}

export default ContactCard;
