import React, { lazy } from 'react';

export type RouteType = {
  path: string;
  name?: string;
  title?: string;
  component: React.LazyExoticComponent<any>;
  routes?: RouteType[]
}

export const basicRoutes: RouteType[] = [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: lazy(() => import('@/pages/login/index')),
  },
  {
    path: '/home',
    name: 'home',
    title: '首页',
    component: lazy(() => import('@/pages/home/index')),
  },
  {
    path: '*',
    name: '404',
    title: '404',
    component: lazy(() => import('@/pages/error/404')),
  }
]
