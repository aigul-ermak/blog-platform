import React from "react";

function Login() {
    return (
        <div className="min-h-screen px-10 flex items-center">
            <div className="container mx-auto max-auto max-w-lg h-fit p-5 bg-dark-purple rounded-xl shadow-md">
                <div className="mb-3">
                    <h3 className="block text-5xl font-bold text-blue-600 mb-1">Sign in</h3>
                    <h3><a href="/#">Create Account</a></h3>    
                </div>       
            <div className="mb-1">
                <label className="block mb-l font-semibold text-sm">E-mail Address:</label>
                <input className="p-2 outline-none focus:ring-2 focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2" type="text" placeholder="E-mail Address"/>
            </div>
            <div className="mb-1">
                <label className="block mb-l font-semibold text-sm">Password</label>
                <input className="p-2 outline-none focus:ring-2 focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2" type="password" placeholder="Password"/>
            </div>
            <button className="bg-gray-100 container focus:ring focus:ring-blue-600 hover>bg-blue 500 transition-all outline-none mt-6 bg-blue-400 py-2 font semibold text-white uppercase rounded">Login</button>
            </div>
        </div>

    )
}

export default Login