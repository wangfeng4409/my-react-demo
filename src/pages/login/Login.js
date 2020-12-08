import React, { Component } from 'react'
import { Link } from 'react-router'
import './login.less'
import Img from '@/components/img/Img'
import FormInput from '@/components/formInput/FormInput'
import FormBtn from '@/components/formBtn/FormBtn'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChangeUname = this.handleChangeUname.bind(this)
    this.handleChangePword = this.handleChangePword.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChangeUname(e) {
    this.setState({
      username: e.target.value
    }, () => {
      console.log(this.state)
    })
  }

  handleChangePword(e) {
    this.setState({
      password: e.target.value
    }, () => {
      console.log(this.state)
    })
  }

  handleClick(e) {
    e.preventDefault()
    // this.props.router.push('/home')
    this.props.router.replace('/home')
  }

  render() {
    return (
      <div className="login">
        {/* 1、引入图片 */}
        <Img src="logo192.png" height="64"/>
        {/* 2、form表单 */}
        <form className="login-form">
          {/* 1）用户名 */}
          <FormInput
            type="text"
            placeholder="用户名"
            value={this.state.username}
            onChange={this.handleChangeUname}
          />
          {/* 2）密码 */}
          <FormInput
            type="password"
            placeholder="密码"
            value={this.state.password}
            onChange={this.handleChangePword}
          />
          {/* 3）登录 */}
          <Link to="/home">
            <FormBtn name="login-btn" onClick={this.handleClick}>登录</FormBtn>
          </Link>
          {/* 4）忘记密码 */}
          <FormBtn type="ordinary">忘记密码</FormBtn>
          <FormBtn>免费注册</FormBtn>&emsp;
          <FormBtn>游客登录</FormBtn>
        </form>
      </div>
    )
  }
}
