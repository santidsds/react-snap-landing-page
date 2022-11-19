import React from 'react'
import mobileBg from '../assets/image-hero-mobile.png'
import desktopBg from '../assets/image-hero-desktop.png'

import audiophile from '../assets/client-audiophile.svg'
import databiz from '../assets/client-databiz.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'


const Hero = () => {
  return (
    <div className='dl:px-[18em] dm:px-[13em] ds:px-[8em] dxs:px-[5em] dxs:flex-row-reverse dxs:justify-center flex mt-[2em] flex-col w-[100%] h-[88vh] bg-almostWhite '>
        <div className=' dxs:w-[40vw] dxs:h-[70vh] dxs:justify-end w-[100vw] flex justify-center items-center '>
          <img className='dxs:hidden w-[600px]' src={mobileBg} alt="" />    
          <img className='dm:w-[550px] dm:h-[700px] ds:h-[580px] dxs:h-[550px] dxs:block hidden' src={desktopBg} alt="" />
        </div>
        <div className='dxs:w-[60vw] w-[100vw] h-[70vh] flex flex-col justify-center dxs:items-start items-center text-center dxs:text-left font-Epilogue'>
            <div><h1 className='dm:text-[80px] dxs:text-[65px] dm:max-w-[530px] dxs:max-w-[430px] text-[38px] font-bold mt-[1em] '>Make remote work</h1></div>
            <div><p className='text-mediumGray mt-[1em] max-w-[22em] dxs:max-w-[400px]' >Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p></div>
            <div><button className='max-h-[48px] bg-almostBlack text-white px-5 py-3 mt-[1.5em] rounded-[15px] hover:text-black hover:bg-transparent hover:border-[1px] hover:border-black'>Learn more</button></div>
            <div className='flex ml:gap-10 gap-5 ml:mt-[3em] mt-[5em]'>
                <img className='w-[px] h-[13px]' src={databiz} alt="" />
                <img className='w-[60px] h-[30px]' src={audiophile} alt="" />
                <img className='w-[65px] h-[13px]' src={meet} alt="" />
                <img className='w-[60px] h-[16px]' src={maker} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero