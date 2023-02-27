import { Box, Flex, Img, Button, HStack, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react"

import { AuthContext } from "../Components/AuthContext";
const getData = () => {
    // console.log(name)
    return axios.get(`https://63cadb86d0ab64be2b5c2749.mockapi.io/boys`)
}


function PaymentSuccess() {

    let nav = useNavigate()
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        getData().then((res) => {
            // console.log(res.data)
            setCartData(res.data)
        })
    }, [])
    const handleQty = (id, payload) => {
        console.log("line 24", id, payload)
        let updatedData = cartData.map((el) =>
            el.id === id ? { ...el, quantity: el.quantity + (+payload) } : el);
        setCartData(updatedData)
        console.log("line 28", updatedData)
    }
    let total = cartData.reduce((acc, curr) => {
        acc += curr.quantity * curr.price
        // console.log(curr.quantity)
        return acc
    }, 0)
    // console.log(cartData)
    return (
        <>
            <Flex width="80%" margin="auto" mt="30px" >
                <Box borderRight="1px solid rgb(208 215 220)">
                    <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(60 69 85)", paddingRight: "7px" }}>Total Orders</p>
                </Box>
                <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(104 106 139)", paddingLeft: "7px" }}>{cartData.length}</p>
            </Flex>
            <Flex width="75%" m="auto" justify={"space-around"} wrap="wrap">
                <Box width="50%" mb="10px">
                    {cartData?.map((el) => (
                        <Flex border="1px solid rgb(208 215 220)" borderRadius={"7px"} mt="15px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                            <Box>
                                <Img src={el.image} borderRadius="10px" width="130px" h="150px" p="20px" ></Img>
                            </Box>
                            <Box mt="15px">
                                <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(60 69 85)" }}>{el.title}</p>
                                <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(244, 51, 151)", marginTop: "5px" }}>Order Placed</p>

                            </Box>
                        </Flex>
                    ))}
                </Box>
                <Box width="40%" borderLeft="1px solid rgb(198 200 203)" mt="16px">
                    <Box>
                        <Img width="80%" m="auto" src="https://images.meesho.com/images/marketing/1588578650850.webp"></Img>
                    </Box>

                </Box>
            </Flex>
        </>
    )
}

export default PaymentSuccess;