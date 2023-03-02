import React from 'react'
import { useOrdersData } from '../../hooks/useMyOrdersData'
import { useProductsData } from '../../hooks/useProductsData'

function MyOrdersList() {
    const { data: orders, isLoading, isError, error, isFetching } = useOrdersData(onSuccess, onError)

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


  return (
     <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"'>
          <tr className='p-2 m-1'>
            <th scope="col" className="px-6 py-3">#</th>
            <th scope="col" className="px-6 py-3">Order Date</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? <tr><td>No orders Found</td></tr> :
            (
              orders.map((order, index) => (
                <tr key={order._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                  <td className="px-6 py-4">{order.orderDate}</td>
                  <td className="px-6 py-4">{order.status}</td>
                </tr>)
              )
            )}
        </tbody>
      </table>


    </div>
  )
}

export default MyOrdersList