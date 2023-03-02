import React from 'react'
import ProductCard from '../components/product/ProductCard';
import { useProductsData } from '../hooks/useProductsData';



function Home() {

  const onSuccess=(data)=>{
    console.log(data)
  }

  const onError=(error)=>{
    console.log(error)
  }

  const {data:products,isLoading,isError,error,isFetching}=useProductsData(onSuccess,onError)
 
  if(isLoading || isFetching){
    return <h1>Loading ...</h1>
  }

  if(isError){
    return <h1>{error.message}</h1>
  }

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

