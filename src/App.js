import React from 'react';

// Setting up state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

  // State is meant to be managed and updated by our component. 
  // I'm going to create a method here called "update" that takes in an event.

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" 
        onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

export default App;