import React from 'react';

// Outside of JSX, we don't need to interpolate that, so, can say, let txt = this.props.txt, 
// and then in our JSX, I can just use that variable name txt.

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

export default App;