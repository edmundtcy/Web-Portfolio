import {
    useColorMode,
    useColorModeValue,
    ButtonProps,
    Button,
    textDecoration,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
  
type ColorModeSwitcherProps = Omit<ButtonProps, "leftIcon">

export const ColorModeSwitcherN = (props: ColorModeSwitcherProps) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const buttonColor = useColorModeValue('#1c1cff','#FF7324')
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    const colorModeInfo = useColorModeValue('LIGHT','DARK')
    return (
      <Button
        colorScheme='black'
        size="md"
        variant='link'
        color="current"
        onClick={toggleColorMode}
        sx={{ "&:hover": { color: buttonColor, textDecoration: 'none'} }}
        leftIcon={<SwitchIcon/>}
        aria-label={`Switch to ${text} mode`}
        {...props}
        >{colorModeInfo}</Button>
    )
}