import { useState } from 'react'
import { useAuth } from '../../src/context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const { loading, login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // handles the registration of the user
  const handleSubmit = async (e) => {

    e.preventDefault()

    login(email,password)
 
  }

  return (
    <div
      className=' w-full min-h-screen h-full flex items-center justify-center '
    >

      <form 
        className='flex flex-col gap-10 bg-slate-900 border border-white w-96 h-full p-5 rounded-md'
        onSubmit={(e) => handleSubmit(e)}
      >
        
        {/* title */}
        <div
          className='w-full flex justify-center  items-center'
        >
          <p className='text-3xl font-bold'>
            Log In
          </p>
        </div>

        {/* inputs */}
        <div
          className='flex flex-col gap-5'
        >

          {/* email */}
          <div
            className='flex flex-col gap-2 w-full'
          >
            <label
              className='pl-1 text-sm'
            >
              Email: 
            </label>
            <input 
              type="text" 
              placeholder='Enter your Email'
              className='p-2 pl-3 outline-none border border-slate-300 rounded-sm text-sm'  
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div
            className='flex flex-col gap-2 w-full'
          >
            <label
              className='pl-1 text-sm'
            >
              Password: 
            </label>
            <div
              className='relative'
            >
              <input 
                type={showPassword 
                  ? "text" 
                  : "password"
                } 
                placeholder='Enter your Password'
                className='p-2 pl-3 outline-none border border-slate-300 rounded-sm text-sm w-full'  
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className='absolute text-xs right-3 top-3 text-white/70'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword
                  ? "Hide"
                  : "Show"
                }
              </span>
            </div>
            
          </div>

        </div>

        {/* other buttons */}
        <div
          className='flex flex-col gap-5 items-center justify-center'
        >

          <p
            className='text-rose-500 text-sm'
          >
            {error}
          </p>

          <button
            type='submit'
            className='bg-blue-700 p-2 rounded-sm font-semibold text-lg w-full cursor-pointer'
          >
            {loading 
              ? "Processing..."
              : "Register"
            }
          </button>
          
          <Link
            to={'/Login'}
            className='text-sm text-white/50'
          >
            Don't have an account Sign Up
          </Link>
          
        </div>

      </form>

    </div>
  )
}

export default Login