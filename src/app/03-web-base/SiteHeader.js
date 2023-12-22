import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/web-base-helpers';
import Spinner from '@/components/Spinner';

async function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <React.Suspense fallback={<Spinner />}>
          <Links />
        </React.Suspense>
      </nav>
    </header>
  );
}

async function Links() {
  let navLinks = await getNavLinks();
  navLinks = navLinks.slice(0, 4);

  return (
    <ol className="header-nav-links">
      {navLinks.map(
        ({ slug, label, href, type }) => (
          <li key={slug}>
            <Link
              href={href}
              className={`header-nav-link ${type}`}
            >
              {label}
            </Link>
          </li>
        )
      )}
    </ol>
  )
}

export default SiteHeader;
