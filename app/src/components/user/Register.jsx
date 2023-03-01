
import { useMutation,/* useQueryClient */ } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/common.http'
import { AlertActions } from '../Alert/alert.actions'
import { useAlert } from '../Alert/AlertContext'

function Register() {
  const [_, dispatch] = useAlert()
 // const queryClient = useQueryClient()
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: ""
  })

  const newUserMutation = useMutation({
    mutationFn: (userInfo) => api.post('/user/register', userInfo),
    onError: (error) => {
      dispatch(AlertActions.showErrorAlert(error?.response?.data?.error))
    },
    onSuccess: () => {
      navigate("/")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    newUserMutation.mutate(userInfo)
  }

  return (
    <section className="h-screen bg-gray-200">
      <div className="h-full px-6 text-gray-800 shadow-md">
        <div className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-center g-6 ">
          <div className="p-4 m-4 mb-12 rounded-md xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0 bg-slate-300">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row items-center justify-center p-3 m-2 lg:center">
                <p className="mb-0 mr-4 text-lg text-center">Sign Up</p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="fullName"
                  placeholder="User Name"
                  value={userInfo.fullName}
                  onChange={(event) => {
                    setUserInfo({ ...userInfo, fullName: event.target.value })
                  }}
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                  value={userInfo.email}
                  onChange={(event) => {
                    setUserInfo({ ...userInfo, email: event.target.value })
                  }}
                />
              </div>


              <div className="mb-6">
                <input
                  type="password"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                  value={userInfo.password}
                  onChange={(event) => {
                    setUserInfo({ ...userInfo, password: event.target.value })
                  }}
                />
              </div>
              <div className="flex justify-center text-center lg:text-left">
                <button
                  type="submit"
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