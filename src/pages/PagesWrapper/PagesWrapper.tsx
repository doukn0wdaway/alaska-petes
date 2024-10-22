import { Outlet } from 'react-router-dom'
import { ReactComponent as BurgerMenuClosedIcon } from '../../assets/svg/burger-menu.svg'
import { Logo } from '../../components/Logo'
import './PagesWrapper.scss'
const PagesWrapper = () => {
  return (
    <div className='flex justify-center pagesWrapper'>
      <div className='mx-20 mt-5 flex justify-between w-full max-w-screen-2xl max-h-16'>
        <Logo />
        <BurgerMenuClosedIcon className='cursor-pointer burgerIcon' />
      </div>
      <Outlet />
    </div>
  )
}

export default PagesWrapper
