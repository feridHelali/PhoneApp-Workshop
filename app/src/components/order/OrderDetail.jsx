import React from 'react'

function OrderDetail({detail}) {
  return (
    <table>
        <thead>
            <tr>
            <th className='px-2 py-1'>Product</th>
            <th className='px-2 py-1'>Price</th>
            <th className='px-2 py-1'>Qte</th>
            </tr>
        </thead>
        <tbody className=''>
        {
            detail.map((line,index)=>{
                return(<tr key={index}>
                    <td className='px-2 py-1'>{line?.product.label}</td>
                    <td className='px-2 py-1 justify-end align-middle'>{line?.product?.price?.toFixed(3)}</td>
                    <td className='px-2 py-1'>{line?.qte}</td>
                </tr>)
            })
        }

        </tbody>
    </table>
  )
}

export default OrderDetail