import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div
      className='relative font-poppins bg-slate-800 min-h-screen h-full w-full text-white pt-20'
    >
      <BrowserRouter>
        <Routes>
            <Route
              index 
              element={<Home/>}
            />
            <Route
              path={'/Register'}
              element={<Register/>}
            />
            <Route
              path={'/Login'}
              element={<Login/>}
            />
            <Route
              path={'/Register'}
              element={<Register/>}
            />
        </Routes>
        <Layout></Layout>
      </BrowserRouter>
    </div>
    
  )
}

export default App
