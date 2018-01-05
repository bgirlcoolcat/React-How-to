import React from 'react';

// Step 11 - Creating new components
// See Evernote notes for explanation of approach taken.

class PostItState extends React.Component {

    state = { editing: false }

    edit = () => {
        this.setState({ editing: true });
    }

    remove = () => {
        this.props.removePostItFromBoard(this.props.index);
    }

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

// 11b. Remove the hard-coded data for post its, so by default, no post it cards are shown.

    state = {
        postIts: [
        ]
    }

// 11c. Create a new add function. 
// 11d. Pass in some default text. This will be the text that we will set to this array item (above).

    addPostIt = (text) => {
        let arr = this.state.postIts;
        arr.push(text);
        this.setState({postIts: arr});
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

    eachComment = (item, i) => {
        return (
            <PostItState key={i} index={i} updatePostItText={this.updatePostIt} removePostItFromBoard={this.removePostIt}>
                {item}
            </PostItState>);
    }

    // 11a. Add button added as HTML and board content housed in a div tag

    // 11e. Add event handler to Add New button

    render() {
        return (
            <div>
                <button onClick={this.addPostIt.bind(null, 'New post it')} className="buttonAdd">Add New</button>
                <div className="board">
                    {this.state.postIts.map(this.eachComment)}
                </div>
            </div>
        );
    }
}

// export default PostItState;
export default Board;