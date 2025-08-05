import { useState } from 'react'
import { useAuth } from '../../src/context/AuthContext'
import { Link } from 'react-router-dom'

const Login = () => {

  const { loading, login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [rememberMe, setRememberMe] = useState(false)


  const [showPassword, setShowPassword] = useState(false)

  // handles the registration of the user
  const handleSubmit = async (e) => {

    e.preventDefault()

    await login(email, password, rememberMe)

    
    
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
          <div
            onClick={() => setRememberMe(!rememberMe)}
            className='w-full h-fit flex justify-end items-center gap-2 pr-3'
          >
            <span
              className={`size-5 ${rememberMe ? "bg-blue-500" : "bg-transparent"} rounded-md border border-white flex items-center justify-center`}
            >
                {rememberMe &&
                  <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12"  
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                  </svg>
                }
            </span>      
            <span 
              className='text-xs text-white/50'
            >
              Remember Me  
            </span>      
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