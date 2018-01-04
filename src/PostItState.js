import React from 'react';

// Step 7 - Refactor to properly use multiple child elements

class PostItState extends React.Component {

    state = { editing: false }

    edit = () => {
        this.setState({ editing: true });
    }

    remove = () => {
        console.log('Removing comment');
    }

    save = () => {
        let value = this.refs.newText.value;
        console.log('New postIt text:' + value);
        this.setState({ editing: false });
    }

    renderForm = () => {
        return (
            <div className="commentContainer">
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="button-success">Save</button>
            </div>
        );
    }

    renderDefault = () => {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    }

    render() {
        if(this.state.editing) { 
            return this.renderForm(); 
        } else {
            return this.renderDefault();
        }
    }
}

// Set up a Board component, that holds all the post its.

class Board extends React.Component {

    // Have an initial state that is an array of each of the post its, and manage them in that way.

    state = {
        postIts: [
            'I like note 1',
            'I love note 2',
            'I dig note 3'
        ]
    }
    
    // Make render function and create a div that represents the entire board.

    render() {
        return (
            <div className="board">
                {
                    // For each post it, I want to loop through the array of post its above 
                    // and output each post it between the <PostItState></PostItState> tags
                    // Have to set a key to give each post it/each child a unique identifier.
                    this.state.postIts.map(function (item, i) {
                        return (<PostItState key={i}>{item}</PostItState>);
                    })
                }
            </div>
        );
    }
}

// export default PostItState;
export default Board;