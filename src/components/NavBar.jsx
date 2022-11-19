import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import Ul from './Ul'
import Buttons from './Buttons'

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <div className=' bg-almostWhite w-full flex justify-between h-[4em] p-[1.5em] mxl:p-[3em] '>
        <div onClick={handleToggle} className={` ${navbarOpen ? 'opacity-[60%] bg-black h-[100vh] w-[100vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'hidden'} `}></div>

        <div className=' w-[50vw] flex justify-start items-center gap-[3.7em] '>
            <img src={Logo} alt="" className='
            w-[80px] h-[25px] mt-2
            mxl:w-[90px] mxl:h-[28px] mxl:mt-1.5 ' />
            <Ul />
        </div>
        
        <div className=' w-[50vw] flex justify-end items-center '>
            <div className=' dxs:hidden '>
                <button onClick={handleToggle} className='  mt-[0.5em]'><img className={` ${navbarOpen ? 'opacity-0' : ''} `} src={menu} alt="" /></button>
                <ul className={` ${navbarOpen ? 'block' : 'hidden' } bg-almostWhite mxl:w-[20em] w-[17em] h-[150vh] fixed right-0 top-0`}>
                    <div className='flex justify-end mr-[3.1em] mt-[2.2em] cursor-pointer'><img onClick={handleToggle} className='mt-[-1em] mr-[-1em] mxl:mt-[0] mxl:mr-[0]' src={close} alt="" /></div>
                    <div className='p-[2em]'>
                        <Ul parentClass='flex flex-col gap-5 text-[18px] text-mediumGray' childClass='flex gap-2 flex-col font-[500] p-5 rounded-lg' />
                    </div>
                    <div className='flex justify-center '><Buttons parentClass='flex-col w-full' childClass = 'w-[80%]'/></div>
                </ul>
            </div>
            <div className=' hidden dxs:block '>
                <Buttons  />
            </div>
        </div>
    </div>
  )
}

export default NavBar