import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as StarIcon } from 'assets/star.svg';
import { ReactComponent as NewWindowIcon } from 'assets/new-window.svg';
import classes from './style.module.css';

export function RepoItem({ name, starCount, url }) {
  return (
    <div className={classes['root']}>
      <div className={classes['name']}>{name}</div>
      <div className={classes['flex']}>
        <div className={classes['star-count']}>
          <StarIcon className={classes['icon']} />
          {starCount}
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <NewWindowIcon />
        </a>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  name: PropTypes.string,
  starCount: PropTypes.number,
  url: PropTypes.string,
};
