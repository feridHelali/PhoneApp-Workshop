import React from 'react'
import getPhotoUrl from '../../utils/getPhotoUrl';
import { useCart } from '../../hooks/useCart'
import {useAuth} from "../../hooks/useAuth"

function ProductCard(props) {
  const { id, label, brand, category, price, photo_url } = props;
  const {user}=useAuth()
  const cart = useCart()
  const productQuantity = cart.getProductQuantity(id);

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img className="rounded-t-lg" src={getPhotoUrl(photo_url)} alt="product" />

        <div className="p-5">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h3>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{label}</h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category}</p>
          <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 focus:ring-4 focus:outline-none text-lg">
            {price.toFixed(3)}
          </p>
          {productQuantity > 0 ?
            (<>
              <div className='flex flex-row align-middle justify-center'>
                <button className='items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 
          rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
           dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-3 m-4 w-12'
                  onClick={() => {
                    cart.addOneToCart(id)
                  }}
                > + </button>
                <span className='px-1'>In Cart: {productQuantity}</span>
                <button className='items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 
          rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600
           dark:hover:bg-red-700 dark:focus:ring-red-800 p-3 m-4 w-12'
                  onClick={() => {
                    cart.removeOneFromCart(id)
                  }}> - </button>
              </div>

            </>) : (
              <button className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 
          rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
           dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${!user?'disabled:bg-gray-400':""}`}
                disabled={!user?true:false}
                onClick={() => {
                  cart.addOneToCart(id)
                }}>
                Add To Cart
              </button>
            )
          }
        </div>
      </div>

    </>
  )
}

export default ProductCard;

