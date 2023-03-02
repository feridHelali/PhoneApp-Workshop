import { useQuery } from "@tanstack/react-query"
import api from "../api/common.http"



export const useProductsData =(onSuccess,onError)=>{
        return useQuery({
            queryKey:['products'],
            queryFn:async()=> await api.get(`/product/all`),
            onSuccess,
            onError,
            select:(data)=>data.data.data,
            staleTime:30000
        })
}