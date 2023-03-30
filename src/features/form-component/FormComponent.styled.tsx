import { Box, BoxProps, Input, ContainerProps, Container, Text, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import  React  from 'react';


export const TipMessage: React.FC<{
	value: string;
}> = ({value}) => {
	return(
		<Text
			fontSize='4vw'
			lineHeight='35vh'
			color='rgba(200,200,255, 0.2)'
			textAlign='center'
			fontFamily= 'Space Grotesk'
			fontStyle='italic'
		>
			{value}
		</Text>
	);
}

export const MainContainer: React.FC<ContainerProps> = (props) => (
    <Container
		id='mainContainer'
		h='65vh'
    />
);

const animationMoveLettersKeyframes = keyframes`
0% {opacity: 0; color: rgba(200,200,255, 0.1);}
100% { opacity: 1; color: rgba(200,200,255, 1);}
`;
const animationMoveLetters = `${animationMoveLettersKeyframes} 0.1s ease-in-out forwards`;

export const LetterAnimation: React.FC<{
	value: string;
	isHover: boolean;
}> = ({value, isHover}) => {
	return(
		<Text
			color= 'rgba(200,200,255, 0.1)'
			fontSize='3vw'
			position='absolute'
			top='24vh'
			left='17.9vw'
			as={motion.div}
			animation={isHover ? animationMoveLetters : "none"}
			fontFamily= 'Space Grotesk'
		>
			{value}
		</Text>
	);
}

interface InputContainerProps extends BoxProps {
	isHover: boolean;
}

export const InputContainer: React.FC<InputContainerProps> = (props) => {
    return (
        <Box
			position='relative'
			top='20vh'
			transition='0.5s'
			background= {props.isHover ? 'linear-gradient(to top, transparent 50%, #070707 50%), linear-gradient(180deg, rgba(0,151,255,0) 80%, rgba(0,151,255,0.2497373949579832) 99%, rgba(78,116,176,0.6895133053221288) 100%)': '#070707'}
			boxShadow= {props.isHover ? 'rgba(0, 26, 255, 1) -0px 2px 2px, rgba(255, 255, 255, 0.9) -0px 4px 4px, rgba(255, 255, 255, 0.2) -0px 8px 8px, rgba(255, 255, 255, 0.2) -0px 16px 8px, rgba(255, 255, 255, 0.1) -0px 32px 16px' : 'rgba(0, 26, 255, 0.5) -0px 2px 2px, rgba(255, 255, 255, 0.5) -0px 4px 4px, rgba(255, 255, 255, 0.1) 0px 4px 2px, rgba(255, 255, 255, 0.1) -0px 8px 4px, rgba(255, 255, 255, 0.1) -0px 16px 8px'}
			height='60%'
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='space-around'
			paddingTop='8vh'
			borderRadius= '100px'
			borderTopRightRadius= '4vh'
			borderTopLeftRadius= '4vh'
			color='white'
			overflow='hidden'
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
        display='flex'
        flexDirection='column'
        alignItems='center'
        height='100%'
      >
        {props.children}
      </Box>
    );
  };


  export const InputField: React.FC<{
    type?: string;
    width?: string;
	placeholder?: string;
}> = ({type, width, placeholder}) => {

    return (
        <Input
            type={type == undefined ? "text" : type}
            isRequired
            textAlign='center'
            backgroundColor={"rgba(255, 255, 255, 0.01)"}
            height="5vh"
            width={width == undefined ? "15vw" : width}
            border="none"
            borderBottom= "1px solid gray"
            color= "white"
            _placeholder={{ color: "gray.100" }}
            placeholder={placeholder == undefined ? "Input text" : placeholder}
			fontFamily= 'Space Grotesk'
        />
    )
}

interface ButtonAuraProps {
  color?: string;
  children?: React.ReactNode;
  onClick: () => void;
}
export const ButtonAura: React.FC<ButtonAuraProps> = ({ 
	color,
	children,
	onClick,
}) => {
  return (
    <button 
      onClick={onClick}
      style={{
		position: 'relative',
		top:'2vh',
        borderRadius: '100px',
        borderTopRightRadius: '0px',
        borderTopLeftRadius: '0px',
		borderStyle: 'solid',
		borderWidth: '0px',
		borderTop: '0px',
        height: "20vh",
        width: "45.94vw",
		zIndex: "20"
      }}
    >
      {children}
    </button>
  );
};
