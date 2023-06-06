import { Box, BoxProps } from "@chakra-ui/react"
import React from "react";
import { Container } from "../../../components/container";
import { motion } from "framer-motion";

export const ActivityContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      variant='medium'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      {...props}
    />
  )
}

interface ExtraActivityProps {
  text: string,
  location: string,
  price: number,
}

export const ActivityBody: React.FC<Pick<ExtraActivityProps, 'text'>> = (props) => {
  return (
    <Box
      as={motion.div}
      key={props.text}
      initial={{
        y: -30,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 0.75,
        transition: {
          duration: 1
        }
      }}
      exit={{
        opacity:0
      }}
      overflow='auto'
      id='bodyContainer'
      padding='16px'
      borderRadius='12px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='60%'
      width='60%'
    >
      <Box as='p'
        fontWeight='bold'
        color='white'
      >
        {props.text}
      </Box>
    </Box>
  );
}

export const ActivityFooter: React.FC<BoxProps> = (props) => {
  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      padding={8}
    >
      {props.children}
    </Box>
  );
}

const Border: React.FC<BoxProps> = (props) => {
  return (
    <Box
      minW='120px'
      border='solid'
      borderColor='#ebd8d8ad'
      borderWidth='2px'
      borderRadius='8px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      paddingTop='8px'
      paddingBottom='8px'
      paddingLeft='12px'
      paddingRight='12px'
    >
      {props.children}
    </Box>
  )
}

export const ActivityPrice: React.FC<Pick<ExtraActivityProps, 'price'>> = (props) => {
  return (
    <Border>
      <Box
        fontWeight='bold'
        color='white'
      >
        $ {props.price}
      </Box>
    </Border>
  );
}

export const ActivityLocation: React.FC<Pick<ExtraActivityProps, 'location'>> = (props) => {
  return (
    <Border>
      <Box
        color='white'
        fontWeight='bold'
      >
        Location : {props.location}
      </Box>
    </Border>
  )
}