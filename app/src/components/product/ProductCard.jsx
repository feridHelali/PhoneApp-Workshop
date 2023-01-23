import React from 'react'

function ProductCard(props) {
  const { label, brand, category, price, photo_url } = props;
  return (
    <>

      <div className="w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img className="rounded-t-lg" src={photo_url} alt="product" />

        <div className="p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h3>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{label}</h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category}</p>
          <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {price.toFixed(3)}
           
          </p>
        </div>
      </div>

    </>
  )
}

export default ProductCard;

