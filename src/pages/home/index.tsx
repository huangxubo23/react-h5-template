import React from 'react'
import { Link } from 'react-router-dom'
import './index.less';

export default function Home() {
  return (
    <div className="home">
      <div>Home</div>
      <Link to="/login">调整到登录页</Link>
    </div>
  )
}
