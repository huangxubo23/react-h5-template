import React, { Suspense } from 'react'
import { Loading } from 'antd-mobile'
import BasicRoutes from '@/routes/index'

function App() {
  return (
    <Suspense fallback={<Loading color='primary' />}>
      <BasicRoutes />
    </Suspense>
  )
}

export default App
