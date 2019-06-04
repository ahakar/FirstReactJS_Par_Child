import React, {Component} from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "Express JS",
            name: "Hello"
        }
    }

    sendData() {
        this.props.sendBackToParent(this.state);
    }

    render() {
        return(
            <div>
                Child Component
                <h1>{this.props.dataSend}</h1>
                <button onClick={this.sendData.bind(this)}>Send Back</button>
            </div>
        );
    }
}