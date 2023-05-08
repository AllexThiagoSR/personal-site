import Link from 'next/link';
import React from 'react';

function ContactCard({ contact: { href, icon } }) {
  return (
    <Link href={ href }>
      {icon}
    </Link>
  );
}

export default ContactCard;
