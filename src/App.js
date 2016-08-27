import React, { Component } from 'react';
import './App.css';
import { fetchTweets } from './Lib/Api';
// import _ from 'lodash';


class App extends Component {
  constructor(props) {
    super(props);
    this.tweets = this.tweets.bind(this);
    this.state = {data: null};
  }

  componentDidMount() {
    fetchTweets().then((response) => {
      this.setState({data: response})
      console.log(response)
    });
  }

  tweets() {
    this.state.data.map(tweet => {
      return <li>{tweet.text}</li>
    });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <div className="tweeter-header">
          <h1 className="tweeter-h1">Search for a hashtag</h1>
          <span>#</span><input type="text" />
        </div>
        <h1>Tweets</h1>
        <ul>{this.tweets}</ul>
      </div>
    );
  }
}

export default App;
