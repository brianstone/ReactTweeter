import React from 'react';
import './App.css';
import { fetchTweets } from './Lib/Api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    console.log("seven")
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
    console.log(data)
    return (
      <div className="App">
        <div className="tweeter-header">
          <h1 className="tweeter-h1">Search for a hashtag</h1>
          <span>#</span><input type="text" />
        </div>
        {/* <h1>Tweets</h1>*/}
          {data && data.map((tweet) => (
            <div>
              <h1 key={tweet.id}>{tweet.user}</h1>
              <h3>{tweet.tweet}</h3>
            </div>
          ))}
      </div>
    );
  }
}
