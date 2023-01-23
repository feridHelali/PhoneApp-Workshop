import React from 'react'
import { useNavigate } from 'react-router-dom';


function ProductList({ products,deleteProduct }) {
  const navigate=useNavigate()
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"'>
          <tr className='p-2 m-1'>
            <th scope="col" className="px-6 py-3">#</th>
            <th scope="col" className="px-6 py-3">Photo</th>
            <th scope="col" className="px-6 py-3">Label</th>
            <th scope="col" className="px-6 py-3">Brand</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? <tr><td>No Products Found</td></tr> :
            (
              products.map((product, index) => (
                <tr key={product._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                  <td className="px-6 py-4">
                    <img src={product.photo_url} alt='cover'
                    className='w-32 p-1 m-2 shadow-md'
                    /></td>
                  <td className="px-6 py-4">{product.label}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price.toFixed(3)}</td>
                  <td className="px-6 py-4">
                    <button
                      className='p-2 m-2 bg-red-700 rounded-md shadow-md cursor-pointer text-gray-50 hover:bg-red-500'
                      onClick={(e) => { 
                        deleteProduct(product._id)
                      }}
                    >delete</button>
                    <button
                      className='p-2 m-2 bg-green-700 rounded-md shadow-md cursor-pointer text-gray-50 hover:bg-green-500'
                      onClick={() => {
                        navigate(`/product/update/${product._id}`)
                       }}
                    >update</button>
                  </td>
                </tr>)
              )
            )}
        </tbody>
      </table>


    </div>
  )
}

export default ProductList;

