import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GithubRepoForm } from 'containers/GithubRepoForm';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="A Boilerplate application homepage" />
    </Helmet>
    <GithubRepoForm />
  </>
);

export default HomePage;
