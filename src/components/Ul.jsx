import React, {useState} from 'react'
import arrowUp from '../assets/icon-arrow-up.svg'
import arrowDown from '../assets/icon-arrow-down.svg'
import todo from '../assets/todo.svg'
import calendar from '../assets/calendar.svg'
import reminders from '../assets/reminders.svg'
import planning from '../assets/planning.svg'

const Ul = ({parentClass, childClass}) => {


  const [featuresOpen, setFeaturesOpen ] = useState(false)
  const [companyOpen, setCompanyOpen ] = useState(false)

  const featuresHandleToggle = () => {
    setFeaturesOpen(prev => !prev)
    
  }
  const companyHandleToggle = () => {
    setCompanyOpen(prev => !prev)
  }

  return (
    <div className={` ${parentClass ? parentClass : 'hidden dxs:flex gap-12 text-mediumGray'}`}>
        
        <div>
          <div className=' flex cursor-pointer font-[500]' onClick={featuresHandleToggle}>
            <button className='hover:text-black' >Features</button>
            <button className=''><img className=' w-[11px] h-[7px] mt-1 mr-1 ml-1.5 ' src={featuresOpen ? arrowUp : arrowDown} alt="" /></button>
          </div>

          <div className={` ${featuresOpen ? ` ${childClass ? childClass : 'flex gap-2 flex-col absolute ml-[-4.5em] mt-[2em] shadow-md bg-white p-5 rounded-lg '}` : 'hidden'}`}>
            <div className='flex justify-start items-center gap-5 cursor-pointer hover:text-black'><img className='w-[15px] h-[17px]' src={todo} alt="" />Todo List</div>
            <div className='flex justify-start items-center gap-5 cursor-pointer hover:text-black'><img className='w-[15px] h-[17px]' src={calendar} alt="" />Calendar</div>
            <div className='flex justify-start items-center gap-5 cursor-pointer hover:text-black'><img className='w-[15px] h-[17px]' src={reminders} alt="" />Reminders</div>
            <div className='flex justify-start items-center gap-5 cursor-pointer hover:text-black'><img className='w-[15px] h-[17px]' src={planning} alt="" />Planning</div>
          </div>
        </div>

        <div>
          <div className=' flex cursor-pointer font-[500]' onClick={companyHandleToggle}>
            <button className='hover:text-black'>Company</button>
            <button><img className=' w-[11px] h-[7px] mt-1 mr-1 ml-1.5 ' src={companyOpen ? arrowUp : arrowDown} alt="" /></button>
          </div>
          
          <div className={` ${companyOpen ? `${childClass ? childClass : 'flex gap-2 flex-col absolute ml-[-1.5em] mt-[2em] shadow-md bg-white p-5 rounded-lg '}` : 'hidden'}`}>
            <div className='flex justify-start items-center gap-5 cursor-pointer hover:text-black' >History</div>
            <div className='flex justify-start items-center gap-5 cursor-pointer hover:text-black'>Our Team</div>
            <div className='flex justify-start items-center gap-5 cursor-pointer hover:text-black'>Blog</div>
          </div>
        </div>

        <button className='flex flex-start font-[500] hover:text-black' href="">Careers</button>
        <button className='flex flex-start font-[500] hover:text-black' href="">About</button>
    </div>
  )
}

export default Ul
