import axios from "axios";
const url = "https://fakestoreapi.com/products"

export function getProducts(setProductData) {

    return axios.get(url).then((resp) => {
        // console.log(product.data[0].id);
        setProductData(resp.data);
    }).catch((err) => {
        console.log(err);
    })
}

export function categoryFilter(category, setProductData) {
    if (category) {
        return axios.get(url).then((resp) => {
            setProductData(resp.data.filter((item)=>{
                return (item.category===category)
            }))
        }).catch((err) => {
            console.log("=== Error ===> " + err)
            alert(Error)
        })
    } else {
        return getProducts(setProductData)
    }
}