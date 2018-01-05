import React from 'react';

// Basic example of changing state

class Checkbox extends React.Component {

    // I use the ES6 classes constructor for state, or could just use state = {}
    // getInitialState is if you are using createReactClass (as Bucky does)

    // This is to set up the initial state of your component.
    constructor(props) {
        super(props);
        this.state = {checked: true}
    }

    handleChecked = (e) => {
        this.setState({checked: !this.state.checked});
    }

    render() {

        let msg;
        if(this.state.checked) {
            msg = 'checked'
        } else {
            msg = 'unchecked'
        }

        return (
            <div>
                <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
                <h3>Checkbox is {msg}</h3>
            </div>
        );
    }
}

export default Checkbox;