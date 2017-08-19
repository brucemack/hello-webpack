import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
// Demonstrate how to bring in another ES6 module:
import { m } from "./module-1.es6";
import { TopNav } from "./TopNav.es6"

// Create a simple React component
var App = React.createClass({
  getInitialState() {
    return {
      text: m
    };
  },
  // Show an example of a component that interacts with a REST server
  componentWillMount() {
    // Make a request for
    axios.post('/rest/a',{ name: "Bruce" })
      .then(function(response) {
        this.setState({ text: response.data.text });
      }.bind(this))
      .catch(function(response) {
      }.bind(this));
  },
  render() {
    return (
      <div>
        <TopNav/>
        <h1>Hello World: {this.state.text}</h1>
        <p>Demo of Font Awesome:</p>
        <i className="fa fa-camera-retro"></i>
        <p className="test1">Hello Red?</p>
      </div>
    );
  }
});

// Mount the React component into the DOM established in the index.thml
ReactDOM.render(<App/>,document.getElementById('app'));
