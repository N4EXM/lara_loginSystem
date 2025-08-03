import { useState } from 'react'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className=' w-full min-h-screen h-full flex items-center justify-center '
    >

      <form 
        className='flex flex-col gap-5 bg-slate-700 border-2 border-slate-600 w-96 h-full p-5 rounded-md'
        onSubmit={(e) => e.preventDefault()}
      >
        
        {/* title */}
        <div
          className='w-full flex justify-center items-center'
        >
          <p className='text-3xl font-bold'>
            Sign In
          </p>
        </div>

        {/* inputs */}
        <div
          className='flex flex-col gap-3'
        >

          {/* username */}
          <div
            className='flex flex-col gap-1 w-full'
          >
            <label
              className='pl-1 text-sm'
            >
              Username: 
            </label>
            <input 
              type="text" 
              placeholder='Enter your username'
              className='p-2 pl-3 outline-none border-2 border-slate-300 rounded-md text-sm'  
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* email */}
          <div
            className='flex flex-col gap-1 w-full'
          >
            <label
              className='pl-1 text-sm'
            >
              Email: 
            </label>
            <input 
              type="text" 
              placeholder='Enter your Email'
              className='p-2 pl-3 outline-none border-2 border-slate-300 rounded-md text-sm'  
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div
            className='flex flex-col gap-1 w-full'
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
                className='p-2 pl-3 outline-none border-2 border-slate-300 rounded-md text-sm w-full'  
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className='absolute text-xs right-3 top-3 text-white/70'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword
                  ? "Hide"
                  : "Show"
                }
              </button>
            </div>
            
          </div>

          {/* confirm Password */}
          <div
            className='flex flex-col gap-1 w-full'
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
                className='p-2 pl-3 outline-none border-2 border-slate-300 rounded-md text-sm w-full'  
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className='absolute text-xs right-3 top-3 text-white/70'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword
                  ? "Hide"
                  : "Show"
                }
              </button>
            </div>
            
          </div>

        </div>

      </form>

    </div>
  )
}

export default Register