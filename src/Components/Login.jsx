import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen space-y-4" style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <button className="absolute top-4 right-4 px-4 py-2 bg-gray-300 rounded" onClick={() => setDarkMode(!darkMode)}>    
                {darkMode ? 'Light' : 'Dark'} Mode
            </button> 
            <div className='flex flex-col gap-4 items-right justify-right absolute top-25 right-25'>  
                <h1 className="text-7xl font-bold">Log in</h1>
                <form className='flex flex-col gap-4'>
                    <label className='mt-2'>
                        <input className='text-black w-100 h-15 rounded-xl border border-1 p-1 text-3xl' type="text" name="email or number" placeholder='Email or Phone' />
                    </label>
                    <label className='pt-2'>
                        <input placeholder="Password" className='text-black w-100 h-15 rounded-xl border border-1 p-1 text-3xl' type="password" name="password" />
                    </label>
                    <button type="submit" className="w-100 shadow h-20 bg-blue-500 rounded-xl text-3xl font-bold">Login</button>
                    <p className="font-bold text-2xl">
                        <em>Don't have an account?</em>
                    </p>
                    <button className="w-100 hover:bg-green-600 shadow h-20 bg-green-500 rounded-xl text-3xl font-bold">
                        <nav>
                            <a href="/signup" target="_blank" className="w-100 h-20 hover:underline hover:text-blue-500 hover:scale-105 transition-transform active:scale-95 active:bg-red-500">Sign Up</a>
                        </nav>
                    </button>
                </form>
            </div>
            <div className="absolute insert-0 m-auto w-[235px] h-[230px] border border-black rounded-full bg-gradient-to-b from-green-500 to-green-600 left-60 top-55">

            </div>
        </div>
    </div>
  )
}

export default Login