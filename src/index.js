import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// We can pass data into our components by using what's called props. Here, I've created a prop called txt.
// To see the example change when using a variable with props txt, we change the string below.
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);