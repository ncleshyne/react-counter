import React, { Component } from 'react';


class Today extends Component {
  render() {
    return(
      <p> Today is {this.props.date}</p>
    )
  }
}

export default Today;
