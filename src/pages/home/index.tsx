import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useQuery from '@/hooks/useQuery'
import './index.less';

export default function Home() {
  const params = useParams()
  const query = useQuery()
  console.info('==Home==', params, query.get('name'))

  return (
    <div className="home">
      <div>Hello {query.get('name')}!</div>
      <Link to="/login" replace>登录页</Link>
    </div>
  )
}
