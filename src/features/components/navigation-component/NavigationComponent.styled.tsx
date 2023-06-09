import { Box, BoxProps, ContainerProps, Container } from "@chakra-ui/react";
import React from 'react';


export const MainContainer: React.FC<ContainerProps> = (props) => (
  <Container
    id='MainContainer'
    overflow='hidden'
    boxShadow='dark-lg'
    variant='small'
    position='relative'
    border='none'
    display='flex'
    flexDir='column'
    maxWidth='calc(100vw)'
    width='100%'
    justifyContent='center'
    alignItems='center'
    boxSizing='border-box'
    p='0'
    height='calc(100vh)'
    {...props}
  />
);

export const NeonBox: React.FC<BoxProps> = (props) => {
  return (
    <Box
      id='neonShadow'
      boxShadow='rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px'
      boxSizing='border-box'
      background='#070707'
      height='87vh'
      display='flex'
      width='60vw'
      flexDirection='column'
      p='4'
      borderRadius='8px'
      {...props}
    >
      {props.children}
    </Box>
  )
};

interface ILoadingAreaProps {
  children?: React.ReactNode;
}

export const LoadingArea: React.FC<ILoadingAreaProps> = (props) => {
  return (
    <Box
      as='main'
      overflow='hidden'
      id='loading-area'
      height='100%'
      flex='1'
      borderRadius='12px'
      border='solid'
      borderWidth='1px'
      borderColor='#0f1715'
      boxShadow='1px 1px 2px #5e5e5e,
            0px 0px 2px #5e5e5e'
      padding='0'
    >
      {props.children}
    </Box>
  );
};

export const TabContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      margin='0'
      id='tab-container'
      fontFamily='Space Grotesk'
      display='flex'
      flexDirection='row'
      minH='5vh'
      minW='38.2vw'
      justifyContent='left'
      {...props}
    />
  );
}

interface TabProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  activated: boolean;
  name: string;
  isHover: boolean;
}
export const Tab: React.FC<TabProps> = ({
  color,
  children,
  onClick,
  activated,
  name,
  isHover,
}) => {

  return (
    activated ?
      <Box
        id='neonShadow'
        boxShadow='rgba(0, 26, 255, 0.5) 0px -2px 0px, rgba(255, 255, 255, 0.5) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -8px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px;'
        boxSizing='border-box'
        borderRadius="9px"
      >
        <button
          onClick={onClick}
          style={{
            textAlign: 'center',
            color: color,
            borderRadius: "5px",
            width: "7vw",
            paddingTop: "1.5vh",
            background: isHover ? 'linear-gradient(180deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)' : '#070707',
          }}>{name}</button>
      </Box>
      :
      <Box
        id='neonShadow'
        boxSizing='border-box'
      >
        <button
          onClick={onClick}
          style={{
            textAlign: 'center',
            color: color,
            borderRadius: "5px",
            width: "7vw",
            paddingTop: "1.5vh",
            transition: '0.4s',
            boxShadow: isHover ? 'rgba(0, 26, 255, 1) 0px -2px 0px, rgba(255, 255, 255, 0.9) 0px -4px 0px, rgba(255, 255, 255, 0.2) 0px -8px 0px, rgba(255, 255, 255, 0.2) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px' : 'rgba(0, 26, 255, 0) 0px -2px 0px, rgba(255, 255, 255,0) 0px -4px 0px, rgba(255, 255, 255, 0) 0px -4px 0px, rgba(255, 255, 255, 0.0) 0px -16px 8px, rgba(255, 255, 255, 0.0) 0px -32px 16px',
            background: isHover ? 'linear-gradient(180deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)' : '#070707',
          }}>{name}</button>
      </Box>
  );
};