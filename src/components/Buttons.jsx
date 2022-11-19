import React from 'react'

function Buttons ({parentClass, childClass}) {
  return (
    <div className={` ${parentClass} flex gap-4 justify-center items-center font-Epilogue text-mediumGray text-[15px]`}>
      <div className={` ${childClass} w-[7em] px-3 py-2 rounded-xl text-center hover:text-black cursor-pointer`}>Login</div>
      <div className={` ${childClass} w-[7em] border-[1px] border-solid border-mediumGray px-3 py-2 rounded-xl text-center hover:text-black cursor-pointer hover:border-black `}>Register</div>
    </div>
  )
}

export default Buttons