import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Space, Input, Toast } from 'antd-mobile'
import CountDown from '@/components/CountDown'
import { isPhone } from '@/utils'
import { login, sendVerificationCode } from '@/api/login'
import './index.less'

export default function Login() {
  const [mobile, setMobile] = useState('')
  const [code, setCode] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const validatePhone = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      if (isPhone(mobile)) {
        resolve(true)
        return
      }
      Toast.show({
        icon: 'fail',
        content: mobile ? '手机号码不正确' : '手机号码不能为空'
      })
      reject(false)
    })
  }

  const sendCodeSuccess = async () => {
    setDisabled(false)
    await sendVerificationCode({
      mobile,
      usage: '登录',
    });
    Toast.show({
      icon: 'success',
      content: '验证码发送成功！'
    })
  }

  const handleLogin = async () => {
    try {
      setLoading(true)
      console.info({ mobile, code })
      await login({
        mobile,
        verificationCode: code,
      });
      navigate('/home', { replace: true });
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <h2 className="login-title">react-h5-template</h2>
        <div className="login-form">
          <div className="login-form-input">
            <Input placeholder="请输入手机号" onChange={val => setMobile(val)} />
          </div>
          <div className="login-form-input">
            <Input placeholder="请输入验证码" onChange={val => setCode(val)} />
            <CountDown
              autoStart={false}
              countDown={60}
              className="mobile-code"
              deforeCheck={validatePhone}
              onStart={sendCodeSuccess}
            >
              发送验证码
            </CountDown>
          </div>
          <Button
            color='primary'
            shape="rounded"
            className="login-btn"
            disabled={disabled}
            loading={loading}
            onClick={handleLogin}
          >
            登录
          </Button>
          <Button color='primary' fill='outline' shape="rounded" className="login-btn">
            <Space>
              <span>微信登录</span>
            </Space>
          </Button>
          <Link to="/home" replace>直接进入首页</Link>
        </div>
      </div>
    </div>
  )
}
