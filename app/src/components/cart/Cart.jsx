import React from 'react'
import { useCart } from '../../hooks/useCart'
import CartItem from './CartItem';
import { useMutation } from '@tanstack/react-query';
import { useAlert } from '../Alert/AlertContext';
import { AlertActions } from '../Alert/alert.actions';
import api from '../../api/common.http';
import { useNavigate } from 'react-router-dom';
import { useProductsData } from '../../hooks/useProductsData'
import {BiCartAlt} from 'react-icons/bi'


function Cart() {
    // eslint-disable-next-line no-unused-vars
    const [_, dispatch] = useAlert()
    const navigate = useNavigate()
    const cart = useCart()

    const { data: products, isLoading, isError, error, isFetching } = useProductsData(onSuccess, onError)

    const postOrderMutation = useMutation({
        mutationFn: () => api.post('/order/add', { details: mapToBody(cart.items) }),
        onError: (error) => {
            dispatch(AlertActions.showErrorAlert(error.message))
        },
        onSuccess: (res) => {
            cart.cleanCart()
            dispatch(AlertActions.showInfoAlert(res?.data?.message))
            navigate('/')
        }
    })

    function onSuccess(data) {
        console.log(data)
    }

    function onError(error) {
        console.log(error)
    }


    if (isLoading || isFetching) {
        return <h1>Loading ...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const productsCount = cart.items.reduce((sum, p) => sum + p.quantity, 0);

    function getProductData(id) {
        return products.find(product => product._id === id);
    }

    function mapToBody(items) {
        return items.map(item => {
            return ({
                product: item.id,
                qte: item.quantity
            })
        })
    }

    const totalCost = cart.items.reduce((sum, currentProduct) => sum + getProductData(currentProduct.id)?.price, 0);

    const postOrderHandler = () => {
        postOrderMutation.mutate({ ...cart.items })
    }

    return (
        <div className="flex justify-center w-full">
            <div className="text-center bg-white rounded-lg shadow-lg">
                <div className="px-6 py-3 border-b border-gray-300">
                    Shopping Cart <BiCartAlt style={{fontSize:"3rem"}}/>
                </div>
                <div className="flex flex-col w-auto p-2 m-1">
                    {
                        productsCount > 0 ?
                            (<>
                                <p className='text-gray-700'>Items in your cart:</p>
                                {
                                    cart.items.map(currentProduct => {
                                        return (<CartItem key={currentProduct.id}
                                            id={currentProduct.id}
                                            quantity={currentProduct.quantity}
                                        />)
                                    })
                                }
                                <h1>Total Cost : {totalCost.toFixed(3)}</h1>
                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white 
                    font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={() => {
                                        postOrderHandler()
                                    }}>
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