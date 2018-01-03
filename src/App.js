import React from 'react';

// Setting up state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

// To use state within our JSX, we interpolate it just like we do this.props, but this time, we're going to say, 
// this.state, and then, the key that we're looking for, in this case, it's txt. 
// We can see in the browser, we get 'this is the state txt'.

  render() {
    return (
      <h1>{this.state.txt}</h1>
    )
  }
}

export default App;