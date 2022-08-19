import React, { Component } from 'react';

class Title extends Component {
  render() {
    return <title><h2>{ this.props.headline }</h2></title>;
  }
}

export default Title;
