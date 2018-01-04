import React from 'react';
import ReactDOM from 'react-dom';

import Board from './PostItState';

// Step 7 - Refactor to properly use multiple child elements

ReactDOM.render(

    // Render the Board component instead

    <Board />,
    document.getElementById('root')
);
