import React from 'react';
import ReactDOM from 'react-dom';

// 1. import PostIt in giving file directory
import PostIt from './PostIt';



// Add the component (as a tag) to be rendered by React. Don't forget the comma.

// After step 4 in PostIt.js is done, 
// we add a <div></div> and put multiple PostIt tags inside with content we want to display in app
ReactDOM.render(
    <div>
        <PostIt>Note 1</PostIt>
        <PostIt>Note 2</PostIt>
        <PostIt>Note 3</PostIt>
    </div>,
    document.getElementById('root')
);
