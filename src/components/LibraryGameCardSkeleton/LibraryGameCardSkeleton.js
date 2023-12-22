import React from 'react';

import { random } from '@/utils';


function LibraryGameCardSkeleton() {
  return (
    <article
      className="library-game-card skeleton"
      aria-hidden="true"
    >
      <div className="hero-img"></div>
      <dl>
        <dt>Time played</dt>
        <dd>{random(0, 500)} hours</dd>
        <dt>Achievements</dt>
        <dd>
          {random(0, 10)}{' '}
          <span className="normal-font">/</span>{' '}
          {random(4, 20)}
        </dd>
      </dl>
    </article>
  );
}

export default LibraryGameCardSkeleton;
