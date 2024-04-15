import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-clients"

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform{
    id:number
    name:string
    slug:string
}

const usePlaforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll,
    staleTime:24*60*60*1000,
    // initialData: { count:platforms.length, results:platforms}

    
})

export default usePlaforms