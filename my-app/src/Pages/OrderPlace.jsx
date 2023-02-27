import { Box, Flex, Img, Button, HStack, Heading,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input } from "@chakra-ui/react"

    import {useContext} from "react"
    import {AuthContext} from "../Components/AuthContext"
    import { useNavigate } from 'react-router-dom';
function OrderPlace() {
    const {mainTotal} = useContext(AuthContext)
    let nav=useNavigate()

    const handlePlaceOrder = ()=>{
        return nav("/payment")
    }
    return (
        <>
            <Flex width="80%" margin="auto" mt="30px" >
                <Box borderRight="1px solid rgb(208 215 220)">
                    <p style={{ fontSize: "18px", fontWeight: "600", color: "rgb(60 69 85)", paddingRight: "7px" }}>Fill Delivery Address</p>
                </Box>
            </Flex>
            <Flex width="75%" m="auto" justify={"space-around"} >
                <Box width="50%" mb="10px">

                    {/* <Flex border="1px solid rgb(208 215 220)" borderRadius={"7px"} mt="15px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                            <Box mt="15px">
                                
                            </Box>
                        </Flex> */}

                    <Box border="1px solid rgb(208 215 220)" mt = "10px">

                        <FormControl isRequired p = "10px">
                            <FormLabel>Name</FormLabel>
                            <Input placeholder='First name' />
                            <FormLabel>Mobile No.</FormLabel>
                            <Input placeholder='Enter Mobile No.' />
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Enter Address' />
                            <FormLabel>PINCODE</FormLabel>
                            <Input placeholder='Enter PINCODE' />
                            <FormLabel>City</FormLabel>
                            <Input placeholder='Enter City' />
                            <Button bg="rgb(244, 51, 151)" color="white" _hover={{ bg: "rgb(244, 51, 151)" }} mt = "10px" width = "100%" onClick = {handlePlaceOrder}>Deliver To This Address</Button>
                        </FormControl>

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
                        <p style={{ fontSize: "19px", fontWeight: "600", color: "greyBase", paddingBottom: "10px" }}>₹{mainTotal-18}</p>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
export default OrderPlace;