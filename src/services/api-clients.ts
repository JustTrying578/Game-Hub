import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2435fb9a21534fb8962e8d3785f99d46'
    }
})