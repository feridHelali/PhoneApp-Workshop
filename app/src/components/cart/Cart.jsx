import React from 'react'
import { useCart } from '../../hooks/useCart'
import useGetProduct from '../../hooks/useProducts';
import CartItem from './CartItem';


function Cart() {
    const cart = useCart()
    const { products,error, isLoading } = useGetProduct();
    const productsCount = cart.items.reduce((sum, p) => sum + p.quantity, 0);

    function getProductData(id) {
        return products.find(product => product._id === id);
    }

    const totalCost = cart.items.reduce((sum, currentProduct) => sum + getProductData(currentProduct.id)?.price, 0);


    if(isLoading){
        return <h1>Il Loading ...</h1>
    }

    if(error){
        return <h1>Error</h1>
    }

    return (
        <div className="flex justify-center w-full">
            <div className="max-w-sm text-center bg-white rounded-lg shadow-lg">
                <div className="px-6 py-3 border-b border-gray-300">
                    Shopping Cart
                </div>
                <div className="flex flex-col w-auto p-2 m-1">
                    {
                        productsCount > 0 ?
                            (<>
                                <p className='text-gray-700'>Items in your cart:</p>
                                {
                                    cart.items.map(currentProduct => {
                                        return (<CartItem key={currentProduct.id} id={currentProduct.id} quantity={currentProduct.quantity} />)
                                    })
                                }
                                <h1>Total Cost : {totalCost.toFixed(3)}</h1>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white 
                    font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Order Now !
                                </button>
                            </>)
                            :
                            (<>
                                <h1 className='text-gray-700'>There are no items in your cart!</h1>
                            </>)

                    }
                </div>
                <div className="px-6 py-3 text-gray-600 border-t border-gray-300">
                    Cart ({productsCount}) items
                </div>
            </div>
        </div>
    )
}

export default Cart