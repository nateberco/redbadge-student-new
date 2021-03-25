// Create a class version of the Functional Component
import React, { Component } from 'react';
import { Button, Container } from "reactstrap";

class ClassClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { countValue: this.props.initialValue}
    }
    handleClick = () => {
        this.setState({ countValue: (this.state.countValue - 1) });
    }

    render() {
        return(
            <Container>
                You have {this.state.countValue} clicks left!
                <Button onClick={this.handleClick}>Click Me</Button>
            </Container>
        )
    }


    }



export default ClassClickCounter;
