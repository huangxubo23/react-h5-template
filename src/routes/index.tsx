import React, { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import BlankLayout from '@/layouts/BlankLayout'

const Home = lazy(() => import('@/pages/home/index'))
const Login = lazy(() => import('@/pages/login/index'))
const NotFountPage = lazy(() => import('@/pages/error/404'))


function BasicRoutes() {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate replace to="/home?name=React-H5-Template" />
    },
    {
      path: 'home',
      element: <BlankLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: ':id', element: <Home /> },
      ]
    },
    // {
    //   path: 'home',
    //   element: <Home />
    // },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: '*',
      element: <NotFountPage />
    }
  ])
  return element
}

export default BasicRoutes
