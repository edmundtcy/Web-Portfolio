import React from 'react'
import {Box, HStack, IconButton, ButtonGroup, Text, Image } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedinIn, FaTwitter, FaEthereum } from 'react-icons/fa'
function Footer() {
  return (
    <Box>
        <HStack>
            <ButtonGroup variant='link' margin='2'>
                <IconButton icon={<FaGithub size='25'/>} color="current" onClick={() => window.open('https://github.com/edmundtcy','_blank')}/>
                <IconButton icon={<FaInstagram size='25'/>} color="current" onClick={() => window.open('https://www.instagram.com/edmundd81/','_blank')}/>
                <IconButton icon={<FaTwitter size='25'/>} color="current" onClick={() => window.open('https://twitter.com/Edmund_2k','_blank')}/>
                <IconButton icon={<FaLinkedinIn size='25'/>} color="current" onClick={() => window.open('https://www.linkedin.com/in/edmundcy/','_blank')}/>
                <IconButton icon={<FaWhatsapp size='25'/>} color="current" onClick={() => window.open('https://wa.me/85260727074','_blank')}/>
            </ButtonGroup>
        </HStack>
    
        <Text fontSize='lg'>Proudly made 🇭🇰 in by Edmund Tsang</Text>
        <Text fontSize='md'>Copyright &copy;2023 Edmund Tsang.</Text>
    </Box>
  )
}

export default Footer