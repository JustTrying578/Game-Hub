import usePlaforms from "./usePlatforms"

const usePlatform = (id?:number) =>{
    const {data:platforms} = usePlaforms()
    return platforms?.results.find(
      (p: { id: number }) => p.id === id
    )
}

export default usePlatform