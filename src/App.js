import React from 'react';
import PropTypes from 'prop-types';

// Outside of JSX, we don't need to interpolate that, so, can say, let txt = this.props.txt, 
// and then in our JSX, I can just use that variable name txt.

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

// You can catch a lot of bugs with type-checking. 
// To run type-checking on the props for a component, you can assign the special propTypes property, including isRequired. 

App.propTypes = {
  txt: PropTypes.string.isRequired
}

// We can also set a series of default properties by adding a property to our component called defaultProps.
// In this example, if we remove the txt string text (in index.js), the default text is shown in the browser instead.

App.defaultProps = {
  txt: "this is the default txt"
}

export default App;