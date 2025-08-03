import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <nav
        className='w-full p-5 px-10 bg-blue-800 text-white flex flex-row items-center justify-between fixed top-0 left-0'
    >
        <h1
            className='font-semibold text-xl'
        >
            Login System
        </h1>
        <div
            className='w-fit gap-4 flex flex-row font-medium items-center '
        >
            <Link
                to={"/"}
                className='p-2 px-4 hover:bg-white/20 rounded-md duration-75 active:bg-white/40 '
            >
                Home
            </Link>
            <Link
                to={"/Login"}
                className='p-2 px-4 hover:bg-white/20 rounded-md duration-75 active:bg-white/40 '
            >
                Login
            </Link>
            <Link
                to={"/Register"}
                className='p-2 px-4 hover:bg-white/20 rounded-md duration-75 active:bg-white/40 '
            >
                Register
            </Link>
        </div>
        
    </nav>
  )
}

export default Layout