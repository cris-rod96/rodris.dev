import HeaderSection from '../sections/HeaderSection'
import MenuSection from '../sections/MenuSection'

const Sidebar = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <aside
        className={`fixed h-full lg:w-[230px]  md:w-[40vw] w-[70vw] border-r border-gray-500/20 bg-dark ${
          showMenu ? 'left-0 ' : '-left-full'
        } transition-all duration-300 lg:left-0 z-50`}
      >
        <HeaderSection />
        <MenuSection toggleMenu={toggleMenu} />
      </aside>
      <div
        className={`fixed w-full h-full bg-dark opacity-50 ${
          showMenu ? 'block' : 'hidden'
        } transition-all duration-500 lg:hidden z-40`}
        onClick={toggleMenu}
      />
    </>
  )
}

export default Sidebar
