import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Welcome from './Welcome';
// import Comment from './Comment';
import App2 from './Welcome';


// const element = <Welcome name="Ally" name2="Bev" />;

// const comment = {
//     date: new Date(),
//     text:
//       'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl:
//         'http://placekitten.com/g/64/64',
//     },
// };

ReactDOM.render(
    // <App />,
    // element,
    <App2 />,
    // <Welcome />,
    // <Comment
    // date={comment.date}
    // text={comment.text}
    // author={comment.author}
    // />,
    // <h1>Bev!</h1>,
    document.getElementById('root')
);
