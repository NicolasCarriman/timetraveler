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
    border='solid'
    borderColor='#7878ff'
    borderRadius='12px'
    display='flex'
    flexDir='column'
    boxSizing='border-box'
    p='0'
    {...props}
    />
);

const animationKeyframes = keyframes`
  0% { box-shadow: 3px 4px 11px #adfaf1; }
  25% { box-shadow: 3px 4px 11px #00ffe1; }
  50% { box-shadow: 3px 4px 11px red; }
  75% { box-shadow: 3px 4px 11px #00ffe1; }
  100% { box-shadow: 3px 4px 11px #adfaf1; }
`;

const animation = `${animationKeyframes} 2.5s ease-in-out infinite`;

export const NeonBox: React.FC<BoxProps> = (props) => {
    return (
        <Box
        id='neonShadow'
        as={motion.div}
        animation={animation}
        boxShadow='3px 4px 11px #adfaf1'
        boxSizing='border-box'
        background='#3128287a'
        height='100%'
        display='flex'
        flexDirection='column'
        border='solid'
        p='4'
        borderColor='#d8ffe9'
        borderWidth='1px'
        borderRadius='8px'
        {...props}
      >
        {props.children}
      </Box>
    )
};

interface IDataListProps {
    children?: React.ReactNode;
}

export const MainDataAddEvent: React.FC<IDataListProps> = (props) => {
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

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}
export const Arrow: React.FC<Props> = ({ 
	border,
	color,
	children,
	height,
	onClick, 
	radius,
	width
	}) => {

    return (
		<button 
			onClick={onClick}
			style={{
			background: 'linear-gradient(90deg, rgba(160,200,255,0.6026785714285714) 0%, rgba(0,142,255,0.29735644257703087) 1%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)',
			border,
			borderRadius: radius,
			height,
			width,
			position: 'absolute',
			top: '28.3vh',
			left: '70vw'
			}}
		>
		{children}
	 	</button>
    );
};