import React, {Component} from 'react';

export default class Tweets extends Component {

	render() {
		const {data} = this.props;
		return (
			<div>
				{data.map((tweet) => (
					<div key={tweet.id} className="list-tweets">
				    <h1>@{tweet.user.screen_name}</h1>
				    <h3>{tweet.text}</h3>
			  	</div>
		  ))}
			</div>
		);
	}
}