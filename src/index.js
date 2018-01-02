import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// We can pass data into our components by using what's called props. Here, I've created a prop called txt.
ReactDOM.render(
    <App txt="this is the prop text"/>, 
    document.getElementById('root')
);
