import React from 'react'
import { useAuth } from '../src/context/AuthContext'

const Home = () => {

  const { user } = useAuth()

  return (
    <div 
      className='flex items-center justify-center w-full min-h-screen h-full bg-slate-800'
    > 
      <p>
        {user 
          ? "Welcome Guest" 
          : `Welcome ${user?.name}`
        }
      </p>

    </div>
  )
}

export default Home