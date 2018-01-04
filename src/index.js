import React from 'react';
import ReactDOM from 'react-dom';

// 1. import PostIt in giving file directory
import PostIt from './PostIt';



// Add the component (as a tag) to be rendered by React. Don't forget the comma.
ReactDOM.render(
    <PostIt />,
    document.getElementById('root')
);
