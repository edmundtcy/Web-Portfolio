import { React, useState, useEffect } from 'react';
import { Box, Grid, GridItem, useBreakpointValue} from '@chakra-ui/react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

function MainBody() {
  const size = useWindowSize();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box>
      {isDesktop ?
        (
          <Grid templateRows="repeat(5,fr)" templateColumns="repeat(5, 1fr)" h={size.height}>
            <GridItem rowSpan={1} colSpan={1} bg="Tomato">1</GridItem>
            <GridItem colSpan={4} bg="green">2</GridItem>
            <GridItem colSpan={5} bg="purple">4</GridItem>
          </Grid>
        )
        :
        (
          <Grid templateRows="repeat(2,fr)" templateColumns="repeat(5, 1fr)" h={size.height}>
            <GridItem rowSpan={2} colSpan={1} bg="Tomato">1</GridItem>
            <GridItem colSpan={2} bg="green">2</GridItem>
            <GridItem colSpan={2} bg="blue">3</GridItem>
            <GridItem colSpan={4} bg="purple">4</GridItem>
          </Grid>
        )
      }
    </Box>

  )
}

export default MainBody