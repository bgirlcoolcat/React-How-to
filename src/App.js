import React from 'react';

// In our component, we can access our props by interpolating with curly brackets, 
// this.props, and then, the name of the prop that we're looking for (saved in our index.js file).

class App extends React.Component {
  render() {
    return <h1>{this.props.txt}</h1>
  }
}

export default App;
