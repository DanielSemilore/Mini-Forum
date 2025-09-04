import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 items-right justify-right ml-185 mt-30'>  
            <h1 className="text-7xl font-bold">Log in</h1>
            <form className='flex flex-col gap-4'>
                <label className='mt-2'>
                    <input className='w-100 h-15 rounded-xl border border-1 p-1 text-3xl' type="text" name="email or number" placeholder='Email or Phone' />
                </label>
                <label className='pt-2'>
                    <input placeholder="Password" className='w-100 h-15 rounded-xl border border-1 p-1 text-3xl' type="password" name="password" />
                </label>
                <button type="submit" className="w-100 shadow h-20 bg-blue-500 rounded-xl text-3xl font-bold">Login</button>
                <p className="font-bold text-2xl">
                    <em>Don't have an account?</em></p>
                <button className="h-20 rounded-xl px-4 py-2 shadow-md">
                    <nav>
                        <a href="/signup" target="_blank" className="">Sign Up</a>
                    </nav>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Lo