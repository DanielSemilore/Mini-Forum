import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
        <button>

        </button>
      </form>
    </div>
  )
}

export default Signup