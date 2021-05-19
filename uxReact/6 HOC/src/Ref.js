import React, { Component } from "react";

class Ref extends Component{
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    focusTextInput = () => {
        this.textInput.current.focus();
    }

    render() {
        return(
            <div>
                <input type = "text" ref = {this.textInput}>
                </input>
                <button type="submit" onClick={this.focusTextInput} > Click me</button>
            </div>
        )
    }
}

export default Ref;
