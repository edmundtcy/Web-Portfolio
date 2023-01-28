import {React, useRef} from 'react'
import {
Box,Button,ButtonGroup,
Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerOverlay,
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

function mouseEnter(){
    // try{
    //     let cursorL = document.querySelector('.cursorL')
    //     cursorL.classList.add('B')
    // }catch{
    //     let cursorD = document.querySelector('.cursorD')
    //     cursorD.classList.add('B')
    // }
}

function mouseLeave(){
    // try{
    //     let cursorL = document.querySelector('.cursorL')
    //     cursorL.classList.remove('B')
    //     console.log('out')
    // }catch{
    //     let cursorD = document.querySelector('.cursorD')
    //     cursorD.classList.remove('B')
    // }
}

const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()
    const backgroundColor = useColorModeValue('#fff','#1A202C')
    const buttonColor = useColorModeValue('#1c1cff','#FF7324')
    const logoImage = useColorModeValue('/logoL.png','/logoD.png')
    const theme = extendTheme({
        fonts:{
            body: 'kern'
        }
    })
    const zIndices = {
        zIndices: {
        overlay: 1400,
        },
      }
      const themez = extendTheme({zIndices})
    return (
        <Box position={'sticky'} top={0} >
            <Box as='nav' p='5' borderBottom='1px' borderColor='gray.200' backgroundColor={backgroundColor}>
                <HStack spacing='10' justify='space-between'>
                    {isDesktop ?
                    (
                    <>
                        <HStack spacing='10'>
                            <Image src={logoImage} boxSize='35px'/>
                            <ButtonGroup variant='link' spacing='10' fontSize='16.5px' zIndex={1500}>
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
                            _hover={{color: buttonColor}} leftIcon={<MdLanguage size='23'/>} zIndex={1500}
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
                        <IconButton variant='ghoest' icon={<FiMenu size='23'/>} 
                        aria-label='Open Menu' onClick={onOpen} paddingBottom={15} paddingTop={15} paddingRight={6} paddingLeft={6}
                        ref={btnRef} theme={themez} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} zIndex={1500}/>
                        <Drawer 
                        placement='left'
                        isOpen={isOpen}
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        >
                            <DrawerOverlay/>
                            <DrawerContent>
                        
                                <DrawerHeader borderBottomWidth='1px'>
                                    <Image src={logoImage} boxSize='35px' margin='auto'/>
                                </DrawerHeader>

                                <DrawerBody padding='0'>
                                    <Stack fontSize='16.5px'>
                                            {['Home', 'About', 'Skills', 'Education', 'Contact'].map((item) => (
                                            <Button variant='link' key={item} 
                                            colorScheme='black' _hover={{color: buttonColor}}
                                            theme={theme}  padding='30' 
                                            >{item}</Button>))}
                                    </Stack>
                                </DrawerBody>

                                <DrawerFooter borderTopWidth='1px'>
                                    <HStack spacing='20' margin='auto'>
                                        <ColorModeSwitcherN theme={theme}/>
                                        <Button colorScheme='black' variant='outline' 
                                        paddingTop={15} paddingBottom={15}
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