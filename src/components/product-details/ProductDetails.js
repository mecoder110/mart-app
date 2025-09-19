import axios from "axios";


const url = "https://fakestoreapi.com/products";

export function productDetails(id, setProductDetail){

    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        console.log(res)
        setProductDetail(res.data)
    }).catch((err)=>{
        console.log("====>>> "+err)
    })
}