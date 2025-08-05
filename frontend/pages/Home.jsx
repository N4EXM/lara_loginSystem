import React from 'react'
import { useAuth } from '../src/context/AuthContext'

const Home = () => {

  const { user, authenticated, logout } = useAuth()

  return (
    <div 
      className='flex flex-col  gap-5 items-center justify-center w-full min-h-screen h-full bg-slate-800'
    > 
      <p>
        {authenticated  
          ? `Welcome ${user.name}`
          : "Welcome Guest" 
        }
      </p>

      {authenticated &&
        <button
          onClick={() => logout()}
          className='px-4 p-2 rounded-md bg-blue-500 font-medium'
        >
          Logout
        </button>
      }

    </div>
  )
}

export default Home