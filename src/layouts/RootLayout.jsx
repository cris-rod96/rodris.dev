import { Outlet } from 'react-router-dom'
import Sidebar from '../components/shared/Sidebar'
import { useState } from 'react'
import Footer from '../components/footer/Footer'
import { BtnMenu } from '../components/buttons'

const RootLayout = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  return (
    <>
      <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />
      <BtnMenu toggleMenu={toggleMenu} />
      <main className='lg:pl-[200px] pl-0 pb-10 pr-0'>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default RootLayout
