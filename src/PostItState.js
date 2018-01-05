import React from 'react';

// Step 10 - Calling functions from another component - you can pass functions as props

class PostItState extends React.Component {

    state = { editing: false }

    edit = () => {
        this.setState({ editing: true });
    }

    // this.props.index is the id of the postit you are updating. 

    remove = () => {
        this.props.removePostItFromBoard(this.props.index);
    }

    // we pass value, as this is the text from the edit box
    // this.props.index is the id of the postit you are updating.

    save = () => {
        let value = this.refs.newText.value;
        this.props.updatePostItText(value, this.props.index);
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

    removePostIt = (i) => {
        console.log('Removing postIt: ' + i);
        let arr = this.state.postIts;
        arr.splice(i, 1);
        this.setState({postIts: arr});
    }

    updatePostIt = (newText, i) => {
        console.log('Updating postIt');
        let arr = this.state.postIts;
        arr[i] = newText;
        this.setState({postIts: arr});
    }

    // For each comment, we want to pass in some new properties for the functions.

    eachComment = (item, i) => {
        return (
            <PostItState key={i} index={i} updatePostItText={this.updatePostIt} removePostItFromBoard={this.removePostIt}>
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