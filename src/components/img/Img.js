import React, { Component } from 'react'

export default class Img extends Component {
  render() {
    return (
      <div className="img-component">
        <img src={require("../../assets/images/"+this.props.src).default} alt="" height={this.props.height+"px"}/>
      </div>
    )
  }
}
