import { useEffect, useState } from "react";


function useGetProduct() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    async function getAllProducts() {
        fetch('http://localhost:3010/product/all')
            .then(data => data.json())
            .then(json => setProducts(json.data))
            .catch(error => {
                setError(true);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(()=>{
            getAllProducts()
    },[])

    return {products,error,loading}
}

export default useGetProduct;