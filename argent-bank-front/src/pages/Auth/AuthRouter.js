import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from '@/pages/Auth/SignIn'
import Error from '@/components/public/Error'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AuthRouter
