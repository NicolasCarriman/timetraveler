import { Box, BoxProps, keyframes, ContainerProps, Container } from "@chakra-ui/react";
import  React  from 'react';
import { motion } from 'framer-motion';


export const MainContainer: React.FC<ContainerProps> = (props) => (
    <Container
    boxShadow='dark-lg'
    variant='small'
    h='70vh'
    position='absolute'
    top='10vh'
    left='28.5vw'
    border='none'
    display='flex'
    flexDir='column'
    boxSizing='border-box'
    p='0'
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
        height='100%'
        minH='70vh'
        display='flex'
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
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='100%'
        flex='1'
        overflow='auto'
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

interface ArrowProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  top: string;
  left: string;
  orientation: string;
}
export const Arrow: React.FC<ArrowProps> = ({ 
	color,
	children,
	onClick, 
  top,
  left,
  orientation
	}) => {
    
    return (
      orientation == "left" ? 
        <button 
        onClick={onClick}
        style={{
          color: color,
          background: '#070707',
          boxShadow: 'rgba(0, 26, 255, 0.5) -2px 2px 0px, rgba(255, 255, 255, 0.5) -4px 4px 0px , rgba(255, 255, 255, 0.1) -8px 8px 0px, rgba(255, 255, 255, 0.1) -16px 16px 8px, rgba(255, 255, 255, 0.1) -32px 32px 16px',
          borderRadius: '20px',
          height: "76.4vh",
          width: "5vw",
          position: 'absolute',
          top: top,
          left: left
        }}
      >
        {children}
      </button> :
        <button 
        onClick={onClick}
        style={{
          color: color,
          background: '#070707',
          boxShadow: 'rgba(0, 26, 255, 0.5) 2px 2px 0px, rgba(255, 255, 255, 0.5) 4px 4px 0px , rgba(255, 255, 255, 0.1) 8px 8px 0px, rgba(255, 255, 255, 0.1) 16px 16px 8px, rgba(255, 255, 255, 0.1) 32px 32px 16px',
          borderRadius: '20px',
          height: "76.4vh",
          width: "5vw",
          position: 'absolute',
          top: top,
          left: left
        }}
      >
        {children}
      </button>
    );
};

export const TabContainer: React.FC<BoxProps> = (props) => {
  return(
    <Container
      display='flex'
      flexDirection='row'
      minH='5vh'
      minW='38.2vw'
      {...props}
    />
  );
}

const animationTabSelectionKeyframes = keyframes`
0% { box-shadow: black; }
3% { box-shadow: rgba(0, 26, 255, 0.1) 0px -2px 0px, rgba(255, 255, 255, 0.1) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
10% { box-shadow: rgba(0, 26, 255, 0.5) 0px -2px 0px, rgba(255, 255, 255, 0.5) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -8px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
50% { box-shadow: rgba(0, 26, 255, 0.7) 0px -2px 0px, rgba(255, 255, 255, 0.5) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -8px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
100% { box-shadow: rgba(0, 26, 255, 1) 0px -2px 0px, rgba(255, 255, 255, 0.9) 0px -4px 0px, rgba(255, 255, 255, 0.2) 0px -8px 0px, rgba(255, 255, 255, 0.2) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
`;
const animationTabSelection = `${animationTabSelectionKeyframes} 3s ease-in-out infinite`;

interface TabProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  activated: boolean;
  name: string;
}
export const Tab: React.FC<TabProps> = ({ 
	color,
	children,
	onClick,
  activated,
  name,
	}) => {
    
    return (
      activated ? 
      <Box
        id='neonShadow'
        as={motion.div}
        animation={animationTabSelection}
        boxSizing='border-box'
        background='linear-gradient(180deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)'
        borderRadius="9px"
      >
        <button 
        onClick={onClick}
        style={{
          textAlign: 'center',
          color: color,
          borderRadius: "5px",
          width: "7vw",
          paddingTop: "1.5vh"
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
          paddingTop: "1.5vh"
        }}>{name}</button>
      </Box> 
    );
};

