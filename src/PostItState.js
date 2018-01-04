import React from 'react';


class PostItState extends React.Component {

// 1. Set the initial state to be false for editing, so no forms shown by default, but just show text

    state = { editing: false }

// 2. When Edit button is clicked, we change the state and set editing to true

    edit = () => {
        this.setState({ editing: true });
    }

    remove = () => {
        console.log('Removing comment');
    }

// 3. We need another function for save so when in editing mode, we offer a save button (eventually to save the new text).
  // For now, it will just take you out of editing mode by changing state so editing is set to false

    save = () => {
        this.setState({ editing: false });
    }

// 4. Create two render functions to toggle between the default mode and editing mode

    renderForm = () => {
        return (
            <div className="commentContainer">
                <textarea defaultValue={this.props.children}></textarea>
                <button onClick={this.save} classname="button-success">Save</button>
            </div>
        );
    }

    renderDefault = () => {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} classname="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    }

    render() {
        return (
            <h1>Placeholder text</h1>
        );
    }
}

export default PostItState;