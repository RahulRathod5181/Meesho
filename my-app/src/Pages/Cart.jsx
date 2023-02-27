import { Box, Flex, Img, Button, HStack, Heading, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import emptyGif from "../Images/emptyCart.gif"
import { useContext } from "react"
import { AuthContext } from "../Components/AuthContext";
const getData = () => {
    // console.log(name)
    return axios.get(`https://63cadb86d0ab64be2b5c2749.mockapi.io/boys`)
}


function Cart() {
    const { handleTotal, mainTotal } = useContext(AuthContext)
    let nav = useNavigate()
    const [cartData, setCartData] = useState([])
    const [isLoading,setLoading] = useState([])
    useEffect(() => {
        setLoading(true)
        getData().then((res) => {
            // console.log(res.data)
            setCartData(res.data)
        }).catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
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

    const handleDelete = (id) => {
        axios.delete(`https://63cadb86d0ab64be2b5c2749.mockapi.io/boys/${id}`)
            .then(() => {
                getData().then((res) => {
                    setCartData(res.data)
                })
            })
    }

    const handlePayment = () => {
        handleTotal(total + 66)
        console.log(mainTotal)
        return nav("/orderplace")
    }


    return (
        <>
            {!isLoading?( <>
            {total ? (
                <>
                    <Flex width="80%" margin="auto" mt="30px" >
                        <Box borderRight="1px solid rgb(208 215 220)">
                            <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(60 69 85)", paddingRight: "7px" }}>Cart Item</p>
                        </Box>
                        <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(104 106 139)", paddingLeft: "7px" }}>{cartData.length}</p>
                    </Flex>
                    <Flex width="75%" m="auto" justify={"space-around"}>
                        <Box width="50%" mb="10px">
                            {cartData?.map((el) => (
                                <Flex border="1px solid rgb(208 215 220)" borderRadius={"7px"} mt="15px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                                    <Box>
                                        <Img src={el.image} borderRadius="10px" width="130px" h="150px" p="20px" ></Img>
                                    </Box>
                                    <Box mt="15px">
                                        <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(60 69 85)" }}>{el.title}</p>
                                        <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(60 69 85)", marginTop: "5px" }}>₹{el.price}</p>
                                        <Flex align={"center"} mt="7px">
                                            <Button data-testid="quantity-increment" onClick={() => {
                                                handleQty(el.id, 1);
                                            }}>+</Button>
                                            <h2 data-testid="product-quantity" style={{ marginLeft: "4px", marginRight: "4px" }}>{el.quantity}</h2>
                                            <Button data-testid="quantity-decrement" onClick={() => {
                                                handleQty(el.id, -1);
                                                // console.log(quantity)
                                            }} isDisabled={el.quantity < 2}>-</Button>
                                            <Button ml="100px" color="rgb(244, 51, 151)" onClick={() => handleDelete(el.id)}>Remove</Button>
                                        </Flex>
                                    </Box>
                                </Flex>
                            ))}
                        </Box>
                        <Box width="40%" borderLeft="1px solid rgb(198 200 203)" mt="16px">
                            <Box ml="47px" mt="16px">
                                <p style={{ fontSize: "19px", fontWeight: "600", color: "greyBase" }}>Price Details</p>
                            </Box>
                            <Flex width="80%" m="auto" mt="8px" justify={"space-between"}>
                                <p style={{ fontSize: "18px", fontWeight: "500", color: "rgb(60 69 85)" }}>Total Product Price</p>
                                <p style={{ fontSize: "18px", fontWeight: "500", color: "rgb(60 69 85)" }}>₹{total}</p>
                            </Flex>
                            <Flex width="80%" m="auto" mt="8px" justify={"space-between"} borderBottom="1px solid rgb(208 215 220)">
                                <p style={{ fontSize: "18px", fontWeight: "500", color: "rgb(60 69 85)" }}>Additional Fees</p>
                                <p style={{ fontSize: "18px", fontWeight: "500", color: "rgb(60 69 85)", paddingBottom: "10px" }}>₹{total ? 66 : 0}</p>
                            </Flex>
                            <Flex width="80%" m="auto" mt="8px" justify={"space-between"}>
                                <p style={{ fontSize: "19px", fontWeight: "600", color: "greyBase" }}>Order Total</p>
                                <p style={{ fontSize: "19px", fontWeight: "600", color: "greyBase", paddingBottom: "10px" }}>₹{total ? total + 66 : 0}</p>
                            </Flex>
                            <Box textAlign={"center"} mt="17px">
                                <Button width="60%" bg="rgb(244, 51, 151)" color="white" _hover={{ bg: "rgb(244, 51, 151)" }} onClick={handlePayment}>Continue</Button>
                            </Box>

                            <Box>
                                <Img width="80%" m="auto" src="https://images.meesho.com/images/marketing/1588578650850.webp"></Img>
                            </Box>

                        </Box>
                    </Flex>
                </>) : (
                <>  <Flex justify={"center"} align={"center"}>

                    <Heading>Your Cart is Empty!</Heading>
                </Flex>
                    <Flex justify={"center"} align={"center"}>
                        <Img src={emptyGif}></Img>
                    </Flex>
                </>
            )}
        </>):(
        <Flex justify={"center"} align="center" mt = "20px">

            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'></Spinner>
        </Flex>
        
        
        )}
        </>
       
    )
}

export default Cart;