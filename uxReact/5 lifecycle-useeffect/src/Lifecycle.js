import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'alex' };
    }

    componentWillMount = () => {
        console.log('Component Will MOUNT!')
    }

    componentDidMount = () => {
        console.log('Component Did MOUNT!')
    }

    handleClick = () => {
        this.setState({ name: "My name is alex" });
    }

    componentWillReceiveProps = (newProps) => {
        console.log('Component Will Recieve Props!')
    }

    shouldComponentUpdate = (newProps, newState) => {
        return true;
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log('Component Will UPDATE!');
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('Component Did UPDATE!')
    }

    render() {
        return (
            <div>
                <h1>ReactJS component's Lifecycle</h1>
                <h3>Hello {this.state.name}</h3>
                <button onClick={this.handleClick}>Click Here!</button>
            </div>
        );
    }
}

export default Lifecycle;