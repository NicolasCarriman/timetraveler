import { Box, BoxProps, keyframes } from "@chakra-ui/react";
import React from 'react';
import { Container } from "../../../components/container";
import { motion } from 'framer-motion';

export const InputContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      minH='46.5vh'
      minW='38.2vw'
      padding='3%'
      margin='0px'
      {...props}
    />
  );
}

export const EmptyDestinys: React.FC = () => (
  <Box as='h1'>
    no activitys avalible
  </Box>
);

interface ArrowProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  top: string;
  left: string;
  orientation: string;
}

export const Main: React.FC<BoxProps> = (props) => {
  return (
    <Box
      id='gradient-box'
      position='absolute'
      height='60%'
      width='20%'
      z-zIndex='20'
      top='120px'
      background='#30303066'
      borderRadius='12px'
      boxShadow='2px 2px 11px 4px #262626f2'
      backdropFilter='blur(4px)'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      {props.children}
    </Box>
  )
}