import React from 'react'
import { useState } from 'react'
import ChatIllustration from './ChatIllustration'
import { useForm, ValidationError } from '@formspree/react';

const Signup = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const [state, handleSubmit] = useForm("xdklpvyb");
    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
  return (
    <div className=" transition-colors duration-300 min-h-screen flex items-center justify-center bg-gray-50 w-full" style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
        <div className="flex flex-col items-center justify-center h-screen space-y-4" style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <button aria-label="Toggle dark mode" className="fixed top-4 right-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 z-50" onClick={() => setDarkMode(!darkMode)}>    
                {darkMode ? 'Light' : 'Dark'} Mode
            </button>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 md:p-8">
                <div className="flex justify-center items-center">
                    {/*icon place*/}
                </div>
                <div className="rounded-2xl shadow-lg p-6 sm:p-8 w-full bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className='flex flex-col gap-4 items-right justify-right absolute top-25 right-25'>  
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">Create your account</h1>
                        <span className="text-4xl font-medium mb-8 text-gray-500">Get started with Mini-Forum</span>
                        <form onSubmit={handleSubmit} method='post' action="https://formspree.io/f/xdklpvyb" enctype="multipart/form-data" className="flex flex-col gap-6" autoComplete="on">
                            <label className='flex flex-col gap-2 text-lg font-medium'>
                                <span className="text-2xl">Username:</span>
                                <input required autoComplete="Username" className='text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 w-full h-20 rounded-xl border border-gray-300 dark:border-gray-600 px-4 text-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="text" name="Username" placeholder='your_Username' />
                                <ValidationError prefix="text" field="Username" errors={state.errors} />
                            </label>
                            <label className='flex flex-col gap-2 text-lg font-medium'>
                                <span className="text-2xl">Email:</span>
                                <input required autoComplete="email" className='text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 w-full h-20 rounded-xl border border-gray-300 dark:border-gray-600 px-4 text-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="email" name="email or number" placeholder='Someone@example.com' />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </label>
                            <label className='flex flex-col gap-2 text-lg font-medium'>
                                <span className="text-2xl">Password:</span>
                                <input placeholder="*********" required autoComplete="current-password" className='text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 w-full h-20 rounded-xl border border-gray-300 dark:border-gray-600 px-4 text-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="password" name="Password" />
                                <ValidationError prefix="Password" field="password" errors={state.errors} />
                            </label>
                            <label className='flex flex-col gap-2 text-lg font-medium'>
                                <span className="text-2xl">Comfirm Password:</span>
                                <input placeholder="**********" required autoComplete="current-password" className='text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 w-full h-20 rounded-xl border border-gray-300 dark:border-gray-600 px-4 text-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="password" name="Password" />
                                <ValidationError prefix="Password" field="password" errors={state.errors} />
                            </label>
                            <button type="submit"  disabled={state.submitting} className="w-full h-20 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-4xl font-bold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
                            <div className="text-center">
                                <p className="font-bold text-2xl pt-5 text-lg">
                                    <em>Already have an account</em>
                                </p>
                                <button className="mt-5 ml-20 w-100 hover:bg-green-600 h-20 bg-green-500 rounded-xl text-4xl font-bold">
                                    <nav>
                                        <a href="/Login" rel="noopener noreferrer" className="inline-block mt-4 w-full h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-xl text-4xl font-bold shadow transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500">Login</a>
                                    </nav>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Signup;