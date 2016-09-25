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

export function fetchTweets(query) {
  return axios.get(`http://localhost:3001/api?q={query}`)
    .then((response) => {
      return response.data.statuses;
    })
    .catch((error) => {
      console.log(error);
    });
}
