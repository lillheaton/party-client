import React, { Component } from 'react';
import { incrementCounter } from '../reducers/fbUser';
import { connect } from 'react-redux';

class Button extends Component {

    render(){
        return(
            <button onClick={this.props.incrementCounter}>Increment</button>
        );
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return { incrementCounter: () => dispatch(incrementCounter()) };
};*/

// Same as above
const mapDispatchToProps2 = {
    incrementCounter
};

export default connect(null, mapDispatchToProps2)(Button);