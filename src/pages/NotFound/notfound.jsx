import React from 'react';
import css from './notfound.module.css';

function NotFound() {
  return (
    <div className={css.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={css.description}>
        К Sorry, this page is not available in our online store.
      </p>
    </div>
  );
}

export default NotFound;
