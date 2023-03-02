import { useQuery } from "@tanstack/react-query"
import api from "../api/common.http"



export const useOrdersData =(onSuccess,onError)=>{
        return useQuery({
            queryKey:['orders'],
            queryFn:async()=> await api.get(`/order/my-orders`),
            onSuccess,
            onError,
            select:(res)=>res.data.data.map(order=>order),
            staleTime:30000
        })
}