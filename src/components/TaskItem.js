import React from 'react';
import H100 from './H100'

export default class TaskItem extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            done: false,
            showTruck: this.props.showTruck
        }
    }

    render() { 
        let isDone = this.state.done ? ', done' : '';
        return (
            <li key={this.props.key}>
                <H100 showImage={this.state.showTruck}></H100>
                {this.props.data} {isDone}
                <button onClick={() => {
                    this.setState({
                        done: !this.state.done,
                        showTruck: !this.state.showTruck
                    })
                }}>Mark as Done!</button>
            </li>
        )
    }
}