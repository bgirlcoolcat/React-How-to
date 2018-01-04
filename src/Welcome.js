import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// or use ES6 class to define a component

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name2}</h1>;
//     }
// }

// Composing Components

function App2() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Ally Jayne" />
            <Welcome name="Bevo" />
        </div>
    );
}

export default App2;
// export default Welcome;