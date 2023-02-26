import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    HStack,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
    Heading,
    Divider,
} from '@chakra-ui/react';

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { BiSearch } from "react-icons/bi";
import { CiMobile3, CiUser } from "react-icons/ci";
import { BsFillCartFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const [cross, setCross] = useState(false)
   let nav=useNavigate()
    const handleKey = (e) => {
        if (e.target.value) {
            setCross(true)
        } else {
            setCross(false)
        }
    }
    const handleHome = ()=>{
        console.log("Home")
       return nav("/")
    }
    const handleCart = ()=>{
        return nav("/cart")
    }
    return (
        <>
            <Box position="sticky"
                top="0"
                zIndex={3}>
                <Box bg="#fff">
                    <Flex h="70px" p="0px 10px" align={"center"} justify="space-between"  >
                        <Flex align={"center"}>
                            <Text
                                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                // fontFamily={"Helvetica Neue", "sans-serif", "Mier Book"}
                                color={useColorModeValue('rgb(244, 51, 151)', 'white')}
                                fontWeight="700"
                                fontSize='4xl'
                                ml="30px"
                                onClick = {handleHome}
                                cursor = "pointer"
                            >
                                Meeshon
                            </Text>
                            <Flex border="1px solid rgb(153, 153, 153)" w={"388px"} borderRadius="4px" h="45px" align={"center"} p="12px" ml="25px">
                                <Box className='searchIcon'>
                                    <BiSearch size="23px" color="rgb(153, 153, 153)" />
                                </Box>
                                <Input variant='unstyled' placeholder='Try Saree, Kurti or Search by Product Code' color="rgb(88 77 99)" p="1" width={"100%"} border="unstyled" focus="unstyled" onKeyUp={handleKey} />
                                <Box className="inputClose" display={cross === false ? "none" : "block"}>
                                    <RxCross2 p="1px" color="rgb(153, 153, 153)" fontWeight={"bold"} />
                                </Box>

                            </Flex>
                        </Flex>

                        <Flex mr="80px" width="35%" justify={"space-around"} wrap="nowrap">
                            <Flex borderRight="1px solid grey" m="0px" p="0px" align={"center"} cursor="pointer" _hover={{ color: "rgb(244, 51, 151)", postion: "sticky", borderBottom: "2px solid rgb(244, 51, 151)" }}>
                                <CiMobile3 size="24px" />


                                <Heading size="xs" pr="20px" color="rgb(51,51,51)" ml="8px" _hover={{ color: "rgb(244, 51, 151)" }} >Download App</Heading>

                            </Flex>
                            <HStack borderRight="1px solid grey" m="0px" pr="14px">
                                <Heading size="xs" color="rgb(51,51,51)">Become A Suplier</Heading>
                            </HStack>
                            <Flex pl="20px" direction={"column"}>
                                <Box pl="8px" >

                                    <CiUser size="24px" />
                                </Box>
                                <Box mr="16px" mt="3px">
                                    <Heading size="xs" color="rgb(51,51,51)">Profile</Heading>
                                </Box>
                            </Flex>
                            <Flex pl="20px" direction={"column"}>
                                <Box pl="3px" cursor="pointer">
                                    <BsFillCartFill size="24px" cursor="pointer" onClick = {handleCart} />
                                </Box>
                                <Box mr="16px" mt="3px">
                                    <Heading size="xs" color="rgb(51,51,51)">Cart</Heading>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                {/* <Divider color="rgb(223, 223, 223)" /> */}
                <hr color="rgb(223, 223, 223)" ></hr>
                <Box>
                    <Flex
                        bg={useColorModeValue('white', 'gray.800')}
                        color={useColorModeValue('gray.600', 'white')}
                        minH={'60px'}
                        py={{ base: 2 }}
                        px={{ base: 4 }}
                        borderBottom={1}
                        borderStyle={'solid'}
                        borderColor={useColorModeValue('gray.200', 'gray.900')}
                        align={'center'}>
                        <Flex
                            flex={{ base: 1, md: 'auto' }}
                            ml={{ base: -2 }}
                            display={{ base: 'flex', md: 'none' }}>
                            <IconButton
                                onClick={onToggle}
                                icon={
                                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                                }
                                variant={'ghost'}
                                aria-label={'Toggle Navigation'}
                            />
                        </Flex>
                        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>


                            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                                <DesktopNav />
                            </Flex>
                        </Flex>

                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>
                            <Button
                                as={'a'}
                                fontSize={'sm'}
                                fontWeight={400}
                                variant={'link'}
                                href={'#'}>
                                Sign In
                            </Button>
                            <Button
                                as={'a'}
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'pink.400'}
                                href={'#'}
                                _hover={{
                                    bg: 'pink.300',
                                }}>
                                Sign Up
                            </Button>
                        </Stack>
                    </Flex>

                    <Collapse in={isOpen} animateOpacity>
                        <MobileNav />
                    </Collapse>
                </Box>
            </Box>
        </>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    // console.log(NAV_ITEMS)
    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                // href={navItem.path ?? '#'}
                                href = {navItem.path}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, path, href, subLabel }: NavItem) => {
    return (
        <Link
            // href={path}
            role={'group'}
            display={'block'}
            p={2}
            to = {path}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        <Link to={path}>
                            {label}
                        </Link>

                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Women Ethnic',
        path: '/women',
        children: [
            {
                label: 'All Women Athnic',
            },
            {
                label: 'View All',
            },
        ],
    },
    {
        label: 'Women Wesetern',
        path:'/women',
        children: [
            {
                label: 'Tops',
                
            },
            {
                label: 'Dresses',
                
            },
            {
                label: 'Jumpsuits',
                
            },
            
        ],
    },
    {
        label: 'Men',
        path:"/men",
        children: [
            {
                label: 'Top Wear',
            },
            {
                label: 'Bottom Wear',
            },
            {
                label: 'Ethnic Wear',
            },
            
        ],
    },
    {
        label: 'Kids',
        path:"/kids",
        children: [
            {
                label: 'Boys & Girls 2+ Years',
            },
            {
                label: 'Toys & Accessories',
            },
            {
                label: 'Infant 0-2 Years',
            },
        ],
    },
    {
        label: 'Home & Kitchen',
        children: [
            {
                label: 'Home Furnishing',
            },
            {
                label: 'Home Decor',
            },
            {
                label: 'Kitchen & Dining',
            },
        ],
    },
    {
        label: 'Beauty & Health',
        children: [
            {
                label: 'Make up',
            },
            {
                label: 'Wellness',
            },
            {
                label: 'Skincare',
            },
        ],
    },
    {
        label: 'Jewellery & Accessories',
        children: [
            {
                label: 'Jewellery',
            },
            {
                label: 'Women Accessory',
            },
        ],
    },
    {
        label: 'Bags & Footwear',
        children: [
            {
                label: 'Women Bags',
            },
            {
                label: 'Men Bags',
            },
           
        ],
    },
    {
        label: 'Electronics',
        children: [
            {
                label: 'Mobile & Accessories',
                
            },
            {
                label: 'Appliances',
                
            },
        ],
    },

];