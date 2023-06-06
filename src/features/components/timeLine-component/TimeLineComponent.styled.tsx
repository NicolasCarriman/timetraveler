import { Box, BoxProps, ContainerProps, Container, keyframes, Button, ButtonProps, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import  React  from 'react';
import { pointConfiguration } from "../../models/moduleTimeLineConfig";


export const MainContainer: React.FC<ContainerProps> = (props) => (
    <Container
      h='65vh'
      position='absolute'
      top='0vh'
      left='5vw'
      border='none'
      display='flex'
      flexDir='column'
      p='0'
      {...props}
    />
);

export const NeonBox: React.FC<BoxProps> = (props) => {
  return (
    <Box
      height='100%'
      minH='65vh'
      display='flex'
      flexDirection='column'
      {...props}
    >
      {props.children}
    </Box>
  )
};

interface ILoadingAreaProps {
  children?: React.ReactNode;
}

export const LoadingAreaInvisible: React.FC<ILoadingAreaProps> = (props) => {
  return (
    <Box
      as='main'
      display='flex'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
      height='100%'
      flex='1'
      padding='0vw'
      overflow='hidden'
    >
      {props.children}
    </Box>
  );
};


interface DayTitleProps extends BoxProps {
  isHover: boolean
  somethingIsSelected: boolean
  textValue: string
}

const animationMoveLettersKeyframes = keyframes`
0% {opacity: 0; color: rgba(200,200,255, 0.1);}
100% { opacity: 1; color: rgba(200,200,255, 1);}
`;
const animationMoveLetters = `${animationMoveLettersKeyframes} 0.1s ease-in-out forwards`;

export const DayTitle: React.FC<DayTitleProps> = (props) => {
  return (
    <Box
      opacity={props.isHover ? '1' : '0.1' && props.somethingIsSelected ? '0.3' : '0.3'}
      color='white'
      fontSize='2vw'
      minH='20%'
      minW='100%'
      display='flex'
			as={motion.div}
			animation={props.isHover ? animationMoveLetters : "none"}
      alignItems='center'
      justifyContent='center'
      fontFamily= 'Space Grotesk'
      {...props}
    >
      {props.children}
      {props.textValue}
    </Box>
  )
};

export const DayPoints: React.FC<BoxProps> = (props) => {
  return (
    <Box
      color='white'
      display='flex'
      flexDirection='row'
      justifyContent='space-around'
      alignItems='center'
      textAlign='center'
      minH='80%'
      minW='100%'
      paddingBottom='18vh'
      {...props}
    >
      {props.children}
    </Box>
  )
};

interface PointProps extends ButtonProps {
	config: pointConfiguration
  isHover: boolean
  somethingIsSelected: boolean
  image: string
}

export const Point: React.FC<PointProps> = (props) => {
  return (
      <Button
      backgroundImage={props.image}
      backgroundSize='cover'
      opacity= {props.isHover ? '1' : '0.3' && props.somethingIsSelected ? '0.3' : '0.99'}
      height='4vh'
      width='2.1vw'
      borderRadius='50%'
      borderStyle='solid'
      borderWidth='0.4vh'
      {...props}
    >
      {props.children}
    </Button>
  )
};

interface DayAreaProps extends BoxProps {
  widthArea: string
  isHover: boolean
  somethingIsSelected: boolean
}

export const DayArea: React.FC<DayAreaProps> = (props) => {
  return (
      <Box
      boxSizing='border-box'
			background= {props.isHover ? 'linear-gradient(180deg, rgba(0,151,255,0) 95%, rgba(0,151,255,0.2497373949579832) 99%, rgba(78,116,176,0.6895133053221288) 100%)': 'transparent'}
			boxShadow= {props.isHover ? 'rgba(0, 26, 255, 1) -0px 1px 2px, rgba(255, 255, 255, 0.9) -0px 4px 4px, rgba(255, 255, 255, 0.2) -0px 8px 8px, rgba(255, 255, 255, 0.2) -0px 16px 8px, rgba(255, 255, 255, 0.1) -0px 32px 16px' : 'rgba(180, 180, 255, 0.5) -0px 2px 2px, rgba(255, 255, 255, 0.5) -0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px, rgba(255, 255, 255, 0.1) -0px 0px 0px, rgba(255, 255, 255, 0.1) -0px 0px 0px'}
      opacity= {props.isHover ? '1' : '0.3' && props.somethingIsSelected ? '0.3' : '0.7'}
      height='95%'
      width={props.widthArea}
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      alignItems='center'
      textAlign='center'
      borderRadius='40px'
      margin='0.1vw'
      {...props}
    >
      {props.children}
    </Box>
  )
};

export const Line: React.FC<BoxProps> = (props) => {
  return (
      <Box
      position='absolute'
			background= 'linear-gradient(to left, rgba(0,151,255,0) 0%,rgba(0,151,255,0) 90%, rgba(0,0,0,1) 100%), linear-gradient(to right, rgba(0,151,255,0) 0%,rgba(0,151,255,0) 90%, rgba(0,0,0,1) 100%),linear-gradient(0deg, rgba(0,151,255,0) 0%, rgba(78,116,176,0) 49%, rgba(255,255,255,1) 50%, rgba(78,116,176,0) 51%, rgba(0,151,255,0) 100%)'
      height='8%'
      width='99.5%'
      display='flex'
      flexDirection='row'
      opacity='0.3'
      userSelect='none'
      {...props}
    >
      {props.children}
    </Box>
  )
};

interface DescriptionNeonBoxProps extends BoxProps {
  isHover: boolean
  hoverText: string
}

export const DescriptionNeonBox: React.FC<DescriptionNeonBoxProps> = (props) => {
  return (
      <Box
        background='black'
        borderRadius='0.2vw'
        color='white'
        position='absolute'
        display='flex'
        top='35vh'
        height='8vh'
        alignItems='center'
        fontFamily= 'Space Grotesk'
      {...props}
    >
      {props.children}
      {props.isHover ? props.hoverText : null}
    </Box>
  )
};

interface XButtonProps {
  color?: string;
  children?: React.ReactNode;
  onClick: () => void;
}
export const XButton: React.FC<XButtonProps> = ({ 
	color,
	children,
	onClick,
}) => {
  return (
    <button 
      onClick={onClick}
      style={{
        position: 'absolute',
        color: 'white',
        top:'42vh',
        left: '-5vw',
        background: 'transparent',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTop: '0px',
        height: "10vh",
        width: "5vw",
        zIndex: "20",
      }}
    >
      {children}
    </button>
  );
};

const animationMoveXLetterKeyframes = keyframes`
0% {opacity: 0; color: rgba(200,200,255, 0.1);}
100% { opacity: 1; color: rgba(200,200,255, 1);}
`;
const animationMoveXLetter = `${animationMoveXLetterKeyframes} 0.1s ease-in-out forwards`;


export const XLetterAnimation: React.FC<{
	value: string;
	isHover: boolean;
}> = ({value, isHover}) => {
	return(
		<Text
			color= 'rgba(200,200,255, 0.3)'
			fontSize='3vw'
			position='absolute'
      textAlign='center'
			top='43vh'
      left='-3.5vw'
			as={motion.div}
			animation={isHover ? animationMoveXLetter : "none"}
			userSelect='none'
			spellCheck={false}
			fontFamily= 'Space Grotesk'
      zIndex='10'
		>
			{value}
		</Text>
	);
}