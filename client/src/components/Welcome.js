import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose  } from 'react-apollo';
import qql from 'graphql-tag';

class Welcome extends Component {
    render(){
        let text = this.props.data.loading ? 'Loading...' : this.props.data.parties[0].name;

        
        return(
            <h1>{text}</h1>
        );
    }
}

const query = qql`
{
  parties {
    name
  }
}`;

export default compose(graphql(query)(Welcome));