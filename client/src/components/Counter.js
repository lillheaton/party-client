import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render(){
        return(
            <div>
                Count: {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { count: state.fbUser.count };
};

export default connect(mapStateToProps)(Counter);