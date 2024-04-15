import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "../services/api-clients"
import apiClients from "../services/api-clients"



interface Platform{
    id:number
    name:string
    slug:string
}

const usePlaforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClients.get<FetchResponse<Platform>>('/platforms/lists/parents').then((res) => res.data),
    staleTime:24*60*60*1000,
    // initialData: { count:platforms.length, results:platforms}

    
})

export default usePlaforms