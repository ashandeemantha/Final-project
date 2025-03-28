/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import loginSignupImage from "../assest/login.gif"
import {BiShow,BiHide} from "react-icons/bi"

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false)
    // eslint-disable-next-line no-unused-vars
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
    const [data,setData] = useState({
      firstName : "",
      lastName :"",
      email :"",
      password :"",
      confirmPassword :"",
    });
    console.log(data)
    const handleShowPassword = ()=>{
      setShowPassword(preve=> !preve)
    };
    // eslint-disable-next-line no-unused-vars
    const handleShowConfirmPassword = ()=>{
      setShowConfirmPassword(preve=> !preve)
    };
    const handleOnChange = (e)=>{
      const {name,value} = e.target
      setData((preve)=>{
        return{
           ...preve,
           [name] : value
        }
      })
    };
    const handleSubmit = (e) =>{
      e.preventDefault()
      const {firstName, email, password, confirmPassword} = data
      if(firstName&&email&&password&&confirmPassword){
        if(password===confirmPassword){
          alert("Successful")
        }
        else{
          alert("Password and confirm password do not match")
        }
      }
      else{
        alert("Please enter required fields")
      }
    }
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4'>
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md flex m-auto'>
          <img src={loginSignupImage} className='w-full' />
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

          <label htmlFor='email'>Email</label>
          <input type={"email"} 
          id='email'
          name='email' 
          className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300' 
          value={data.email}
          onChange={handleOnChange}
          />

          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
          <input type={showPassword ? "text":"password"} 
          id='password' 
          name='password' 
          className=' w-full bg-slate-200 border-none outline-none' 
          value={data.password}
          onChange={handleOnChange}/>
          <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ?<BiShow/>:<BiHide/>}</span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-600 cursor-pointer text-white text-xl font font-medium text-center py-1 rounded-full mt-4">
            Login</button>
        </form>
          <p className='text-left text-sm mt-2'>Don't have an account?{""} 
            <Link to={"/signup"} className='text-red-500 underline'>SignUp</Link></p>

      </div>
    </div>
  )
}

export default Login