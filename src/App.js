import React, {Component} from 'react';
import './App.css';
import { fetchTweets } from './Lib/Api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    fetchTweets()
      .then((response) => {
       this.setState({data: response})
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <div className="tweeter-header">
          <h1 className="tweeter-h1">Search for a hashtag</h1>
          <span>#</span><input type="text" />
        </div>
        {/* <h1>Tweets</h1>*/}
          {data && data.map((tweet) => (
            <div className="list-tweets">
              <h1 key={tweet.id}>{tweet.user}</h1>
              <h3>{tweet.tweet}</h3>
            </div>
          ))}
      </div>
    );
  }
}
