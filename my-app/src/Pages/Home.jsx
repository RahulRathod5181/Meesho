import { Box, HStack, VStack, Checkbox, Heading, Center, Spinner, Text, Img, Grid, GridItem, Button, Flex } from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { BsStar, BsStarFill } from "react-icons/bs";
import CarouselComp from "../Components/CarouselComp"
import Mid from "../Components/Mid"
import { useState, useEffect } from "react"
import axios from "axios"
const getData = (params) => {

    return axios.get(`https://meshoproductapi.onrender.com/landing`,{
        params
    })
}

function Home(prop) {
    // console.log(name)
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [sort,setSort] = useState("")
    const [priceFilter,setPriceFilter] = useState(0)
    const [permaData,setPermaData] = useState([])

    const handleClick = (id) => {
        // console.log(id)
    }
    let priceFilterData = ""
    useEffect(() => {

        let param = sort?{_sort:"price",_order:sort}:{}
        setLoading(true)
        
        setData(...data,priceFilterData)
        getData(param).then((res) => {
            // console.log(res.data)
            setData(res.data)
            setPermaData(res.data)
        }).catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [sort])

    useEffect(()=>{
        // priceFilterData = permaData
        priceFilterData = permaData.filter((el,i)=>{
            return (el.price<=priceFilter)
        })
        let actualData = priceFilterData.sort((a,b)=>b.price-a.price)
        console.log(priceFilterData)
        setData(actualData)
    },[priceFilter])


    return (
        <>
            <CarouselComp/>
            <Mid/>
            {isLoading?(<Center><Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                textAlign={"center"}
                mt = "70px"
            /></Center>):(<Box
                width="90%"
                m="auto"
                mt="60px"
            >
                {/* <Heading size="xl" mb="20px">Products For You</Heading> */}
                <h2 style={{ marginBottom: "20px", fontSize: "32px", fontWeight: "700" }}>Products For You</h2>
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
                                    <Button onClick = {()=>setSort("desc")}>Price(High to Low)</Button>
                                    <Button onClick = {()=>setSort("asc")}>Price(Low to High)</Button>
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
                                    <Button onClick = {()=>setPriceFilter(149)}>Price Under ₹ 149</Button>
                                    <Button onClick = {()=>setPriceFilter(199)}>Price Under ₹ 199</Button>
                                    <Button onClick = {()=>setPriceFilter(249)}>Price Under ₹ 249</Button>
                                    <Button onClick = {()=>setPriceFilter(299)}>Price Under ₹ 299</Button>
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
                                <Link to = {`/${el.id}`}>
                                <GridItem className="catsDetails" key={el.id} border="1px solid rgb(226 232 240)" borderRadius={"10px"}>
                                    <Box cursor={"pointer"} onClick={() => handleClick(el.id)}>
                                        <Img src={el.image} width="100%" h="220px" borderRadius="10px 10px 0px 0px" />
                                        <Text className="name" fontSize={"16px"} color="rgb(153 153 153)" fontWeight="bold" pt="10px" pl="6px" textOverflow="ellipsis" whiteSpace={"nowwrap"} overflow="hidden" >{el.title.substring(0, 17) + "..."}</Text>
                                        <Flex
                                            align={"center"}
                                            m="12px 0px 0px 10px"
                                        >

                                            <Text className="cost" fontSize="21px" fontWeight={"bold"}>
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
                                                color="rgb(153 153 153)">{el.review}</Text>
                                        </Flex>
                                    </Box>
                                </GridItem>
                                </Link>
                            ))}
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>)}

        </>
    )
}

export default Home