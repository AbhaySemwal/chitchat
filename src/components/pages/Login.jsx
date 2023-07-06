import React from "react";
function Login(){
    return(
        <div className="bg-gray-800 h-screen flex justify-center items-center">
        <div class="w-full max-w-sm">
            <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center text-2xl mb-4 font-black">ChitChat</h1>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
            </div>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
            <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
            </div>
            <p className="text-xs font-medium text-center pt-4">Don't have an account?<a className="text-blue-600 underline cursor-pointer">Register</a></p>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2023 Abhay Semwal All rights reserved.
        </p>
        </div>
    </div>
    );
}
export default Login;