import React, { Component } from 'react';
import './App.css';
import { fetchTweets } from '../Lib/Api' 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    fetchTweets().then((response) => {
     this.setState({data: response})
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
      </div>
    );
  }
}

export default App;
