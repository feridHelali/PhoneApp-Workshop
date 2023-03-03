import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Logo from '../../logo.png';
import { useNavigate } from 'react-router-dom';
import Avatar from "../../assets/avatar.jpg"
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import {BiCartAlt} from 'react-icons/bi'



function Navbar() {
  const { items, cleanCart } = useCart()

  const productCount = items.reduce((sum, product) => sum + product.quantity, 0);
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated()
  }, [user, logout, isAuthenticated])

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex">
            <img src={Logo} alt="logo" className='w-16 p-1 m-1' />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Phone Shop</span>
          </Link>
          <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/products" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
              </li>
              <li className='px-3 flex flex-row'>
                <Link to='/cart' >
                  <BiCartAlt style={{fontSize:"1.7rem"}}/>
                     ({productCount}) items
                </Link>
              </li>
              <li>
                <Link to="/myorders" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >My Orders
                </Link>
              </li>
              <li>
                <div className='flex justify-center align-middle'>
                  {!user ? (<button className='text-slate-800'
                    onClick={() => {
                      navigate('/login')
                    }}
                  >login</button>) :
                    (<div className='flex flex-row justify-center align-middle'>
                      <span className='p-1 m-1'>{user.fullName}</span>
                      <img src={Avatar} alt='avatar' className='h-12 p-2 m-2' />
                      <span className='p-1 m-1 cursor-pointer'
                        onClick={() => {
                          cleanCart()
                          logout();
                          navigate('/');
                        }}>logout</span>
                    </div>)}
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

