import {React, useEffect, useRef} from 'react'
import {useColorModeValue, Box} from '@chakra-ui/react'

function Cursors() {
    const cursorRef = useRef(null)
    const mode = useColorModeValue(false,true)

    useEffect(() => {

        if (cursorRef.current == null || cursorRef == null)
            return
        document.addEventListener('mousemove', e => {
            if (cursorRef.current == null)
                return
            cursorRef.current.setAttribute("style", "top: " + (e.pageY-10) + "px; left: " + (e.pageX-10) + "px;")
     
        })

    }, [])

    if (mode){
        return (
            <div className='cursorL' ref={cursorRef}/>
        )
    }
    else{
        return (
            <div className='cursorD' ref={cursorRef}/>
        )
    }

}

export default Cursors