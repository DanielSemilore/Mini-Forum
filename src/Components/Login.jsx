import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ChatIllustration from './ChatIllustration'

const Login = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const [state, handleSubmit] = useForm("xyzdbvzp");
    if (state.succeeded) {
      return <p>Thanks for joining Back!</p>;
    }
    return (
        <div className={`transition-colors duration-300 min-h-screen flex items-center justify-center w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <button aria-label="Toggle dark mode" className="fixed top-4 right-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500 z-50" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Light' : 'Dark'} Mode
            </button>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 md:p-8">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full flex justify-center items-center">
                        <div className="transition-all duration-300 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] flex justify-center items-center mx-auto sm:mx-0">
                            <div className="w-full">
                                <div className="block sm:hidden">
                                    <div className="blur-sm opacity-80">
                                        <ChatIllustration />
                                    </div>
                                </div>
                                <div className="hidden sm:block">
                                    <ChatIllustration />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center sm:text-left mt-4 sm:mt-8">
                        <span>Mini</span>
                        <span>-Forum</span>
                    </div>
                </div>
                <div className="rounded-2xl shadow-lg p-4 sm:p-8 w-full bg-white dark:bg-gray-800 transition-colors duration-300 flex items-center">
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-center">
                            Log in
                        </h2>
                        <form onSubmit={handleSubmit} method="post" action="https://formspree.io/f/xyzdbvzp" encType="multipart/form-data" className="flex flex-col gap-6" autoComplete="on">
                            <label className="flex flex-col gap-2 text-base sm:text-lg font-medium">
                                <input required autoComplete="email" className="text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 w-full h-12 sm:h-16 rounded-xl border border-gray-300 dark:border-gray-600 px-4 text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" type="email" name="email or number" placeholder="Email" />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </label>
                            <label className="flex flex-col gap-2 text-base sm:text-lg font-medium">
                                <input placeholder="Password" required autoComplete="current-password" className="text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 w-full h-12 sm:h-16 rounded-xl border border-gray-300 dark:border-gray-600 px-4 text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition" type="password" name="password" />
                                <ValidationError prefix="Password" field="password" errors={state.errors} />
                            </label>
                            <nav>
                                <a href="/Forget" rel="noopener noreferrer" className="inline-block mt-2 text-blue-500 hover:underline hover:text-blue-700 hover:bg-blue-100 text-base sm:text-xl">
                                Forgot Password?
                                </a>
                            </nav>
                            <button type="submit" disabled={state.submitting} className="w-full h-12 sm:h-16 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-xl sm:text-3xl font-bold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Login
                            </button>
                            <div className="text-center">
                                <p className="font-bold text-base sm:text-xl pt-4">
                                    <em>Don't have an account?</em>
                                </p>
                                <a href="/signup" rel="noopener noreferrer" className="inline-block mt-4 w-full h-12 sm:h-16 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-xl text-xl sm:text-3xl font-bold shadow transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;