import { Img, Box, Center, Heading, HStack , VStack} from "@chakra-ui/react"
import four from "../Images/4.png"
import five from "../Images/5.png"
function Mid() {
    return (
       <Box width = "76%" m = "auto">
        <Box mt = "60px">
            <Img src = {four} height = "500px" width = "100%"></Img>
        </Box>
        <Box mt = "60px">
            <Img src = {five}></Img>
        </Box>
       </Box>

    )
}

export default Mid;