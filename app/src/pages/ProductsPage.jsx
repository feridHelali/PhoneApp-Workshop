import React from 'react';
import { useEffect, useState } from 'react'

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      fetch('http://localhost:3010/product/all')
        .then(data => data.json())
        .then(json => json.payload)
        .then(products => setProducts([...products]))
        .catch(error => console.log(error.message))

    }
    getProducts()
  }, [])
  return (
    <div>
      <h1 className='text-center text-blue-700'>All Products</h1>
      <div className='flex flex-row p-2 m-2'>
        <button className='w-1/4 p-1 m-1 text-blue-200 bg-blue-700 rounded-md hover:bg-blue-300'>
          Add Product
        </button>
        <select className='w-1/2 p-1 m-1 font-mono text-gray-800 rounded-md border-spacing-2 '>
          <option value="Smart Phone" onChange={e=>{}}>Smart Phone</option>
          <option value="Tablet" onChange={e=>{}}>Tablet</option>
      </select>
      </div>

      <pre><code>
        {JSON.stringify(products, undefined, 3)}
      </code></pre>
    </div>
  )
}

export default ProductsPage

//TODO : to implement ProductPage