import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './pages/Layout'
import PublicRouter from '@/pages/public/PublicRouter'
import AuthRouter from '@/pages/Auth/AuthRouter'
import PrivatRouter from '@/pages/privat/PrivatRouter'
import AuthGuard from './_helpers/AuthGuard'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/*" element={<PublicRouter />} />
            <Route
              path="/profile/*"
              element={
                <AuthGuard>
                  <PrivatRouter />
                </AuthGuard>
              }
            />
            <Route path="/sign-in/*" element={<AuthRouter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
