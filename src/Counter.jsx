import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
       
       this.setState({count: this.state.count + 1});
    }
  
    render() {
        const buttonstyle={
            height: "30px",
            width: "80px"
        }
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>
                <button style={buttonstyle} class="fa fa-thumbs-up "onClick={this.incrementCount}>like</button>
            </div>
        );
    }
}

export default Counter;