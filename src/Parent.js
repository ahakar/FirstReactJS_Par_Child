import React, {Component} from 'react';
import Child from './Child.js';

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Hello",
            topic: "React JS",
            count: 0,
            array: ['a', 'b'],
            obj: {},
            toggle: true
        }
    }

    changeName() {
        this.setState(
            {
                name: "Karthick",
                topic: "MERN"
            }
        )
    }

    receivedData(data) {
        console.log("data from child -----> ", data);
        this.setState(
            {
                topic: data.subject,
                name: data.name
            }
        )
    }

    render() {
        return(
            <div>
                Parent Component
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName.bind(this)}>Change</button>
                <Child dataSend={this.state.topic} sendBackToParent={this.receivedData.bind(this)} />
            </div>
        );
    }
}