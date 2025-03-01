import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assest/logo.png"
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

const header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-1'>
        {/*desctop*/}
        <div className='flex items-center h-full justify-between' >
            <Link to={""}>
            <div className='h-16'>
                <img src={logo} className="h-full"/>
            </div>
            </Link>

            <div className="flex items-center ">
              <nav>
                <Link to={""}>Home</Link>
                <Link to={"menu"}>Menu</Link>

                <link to={"about"}>About</link>
                <link to={"contact"}>Contact</link>
              </nav>
              <div className="">
                <BsCartFill/>
              </div>
              <div className="">
                <FaUserAlt/>
              </div>
            </div>
        </div>

        {/*mobile*/}
    </header>
  )
}

export default header
