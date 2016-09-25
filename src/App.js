import React, {Component} from 'react';
import './App.css';
import {fetchTweets} from './Lib/Api'
import Tweets from './Tweets';

export default class App extends Component {
    constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      data: null,
      query: "node.js"
    };
  }

  handleSearch(e) {
    this.setState({
      query: e.target.value
    })
  }

  componentDidMount() {
    // const {query} = this.state;
    fetchTweets(this.state.query)
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
          <span>#</span><input onChange={this.handleSearch} type="text" />
        </div>
        {data ? <Tweets data={data}/> : null}
      </div>
    );
  }
}
