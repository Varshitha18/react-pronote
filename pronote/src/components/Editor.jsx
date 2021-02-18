import React, { Component } from 'react'

class Editor extends Component {
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

    render() {
        return (
          <div className="container">
            <div className="input">
                <h3>Input</h3>
                <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
            </div>
            <div className="output">
                <h3>Pro Note</h3>
                <div className="output-text">{this.state.value}</div>
            </div>                
          </div>
        )
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
}

export default Editor