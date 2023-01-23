import React from 'react'

function Register() {
  return (
    <section className="h-screen bg-gray-200">
      <div className="h-full px-6 text-gray-800 shadow-md">
        <div className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-center g-6 ">
          <div className="p-4 m-4 mb-12 rounded-md xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0 bg-slate-300">
            <form>
              <div className="flex flex-row items-center justify-center p-3 m-2 lg:center">
                <p className="mb-0 mr-4 text-lg text-center">Sign Up</p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="fullName"
                  placeholder="User Name"
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                />
              </div>


              <div className="mb-6">
                <input
                  type="password"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                />
              </div>



              <div className="flex justify-center text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;

//TODO : to implement Register