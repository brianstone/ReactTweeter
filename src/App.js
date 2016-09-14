import React, {Component} from 'react';
import './App.css';
import {fetchTweets} from './Lib/Api'
import Tweets from './Tweets';

export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = {data: null};
  }

  // handleSearch(e) {
  //   this.setState({
  //     searchTerm: e.target.value
  //   })
  // }
  componentDidMount() {
    fetchTweets()
      .then((response) => {
        console.log("here")
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
          <span>#</span><input onChange={this.handleSearch} type="text" />
        </div>
        {data ? <Tweets data={data}/> : null}
      </div>
    );
  }
}
