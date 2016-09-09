import axios from 'axios';

// export function fetchTweets() {
//   return twitter.get('search/tweets', {q: 'node'})
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

export function fetchTweets() {
  return axios.get('/search/tweets?q=node.js')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}