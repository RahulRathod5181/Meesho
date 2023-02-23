import { Box, HStack, VStack, Checkbox, Heading, Center, Text, Img, Grid, GridItem, Button, Flex } from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { BsStar, BsStarFill } from "react-icons/bs";

import { useState, useEffect } from "react"
import axios from "axios"

const getData = () => {
    return axios.get(`https://mesh-api.onrender.com/landing`)
}

function LandingProducts() {

    const [data, setData] = useState([])

    const handleClick = (id)=>{
        console.log(id)
    }

    useEffect(() => {
        getData().then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])
    return (
        <>
            <Box
                width="90%"
                m="auto"
                mt="30px"
            >
                <Heading size="xl" mb="20px">Products For You</Heading>
                <Grid
                    gridTemplateColumns={"300px 1fr"}
                // h="100%"
                >
                    <GridItem bg="white" h="100%">
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Sort By
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Button>Price(High to Low)</Button>
                                    <Button>Price(Low to High)</Button>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Filter By
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Button>Price Under ₹ 149</Button>
                                    <Button>Price Under ₹ 199</Button>
                                    <Button>Price Under ₹ 249</Button>
                                    <Button>Price Under ₹ 299</Button>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Rating
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <VStack>

                                        <Checkbox>2.0 and above</Checkbox>
                                        <Checkbox>3.0 and above</Checkbox>
                                        <Checkbox>3.5 and above</Checkbox>
                                        <Checkbox>4.0 and above</Checkbox>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </GridItem>
                    <GridItem h="100%">
                        <Grid className="main_container"
                            ml="15px"
                            gridTemplateColumns="repeat(5,1fr)"
                            gridAutoRows={"auto"}
                            gap={"5"}
                        >
                            {data?.map((el) => (

                                <GridItem className="catsDetails" key={el.id} border="1px solid rgb(226 232 240)" borderRadius={"10px"}>

                                    <Box cursor={"pointer"} onClick = {()=>handleClick(el.id)}>
                                        <Img src={el.image} width="100%" h="220px" borderRadius="10px 10px 0px 0px" />
                                        <Text className="name" fontSize={"16px"} color="rgb(153 153 153)" fontWeight="bold" pt="10px" pl = "6px" textOverflow="ellipsis" whiteSpace={"nowwrap"} overflow="hidden" >{el.title.substring(0, 17) + "..."}</Text>
                                        <Flex
                                            align={"center"}
                                            m = "12px 0px 0px 10px"
                                        >

                                            <Text className="cost" fontSize="21px" fontWeight={"bold"}>
                                                {el.price}
                                            </Text>
                                            <Text
                                                pl = "5px"
                                                pt = "6px"
                                                fontSize={"12px"}
                                                fontWeight = "bold"
                                                color="rgb(153 153 153)"
                                                >
                                                Onwards
                                            </Text>
                                        </Flex>

                                        <Box borderRadius={"5px"} pl = "7px" m = "12px 70px 0px 8px" bg = "rgb(249 249 249)"><span style={{fontSize:"13px",fontWeight:"bold",color:"rgb(102, 102, 102)"}}>{el.delivery}</span></Box>
                                        <Flex align={"center"} m = "12px 0px 10px 5px">
                                        <HStack bg="rgb(35, 187, 117)" m = "7px" mb = "11px" p="0px 5px 0px 5px" borderRadius={"7px"}><Text color="white">{el.rating}</Text><BsStarFill fill="white"/></HStack>
                                        <Text fontSize={"13px"}
                                                fontWeight = "bold"
                                                color="rgb(153 153 153)">{el.review}</Text>
                                        </Flex>
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}

export default LandingProducts