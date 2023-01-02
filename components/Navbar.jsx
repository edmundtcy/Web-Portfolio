import {React, useRef} from 'react'
import {
Box,Button,ButtonGroup,
Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter,
Stack, HStack,
extendTheme,
IconButton,
Image,
useBreakpointValue,
useColorModeValue,
useDisclosure,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { ColorModeSwitcherN } from './ColorModeSwitcherN'
import {MdLanguage} from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import Cursors from './Cursors'

function mouseEnter(){
    try{
        let cursorL = document.querySelector('.cursorL')
        cursorL.classList.add('B')
    }catch{
        let cursorD = document.querySelector('.cursorD')
        cursorD.classList.add('B')
    }
}

function mouseLeave(){
    try{
        let cursorL = document.querySelector('.cursorL')
        cursorL.classList.remove('B')
    }catch{
        let cursorD = document.querySelector('.cursorD')
        cursorD.classList.remove('B')
    }
}

const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()
    const buttonColor = useColorModeValue('#1c1cff','#FF7324')
    const logoImage = useColorModeValue('/logoL.png','/logoD.png')
    const theme = extendTheme({
        fonts:{
            body: 'kern'
        }
    })
    return (
        <Box>
            <Box as='nav' p='5' borderBottom='1px' borderColor='gray.200'>
                <HStack spacing='10' justify='space-between'>
                    {isDesktop ?
                    (
                    <>
                        <HStack spacing='10'>
                            <Image src={logoImage} boxSize='35px'/>
                            <ButtonGroup variant='link' spacing='10' fontSize='16.5px'>
                                {['Home', 'About', 'Skills', 'Education', 'Contact'].map((item) => (
                                <Button key={item} colorScheme='black' 
                                _hover={{color: buttonColor}} theme={theme} 
                                padding='10'
                                onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>{item}</Button>))}
                            </ButtonGroup>
                        </HStack>
                        <HStack spacing='3'>
                            <ColorModeSwitcher onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}/>
                            <Button colorScheme='black' variant='link' padding='12' paddingLeft={0} paddingRight={0}
                            _hover={{color: buttonColor}} leftIcon={<MdLanguage size='23'/>} 
                            theme={theme} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            Languages
                            </Button>
                        </HStack>
                    </>
                    )
                    :
                    (
                    <>
                        <Image src={logoImage} boxSize='35px'/>
                        <IconButton variant='ghost' icon={<FiMenu size='23'/>} aria-label='Open Menu' onClick={onOpen} ref={btnRef}/>
                        <Drawer 
                        placement='left'
                        isOpen={isOpen}
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        >
                            <DrawerContent>

                                <DrawerHeader borderBottomWidth='1px'>
                                    <Image src={logoImage} boxSize='35px' margin='auto'/>
                                </DrawerHeader>

                                <DrawerBody padding='0'>
                                    <Stack fontSize='16.5px'>
                                            {['Home', 'About', 'Skills', 'Education', 'Contact'].map((item) => (
                                            <Button variant='ghost' key={item} 
                                            colorScheme='black' _hover={{color: buttonColor}} 
                                            theme={theme}  padding='30' 
                                            >{item}</Button>))}
                                    </Stack>
                                </DrawerBody>

                                <DrawerFooter borderTopWidth='1px'>
                                    <HStack spacing='20' margin='auto'>
                                        <ColorModeSwitcherN theme={theme}/>
                                        <Button colorScheme='black' variant='link' 
                                        _hover={{color: buttonColor}} leftIcon={<MdLanguage size='23'/>} 
                                        theme={theme}>LANGUAGES</Button>
                                    </HStack>
                                </DrawerFooter>

                            </DrawerContent>
                        </Drawer>
                    </>
                    )}
                </HStack>
            </Box>
        </Box>
    )
}
export default Navbar