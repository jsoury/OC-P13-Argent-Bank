import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Profile } from '../privat'
import Error from '@/components/public/Error'

const PrivatRouter = () => {
  return (
    <Routes>
      <Route index element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default PrivatRouter
