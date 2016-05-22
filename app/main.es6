import React from 'react';
import ReactDOM from 'react-dom';
import { m } from "./module-1.es6";

// Create a simple React component
var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello World: {m}</h1>
      </div>
    );
  }
});

// Mount the React component into the DOM established in the index.thml
ReactDOM.render(<App/>,document.getElementById('app'));
