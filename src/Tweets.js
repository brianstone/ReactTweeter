import React, {Component} from 'react';

export default class Tweets extends Component {

	render() {
		const {data} = this.props;
		return data !== undefined &&
			<div id="Tweets">
				{data.map((tweet) => (
					<div key={tweet.id || 1} className="list-tweets">
				    <h1>@{tweet.user.screen_name || "name"}</h1>
				    <h3>{tweet.text || "lalala"}</h3>
			  	</div>
		  ))}
			</div>
	}
}