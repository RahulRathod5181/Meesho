import { useContext,useState } from "react"
import { AuthContext } from "../Components/AuthContext"
import {
    Box, Flex, Img, Button, HStack, Heading, FormControl,
    FormLabel,
    FormErrorMessage,
    Divider,
    FormHelperText, Input
} from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { MdPayment } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import payGif from "../Images/paymentSuccess.gif"
function PaymentPage() {
    let nav = useNavigate()
    const { mainTotal } = useContext(AuthContext)
    const [isPay, setPay] = useState(false)
    const toast = useToast()
    console.log(isPay)
    const handleSuccess = () => {
        toast({
            title: 'Payment Success!',
            description: "You've Successfully made the payment.",
            status: 'success',
            position: "top",
            duration: 2000,
            isClosable: true,
        })
        setPay(true)
        setTimeout(() => {
            return nav("/paymentsuccess")
        }, 4000)
    }
    return (
        <>
            {!isPay?(
            <>
                <Flex width="80%" margin="auto" mt="30px"  >
                    <Box>
                        <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(60 69 85)", paddingRight: "7px" }}>Payment Method</p>
                    </Box>
                </Flex>
                <Flex width="75%" m="auto" justify={"space-around"} >
                    <Box width="50%" mb="10px">

                        {/* <Flex border="1px solid rgb(208 215 220)" borderRadius={"7px"} mt="15px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                            <Box mt="15px">
                                
                            </Box>
                        </Flex> */}

                        <Box mt="10px"  >
                            <Flex width="100%" align="center" justify={"center"}>
                                <span style={{ fontSize: "12px", width: "15%" }}>PAY IN CASH</span>
                                <Box borderTop="1px solid rgb(208 215 220)" width="80%"></Box>
                            </Flex>
                            <Flex width="100%" m="auto" justify={"space-between"} bg="rgb(211, 244, 234)" borderRadius={"5px"}>
                                <Flex width="50%" align={"center"} m="15px">
                                    <Box width="10%">
                                        <MdPayment color="rgb(48 196 151)" size="24px"></MdPayment>
                                    </Box>
                                    <Box ml="10px" width="90%">
                                        <span style={{ fontSize: "16px", fontWeight: "600" }}>Cash On Delivery</span>
                                    </Box>
                                </Flex>
                                <Box mt="15px" mb="15px" mr="15px" >
                                    <BsFillPatchCheckFill color="rgb(3, 141, 99)" size="27px" />
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box width="40%" borderLeft="1px solid rgb(198 200 203)" mt="16px">
                        <Box ml="47px" mt="16px">
                            <p style={{ fontSize: "19px", fontWeight: "600", color: "greyBase" }}>Price Details</p>
                        </Box>
                        <Flex width="80%" m="auto" mt="8px" justify={"space-between"}>
                            <p style={{ fontSize: "18px", fontWeight: "500", color: "rgb(60 69 85)" }}>Total Product Price</p>
                            <p style={{ fontSize: "18px", fontWeight: "500", color: "rgb(60 69 85)" }}>₹{mainTotal}</p>
                        </Flex>
                        <Flex width="80%" m="auto" mt="8px" justify={"space-between"}>
                            <p style={{ fontSize: "18px", fontWeight: "500", color: "rgb(3, 141, 99)" }}>Total Discount</p>
                            <p style={{ fontSize: "18px", fontWeight: "400", color: "rgb(3, 141, 99)" }}>-₹18</p>
                        </Flex>
                        <Flex width="80%" m="auto" mt="8px" justify={"space-between"} borderTop="1px solid rgb(208 215 220)">
                            <p style={{ fontSize: "19px", fontWeight: "600", color: "greyBase" }}>Order Total</p>
                            <p style={{ fontSize: "19px", fontWeight: "600", color: "greyBase", paddingBottom: "10px" }}>₹{mainTotal - 18}</p>
                        </Flex>
                        <Box textAlign={"center"} mt="17px">
                            <Button width="60%" bg="rgb(244, 51, 151)" color="white" _hover={{ bg: "rgb(244, 51, 151)" }} onClick={handleSuccess}>Continue</Button>
                        </Box>

                        <Box>
                            <Img width="80%" m="auto" src="https://images.meesho.com/images/marketing/1588578650850.webp"></Img>
                        </Box>
                    </Box>
                </Flex>
            </>
            ):(
                <Flex justify={"center"} align="center">
                    <Img src = {payGif}></Img>
                </Flex>
            )}
        </>
    )
}

export default PaymentPage;