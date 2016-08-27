import axios from 'axios';

export function fetchTweets() {
  return axios.get('https://safe-headland-90182.herokuapp.com/')
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

