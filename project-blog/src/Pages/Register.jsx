import React from 'react'

const Register = () => {
  return (
    <div className='bg-gray-200 min-h-screen px-10 flex items-center'>
        <div className='container max-w-lg mx-auto h-fit p-5 bg-dark-purple rounded-xl shadow-md shadow-gray-300'>
            <div className='mb-3'>
                <h3 className='block text-5xl font-bold text-blue-600 mb-1'>Create Account</h3>
                <h3><a href='/'> Sign in to your existing account</a></h3>
            </div>

            <div>
                <label className='block mb-1 font-semibold text-sm'>Full Name:</label>
                <input className='p-2 outline-none focus:ring focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2' type="text" placeholder="Full Name"/>
            </div>

            <div>
                <label className='block mb-1 font-semibold text-sm'>E-mail Address:</label>
                <input className='p-2 outline-none focus:ring focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2' type="text" placeholder="E-mail Address"/>
            </div>

            <div>
                <label className='block mb-1 font-semibold text-sm'>Password:</label>
                <input className='p-2 outline-none focus:ring focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2' type="text" placeholder="Password"/>
            </div>

            <button className='container focus:ring focus:ring-blue-300 hover:bg-blue-500 transition-all outline-none mt-6 bg-blue-400 py-2 font-semibold text-white uppercase rounded'>Create</button>

        </div>
    </div>
  )
}

export default Register