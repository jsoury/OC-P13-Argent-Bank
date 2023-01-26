import { Outlet } from 'react-router-dom'
import Nav from '@/components/public/Nav'
import Footer from '@/components/public/Footer'

const Layout = (props) => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
