import React from 'react'
import { useState } from 'react'
import ChatIllustration from './ChatIllustration'

const Login = () => {
    const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 w-full" style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
        <div className="flex flex-col items-center justify-center h-screen space-y-4" style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <button className="absolute top-4 right-4 px-4 py-2 bg-gray-300 rounded" onClick={() => setDarkMode(!darkMode)}>    
                {darkMode ? 'Light' : 'Dark'} Mode
            </button>
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
                <ChatIllustration />
                <div className="bg-white rounded-2xl p-8">
                    <div className='flex flex-col gap-4 items-right justify-right absolute top-25 right-25'>  
                        <h1 className="text-7xl font-bold">Log in</h1>
                        <form className='flex flex-col gap-4'>
                            <label className='mt-2'>
                                <input className='text-black w-100 h-15 rounded-xl border border-1 p-1 text-3xl' type="text" name="email or number" placeholder='Email or Phone' />
                            </label>
                            <label className='pt-2'>
                                <input placeholder="Password" className='text-black w-100 h-15 rounded-xl border border-1 p-1 text-3xl' type="password" name="password" />
                            </label>
                            <button type="submit" className="w-100 h-20 bg-blue-500 rounded-xl text-3xl font-bold">Login</button>
                            <p className="font-bold text-2xl pt-5">
                                <em>Don't have an account?</em>
                            </p>
                            <button className="mt-5 ml-20 w-100 hover:bg-green-600 h-20 bg-green-500 rounded-xl text-3xl font-bold">
                                <nav>
                                    <a href="/signup" target="_blank" className="w-100 h-20 hover:underline hover:text-blue-500 hover:scale-105 transition-transform active:scale-95 active:bg-red-500">Sign Up</a>
                                </nav>
                            </button>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Login