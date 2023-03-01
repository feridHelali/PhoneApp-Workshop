import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from '../components/product/ProductCard';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      fetch('http://localhost:3010/product/all')
        .then(data => data.json())
        .then(json => json.data)
        .then(products => setProducts([...products]))
        .catch(error => console.log(error.message))

    }
    getProducts()
  }, [])

  return (
    <div className='flex flex-wrap self-center justify-center flex-grow gap-2 p-2 m-1 md:flex-row sm:flex-col'>
      {
        products.map(product=>(
          <ProductCard key={product._id} 
          id={product._id} 
          label={product.label} 
          brand={product.brand}
          category={product.category}
          price={product.price}
          photo_url={product.photo_url || 'https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.standard'}
        />))
      }
    </div>
  )
}

export default Home

