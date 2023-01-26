import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '@/pages/public'
import Error from '@/components/public/Error'

const PublicRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default PublicRouter
