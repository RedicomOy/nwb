// @flow
import React, { Component } from 'react'

class Module1 extends Component<{ title: string }> {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

export default Module1
