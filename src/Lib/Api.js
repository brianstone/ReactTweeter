// import axios from 'axios';
import twitter from './twitter'

export function fetchTweets() {
  return twitter.get('search/tweets', {q: 'node'})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}



export function fetchTweets() {
  return twitter.get('/api')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}