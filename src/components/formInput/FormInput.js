import React, { Component } from 'react'
import './formInput.less'

export default class FormInput extends Component {
  render() {
    return (
      <div className="input-group">
        {/* 输入框 */}
        <input className="my-input" type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    )
  }
}
