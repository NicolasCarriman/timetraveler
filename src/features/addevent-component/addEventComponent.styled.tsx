import { Box, BoxProps, keyframes, ContainerProps, Container, Input } from "@chakra-ui/react";
import  React  from 'react';
import { motion } from 'framer-motion';


export const AddEventContainer: React.FC<ContainerProps> = (props) => (
    <Container
    boxShadow='dark-lg'
    variant='small'
    h='60vh'
    position='absolute'
    top='25vh'
    left='28.5vw'
    border='none'
    display='flex'
    flexDir='column'
    boxSizing='border-box'
    p='0'
    {...props}
    />
);

const animationKeyframes = keyframes`
  0% { box-shadow: rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px; }
  25% { box-shadow: rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px; }
  50% { box-shadow: rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px; }
  75% { box-shadow: rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px; }
  100% { box-shadow: rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px; }
`;

const animation = `${animationKeyframes} 2.5s ease-in-out infinite`;

export const NeonBox: React.FC<BoxProps> = (props) => {
    return (
        <Box
        id='neonShadow'
        as={motion.div}
        animation={animation}
        boxShadow='rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px'
        boxSizing='border-box'
        background='#070707'
        height='100%'
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

interface IDataAddEventProps {
    children?: React.ReactNode;
}

export const MainDataAddEvent: React.FC<IDataAddEventProps> = (props) => {
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
      >
        {props.children}
      </Box>
    );
  };

export const InputField: React.FC<{
    type: string; 
    left: string; 
    top: string; 
    width: string
}> = ({type, left, top, width}) => {

    return (
        <Input
            type={type}
            isRequired
            textAlign='center'
            position='relative'
            top={top}
            left={left}
            px="2vw"
            backgroundColor={"rgba(255, 255, 255, 0.01)"}
            height="5vh"
            width={width}
            border="none"
            borderBottom= "1px solid gray"
            color= "white"
            _placeholder={{ color: "gray.100" }}
            placeholder="Input event name"
        />
    )
}

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
        height: "29vh",
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
        height: "29vh",
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