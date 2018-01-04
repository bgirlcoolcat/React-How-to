import React from 'react';


class PostItState extends React.Component {

    edit = () => {
        alert('Editing comment');
    }

    remove = () => {
        alert('Removing comment');
    }

    render() {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} classname="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    }
}

export default PostItState;