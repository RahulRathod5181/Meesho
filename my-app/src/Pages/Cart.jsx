
import {useEffect,useState} from "react"
import axios from "axios"
let data = JSON.parse(localStorage.getItem("cart"));

const getData = () => {
    // console.log(name)
    return axios.get(`https://meshoproductapi.onrender.com/boys`)
}


function Cart(){
    const [cartData,setCartData] = useState([])
    useEffect(()=>{
        getData().then((res)=>{
            console.log(res.data)
            setCartData(res.data)
        }).catch((err)=>console.log(err))
    },[])

    return (
        <h1>Hello Cart</h1>
    )
}

export default Cart;