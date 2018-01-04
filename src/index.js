import React from 'react';
import ReactDOM from 'react-dom';

import PostItState from './PostItState'



ReactDOM.render(
    <div>
        <PostItState>Note 1</PostItState>
        <PostItState>Note 2</PostItState>
        <PostItState>Note 3</PostItState>
    </div>,
    document.getElementById('root')
);
