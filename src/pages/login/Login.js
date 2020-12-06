import React, { Component } from 'react'
import './login.less'
import Img from '@/components/img/Img'
import FormInput from '@/components/formInput/FormInput'
import FormBtn from '@/components/formBtn/FormBtn'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        {/* 1、引入图片 */}
        <Img src="logo192.png" height="64"/>
        {/* 2、form表单 */}
        <form className="login-form">
          {/* 1）用户名 */}
          <FormInput type="text" placeholder="用户名"/>
          {/* 2）密码 */}
          <FormInput type="password" placeholder="密码"/>
          {/* 3）登录 */}
          <FormBtn name="login-btn">登录</FormBtn>
          {/* 4）忘记密码 */}
          <FormBtn type="ordinary">忘记密码</FormBtn>
          <FormBtn>免费注册</FormBtn>&emsp;
          <FormBtn>游客登录</FormBtn>
        </form>
      </div>
    )
  }
}
