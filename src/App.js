import React from 'react';

// An important feature of React is that a React component can output or render other React components
// See notes in Evernote or video for explanation to be clear

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
        {/* This also means that we could have a few of these guys on the page and every time we type in one of them, it'll update the value in our parent component. */}
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) => 
  <input type="text" onChange={props.update} />

export default App;