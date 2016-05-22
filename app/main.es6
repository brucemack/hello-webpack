import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { m } from "./module-1.es6";
import { TopNav } from "./TopNav.es6"

// Create a simple React component
var App = React.createClass({
  getInitialState() {
    return {
      text: m
    };
  },
  componentWillMount() {
    // Make a request for a user with a given ID
    axios.get('/rest/a')
      .then(function(response) {
        console.log(response.data);
        // Bring the state across.  Doing this to validate that the setState
        // function is bound properly.
        this.setState({ text: response.data.text });
      }.bind(this))
      .catch(function(response) {
        console.log(response);
      }.bind(this));
  },
  render() {
    return (
      <div>
        <TopNav/>
        <h1>Hello World: {this.state.text}</h1>
      </div>
    );
  }
});

// Mount the React component into the DOM established in the index.thml
ReactDOM.render(<App/>,document.getElementById('app'));
