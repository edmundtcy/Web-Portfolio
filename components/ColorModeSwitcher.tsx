import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { extendTheme } from "@chakra-ui/react"
  
type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">
  
export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const buttonColor = useColorModeValue('#1c1cff','#FF7324')
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    return (
      <IconButton
        paddingTop={15}
        paddingBottom={15}
        paddingLeft={6}
        paddingRight={6}
        size="md"
        fontSize="xl"
        variant='link'
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        // sx={{ "&:hover": { color: buttonColor }, cursor:'none'}}
        icon={<SwitchIcon/>}
        zIndex={1500}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    )
}