import React from 'react';

// 1. created my class PostIt for the post it notes component.
// 2. To make up my post it app, I include the following elements: 
  // a div block with 2 buttons and some text. I include these elements in the render function.

class PostIt extends React.Component {

// 3. To be able to use the buttons, make your button functions. What the buttons should do when clicked on (Event Handling).
  // These go inside the class component and are written as arrow functions.

    edit = () => {
        alert('Editing comment');
    }

    remove = () => {
        alert('Removing comment');
    }

    render() {
        return (
            <div className="commentContainer">
                <div className="commentText">Your post it notes</div>
                <button classname="button-primary">Edit</button>
                <button className="button-danger">Remove</button>
            </div>
        );
    }
}

export default PostIt;