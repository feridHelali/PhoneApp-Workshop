import React from 'react';
import { useEffect, useState } from 'react'
import ProductList from '../components/product/ProductList';
import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [removeProduct,setRemoveProduct]=useState(false)

  const navigate = useNavigate()

  const deleteProduct=async (id)=>{
     await fetch(`http://localhost:3010/product/${id}`,
     {method:"DELETE"})
    .then(data=>data.json())
    .then(json=>{
      if(json.Error){
        Swal.fire({
          title: 'Error!',
          text: json.Error,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'Delete Product',
          text: 'Product deleted succesfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        setRemoveProduct(prev=>!prev);

      }
    })
  }

  useEffect(() => {
    const getProducts = async () => {
      fetch('http://localhost:3010/product/all')
        .then(data => data.json())
        .then(json => json.payload)
        .then(products => setProducts([...products]))
        .catch(error => console.log(error.message))

    }
    getProducts()
  }, [removeProduct])
  return (
    <div>
      <h1 className='text-center text-blue-700'>All Products</h1>
      <div className='flex flex-row p-2 m-2'>
        <button 
        className='w-1/4 p-1 m-1 text-blue-200 bg-blue-700 rounded-md hover:bg-blue-300'
        onClick={()=>{
         navigate('/product/add')
        }}
        >
          Add Product
        </button>
        <select className='w-1/2 p-1 m-1 font-mono text-gray-800 rounded-md border-spacing-2 '>
          <option value="Smart Phone" onChange={e=>{}}>Smart Phone</option>
          <option value="Tablet" onChange={e=>{}}>Tablet</option>
      </select>
      </div>

     <ProductList products={products} deleteProduct={deleteProduct}/>
    </div>
  )
}

export default ProductsPage

