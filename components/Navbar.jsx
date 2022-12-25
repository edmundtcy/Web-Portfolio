import React from 'react'
import {
    Box,
    Button,
    extendTheme,
    HStack,
    Image,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import {MdLanguage} from "react-icons/md"
const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const buttonColor = useColorModeValue('#1c1cff','#FF7324')
    const logoImage = useColorModeValue('/logoL.png','/logoD.png')
    const theme = extendTheme({
        fonts:{
            body: 'kern'
        }
    })
  return (
    <Box>
        <Box p={5} borderBottom='1px' borderColor='gray.200'>
            <HStack spacing='24px' align='center'>
                <Image src={logoImage} boxSize='30px'/>
                <Button colorScheme='black' variant='link' _hover={{color: buttonColor}} theme={theme}>
                    Home
                </Button>
                <Button colorScheme='black' variant='link' _hover={{color: buttonColor}} theme={theme}>
                    About
                </Button>
                <Button colorScheme='black' variant='link' _hover={{color: buttonColor}} theme={theme}>
                    Skills
                </Button>
                <Button colorScheme='black' variant='link' _hover={{color: buttonColor}} theme={theme}>
                    Education
                </Button>
                <Button colorScheme='black' variant='link' _hover={{color: buttonColor}} theme={theme}>
                    Contact
                </Button>
                <ColorModeSwitcher/>
                <Button colorScheme='black' variant='link' _hover={{color: buttonColor}} leftIcon={<MdLanguage size={'23'}/>} theme={theme}>
                    Languages
                </Button>
            </HStack>
        </Box>
    </Box>
  )
}

export default Navbar