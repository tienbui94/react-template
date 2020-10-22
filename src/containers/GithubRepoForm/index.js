import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import RepoErrorType from 'common/RepoErrorType';
import { RepoItem } from 'components/RepoItem';
import { sliceKey, reducer, actions } from './slice';
import { githubRepoFormSaga } from './saga';
import {
  selectUsername,
  selectRepos,
  selectLoading,
  selectError,
} from './selectors';

import classes from './style.module.css';

export function GithubRepoForm() {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: githubRepoFormSaga });
  const username = useSelector(selectUsername);
  const repos = useSelector(selectRepos);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const onChangeUsername = evt => {
    dispatch(actions.changeUsername(evt.currentTarget.value));
    dispatch(actions.loadRepos());
  };

  const useEffectOnMount = effect => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      dispatch(actions.loadRepos());
    }
  });

  const onSubmitForm = evt => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  return (
    <div className={classes['root']}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="username">Github Username</label>
        <div className={classes['input-wrapper']}>
          <input
            id="username"
            type="text"
            placeholder="Type any Github username"
            value={username}
            onChange={onChangeUsername}
          />
          {isLoading && <p>Loading...</p>}
        </div>
      </form>
      {repos?.length > 0 ? (
        <div>
          {repos.map(repo => (
            <RepoItem
              key={repo.id}
              name={repo.name}
              starCount={repo.stargazers_count}
              url={repo.html_url}
            />
          ))}
        </div>
      ) : error ? (
        <span>{repoErrorText(error)}</span>
      ) : null}
    </div>
  );
}

export const repoErrorText = error => {
  switch (error) {
    case RepoErrorType.USER_NOT_FOUND:
      return 'There is no such user 😞';
    case RepoErrorType.USERNAME_EMPTY:
      return 'Type any Github username';
    case RepoErrorType.USER_HAS_NO_REPO:
      return 'User has no repository 🥺';
    case RepoErrorType.GITHUB_RATE_LIMIT:
      return 'Looks like github api`s rate limit(60 request/h) has exceeded 🤔';
    default:
      return 'An error has occurred!';
  }
};
