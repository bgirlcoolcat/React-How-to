import React from 'react';

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
                <button onClick={this.save} className="buttonSave">Save</button>
            </div>
        );
    }

    renderDefault = () => {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} className="buttonEdit">Edit</button>
                <button onClick={this.remove} className="buttonRemove">Remove</button>
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

class Board extends React.Component {

    state = {
        postIts: [
            'I like note 1',
            'I love note 2',
            'I dig note 3'
        ]
    }

// Bucky cleans up the render function so map is no longer an anonymous function, but a named function.
// Will do this, but no sure this is necessary going forward?

    // Key is for React. So we set our own as index={i}.

// Step 8 - Remove a postIt - see notes in Evernote for explanation of this approach.

    removePostIt = (i) => {
        console.log('Removing postIt: ' + i);
        let arr = this.state.postIts;
        arr.splice(i, 1);
        this.setState({postIts: arr});
    }

    eachComment = (item, i) => {
        return (
            <PostItState key={i} index={i}>
                {item}
            </PostItState>);
    }

    render() {
        return (
            <div className="board">
                {this.state.postIts.map(this.eachComment)}
            </div>
        );
    }
}

// export default PostItState;
export default Board;