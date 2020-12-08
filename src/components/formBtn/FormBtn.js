import React, { Component } from 'react'
import './formBtn.less'

export default class FormBtn extends Component {
  render() {
    return (
      this.props.type === 'ordinary' ?
      <span className="forget-password">{this.props.children}</span> :
      <button
        className={'my-btn ' + (this.props.name?this.props.name:'')}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}
