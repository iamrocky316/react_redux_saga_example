import axios from "axios";

// GitHub API
export const gitHubApi = username => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(function(response) {
      return {
        login: response.data.login,
        avatar_url: response.data.avatar_url,
        html_url: response.data.html_url
      };
    })
    .catch(function(error) {
      console.log(error);
    });
};
