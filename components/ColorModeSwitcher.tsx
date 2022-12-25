import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
  
type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">
  
export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    const buttonColor = useColorModeValue('#1c1cff','#FF7324')
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  
    return (
      <IconButton
        size="md"
        fontSize="xl"
        variant='link'
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        sx={{ "&:hover": { color: buttonColor } }}
        icon={<SwitchIcon/>}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    )
}