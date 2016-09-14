import React, {Component} from 'react';

export default class Tweets extends Component {

	render() {
		const {data} = this.props;
		console.log(data)
		return (
			<div>
				{data.map((tweet) => (
					<div className="list-tweets">
				    <h1 key={tweet.id}>@{tweet.user.screen_name}</h1>
				    <h3>{tweet.text}</h3>
			  	</div>
		  ))}
			</div>
		);
	}
}