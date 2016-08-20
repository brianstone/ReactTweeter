import axios from 'axios';

export function fetchTweets() {
	axios.get('https://safe-headland-90182.herokuapp.com/')
		.then(function(response) {
			console.log(response.data);
			console.log(response.status);
			return response.data
		});
}

