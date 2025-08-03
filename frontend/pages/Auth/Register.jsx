import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../src/context/AuthContext'

const Register = () => {

  const { login, register, loading } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (password !== confirmPassword) {
      setError("The passwords do not match, try again")
      return
    }

    try {
      await register(name, email, password, confirmPassword)
    }
    catch (error) {
      setError("registration failed")
    }
 
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
            Sign In
          </p>
        </div>

        {/* inputs */}
        <div
          className='flex flex-col gap-5'
        >

          {/* username */}
          <div
            className='flex flex-col gap-2 w-full'
          >
            <label
              className='pl-1 text-sm'
            >
              Username: 
            </label>
            <input 
              type="text" 
              placeholder='Enter your username'
              className='p-2 pl-3 outline-none border border-slate-300 rounded-sm text-sm'  
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          {/* confirm Password */}
          <div
            className='flex flex-col gap-2 w-full'
          >
            <label
              className='pl-1 text-sm'
            >
              Confirm Password: 
            </label>
            <div
              className='relative'
            >
              <input 
                type={showPassword 
                  ? "text" 
                  : "password"
                } 
                placeholder='Confirm your Password'
                className='p-2 pl-3 outline-none border border-slate-300 rounded-sm text-sm w-full'  
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

          <p>
            {error}
          </p>

          <button
            type='submit'
            className='bg-blue-700 p-2 rounded-sm font-semibold text-lg w-full cursor-pointer'
          >
            {loading 
              ? "Processing..."
              : "Log In"
            }
          </button>
          
          <Link
            to={'/Login'}
            className='text-sm text-white/50'
          >
            Already have an account Log In
          </Link>
          
        </div>

      </form>

    </div>
  )
}

export default Register