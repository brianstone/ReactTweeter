import axios from 'axios';

export function fetchTweets() {
	console.log("FOOOfoo")
	axios.get('https://safe-headland-90182.herokuapp.com/')
		.then(function(response) {
			console.log(response);
			console.log(response.status);
			return response.data;
		})
		.catch(function(error) {
			console.log(error);
		});
}

