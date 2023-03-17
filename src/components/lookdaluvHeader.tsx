import { Box, Heading } from "@chakra-ui/react";

export const LookdaluvHeader = () => {
  return (
    <Box
      as='header'
      h='12vh'
      display='flex'
      flexDir='row'
      justifyContent='center'
      alignItems='center'
      border='solid'
      borderTop='0'
      borderLeft='0'
      borderRight='0'
      borderBottom='2px'
      boxShadow='1px 1px 2px 0px #c5ffdb'
      borderColor='#bfbfbf'
    >
      <Heading
        id="LookdaluvHeader"
      >
        LOOKDALUV
      </Heading>
    </Box>
  );
}