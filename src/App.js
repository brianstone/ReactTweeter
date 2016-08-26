import React from 'react';
import './App.css';
// import { fetchTweets } from './Lib/Api'
import axios from 'axios';

// import _ from 'lodash';
function fetchTweets() {
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

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.tweets = this.tweets.bind(this);
    this.state = {data: null};
  }

  componentDidMount() {
    console.log("FooBar");
    // console.log(fetchTweets());
    fetchTweets().then((response) => {
     this.setState({data: response})
    });
  }

  tweets() {
    console.log(this.state)
    return this.state.data.map((tweet) => {
      return <div>{tweet.user}: {tweet.text}</div>
    });
  }

  render() {
    // fetchTweets();
    // console.log(this.state.data)
    const {data} = this.state;
    return (
      <div className="App">
        <div className="tweeter-header">
          <h1 className="tweeter-h1">Search for a hashtag</h1>
          <span>#</span><input type="text" />
        </div>
        <h1>Tweets</h1>
        {data && data.map((tweet) => (
          <div>{tweet.user}: {tweet.text}</div>
        ))}
      </div>
    );
  }
}

export default App;
