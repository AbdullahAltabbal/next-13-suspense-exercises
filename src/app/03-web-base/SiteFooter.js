import React from 'react';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

import { getNavLinks } from '@/helpers/web-base-helpers';

async function SiteFooter() {

  return (
    <header className="site-footer">
      <div className="logo-wrapper">
        <Link href="" className="logo">
          Webzip
        </Link>
        <p className="disclaimer">
          Copyright © 2099 Webzip Inc. All Rights
          Reserved.
        </p>
      </div>

      <div className="link-wrapper">
        <div className="col">
          <h2>Navigation</h2>
          <React.Suspense fallback={<Spinner />}>
            <Links />
          </React.Suspense>
        </div>
        <div className="col">
          <h2>Legal</h2>
          <nav>
            <ol>
              <li>
                <Link href="">Terms of Use</Link>
              </li>
              <li>
                <Link href="">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
}

async function Links() {
  let navLinks = await getNavLinks();

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

export default SiteFooter;
