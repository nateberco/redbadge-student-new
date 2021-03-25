import React, { Component } from 'react';

class StateExample extends Component {

    constructor(props){
        super(props);
        this.state = {currentTemp: "82", location: "Aruba"}

    //     this.handleClick = this.handleClick.bind(this);
     }
    // handleClick() {
    //     this.setState({ currentTemp: "69" });
    // }

    // ABOVE IS OPTION 1 - BELOW IS OPTION 2 (LESS CODE)

    handleClick = () => {
        this.setState({ currentTemp: "25"});
    };

    render() {
        return(
            <div>
                Hello, the current temerature is {this.state.currentTemp} - in {" "}{this.state.location}
                <button onClick={this.handleClick}>Click Me To Change Temperature</button>
            </div>
        )
    }
}

export default StateExample;