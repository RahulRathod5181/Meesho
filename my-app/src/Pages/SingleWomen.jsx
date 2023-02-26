import { useParams } from "react-router-dom";
import { Heading, Img, VStack } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react"

import { Box, Flex, Spinner, Button, Divider, Text, HStack } from "@chakra-ui/react"
import { BsCart2, BsStarFill } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";

const getData = (user_id) => {
    // console.log(name)
    return axios.get(`https://meshoproductapi.onrender.com/women/${user_id}`)
}
let product = []
let cartApi = {}
function SingleWomen() {
    const { user_id } = useParams()
    const [isLoading, setLoading] = useState(false)


    
    useEffect(() => {
        
        setLoading(true)
        getData(user_id).then((res) => {
            // setUser(res.data)
            product.push(res.data)
            cartApi = res.data
            // console.log(res.data)
            // console.log(product)
        }).catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })
    }, [])
    const handleCart = ()=>{
        cartApi.quantity = 1
        console.log(cartApi)
        axios.post(`https://63cadb86d0ab64be2b5c2749.mockapi.io/boys`,{
            ...cartApi
        }).then((res)=>console.log(res.data))
    }


    return (

        product?.map((el) => (

            <Box>
                <Flex width="75%" m="auto" mt="20px" height="700px" justify={"space-around"} border="1px soild red">
                    <Box width="40%" >
                        <Box border="1px solid rgb(223, 223, 223)" borderRadius={"2px"}>
                            <Img src={el.image} width="100%" h="500px"></Img>
                        </Box>
                        <Flex justify={"space-between"} width="90%" margin={"auto"} mt="30px" borderBottom="1px solid rgb(223, 223, 223)">
                            <Flex align={"center"} border="1px solid black" width="45%" borderRadius={"4px"} mb="24px" justify={"center"} bg="White" _hover={{ borderColor: "rgb(244, 51, 151)" }} >
                                <Box ml="10px" mb="4px" _hover={{ color: "rgb(244, 51, 151)" }}>
                                    <BsCart2 size="22px" />
                                </Box>
                                <Button _hover={{ bg: "white", color: "rgb(244, 51, 151)" }} onClick={handleCart} p="0" ml="7px" mr="7px" varient="unstyled" bg="white"><p style={{ fontSize: "16px", fontWeight: "700" }}>Add To Cart</p></Button>
                            </Flex>
                            <Flex align={"center"} borderRadius={"4px"} width="45%" justify={"center"} bg="rgb(244, 51, 151)" mb="24px" >
                                <Box ml="10px" color="white">
                                    <MdDoubleArrow size="22px" />
                                </Box>
                                <Button _hover={{ bg: "rgb(244, 51, 151)" }} p="0" ml="8px" mr="18px" mt="5px" mb="5px" varient="unstyled" bg="rgb(244, 51, 151)"><p style={{ fontSize: "16px", fontWeight: "700", color: "white" }}>Buy Now</p></Button>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box  width="55%">
                        <VStack>
                            <Box border = "1px solid rgb(223, 223, 223)" borderRadius="4px" width="100%">
                                <Text className="name" fontSize={"24px"} color="rgb(153 153 153)" fontWeight="bold" pt="10px" pl="6px" textOverflow="ellipsis" whiteSpace={"nowwrap"} overflow="hidden" >{el.title}</Text>
                                <Flex
                                    align={"center"}
                                    m="12px 0px 0px 10px"
                                >

                                    <Text className="cost" fontSize="36px" fontWeight={"bolder"} color = "rgb(51, 51, 51)">
                                        ₹{el.price}
                                    </Text>
                                    <Text
                                        pl="5px"
                                        pt="6px"
                                        fontSize={"12px"}
                                        fontWeight="bold"
                                        color="rgb(153 153 153)"
                                    >
                                        Onwards
                                    </Text>
                                </Flex>

                                <Box borderRadius={"5px"} pl="7px" m="12px 70px 0px 8px" bg="rgb(249 249 249)"><span style={{ fontSize: "13px", fontWeight: "bold", color: "rgb(102, 102, 102)" }}>{el.delivery}</span></Box>
                                <Flex align={"center"} m="12px 0px 10px 5px">
                                    <HStack bg="rgb(35, 187, 117)" m="7px" mb="11px" p="0px 5px 0px 5px" borderRadius={"7px"}><Text color="white">{el.rating}</Text><BsStarFill fill="white" /></HStack>
                                    <Text fontSize={"13px"}
                                        fontWeight="bold"
                                        color="rgb(153 153 153)">{el.review}
                                    </Text>
                                </Flex>
                            </Box>
                        </VStack>
                        <Box mt = "12px" border = "1px solid rgb(223, 223, 223)" borderRadius="4px">
                                <Heading fontSize = "22px" color = "rgb(51, 51, 51)" pl = "10px" pt = "5px" >Product Details</Heading>
                                <Box p = "10px" pt = "5px">
                                    <p style = {{marginTop:"7px" , color :"rgb(153,153,153)", fontWeight:"600"}}>Name:{el.title}</p>
                                    <p style = {{marginTop:"7px" , color :"rgb(153,153,153)", fontWeight:"600"}}>Fabric : Viscose Rayon</p>
                                    <p style = {{marginTop:"7px" , color :"rgb(153,153,153)", fontWeight:"600"}}>Sleeve Length : Shoulder Straps</p>
                                    <p style = {{marginTop:"7px" , color :"rgb(153,153,153)", fontWeight:"600"}}>Country of Origin : India</p>
                                </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        ))
    )


}
export default SingleWomen;