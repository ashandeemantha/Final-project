import React from 'react'
import loginSignupImage from "../assest/login.gif"

const Singup = () => {
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'> Sign up</h1> */}

        <div className='w-20'>
          <img src={loginSignupImage} className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default Singup