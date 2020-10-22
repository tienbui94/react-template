import axios from 'axios';

export const requestRepos = async username => {
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    const response = await axios.get(requestURL);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    return response.data;
  } catch (error) {
    return error;
  }
};
