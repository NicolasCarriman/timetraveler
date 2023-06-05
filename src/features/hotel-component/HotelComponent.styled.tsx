import { Box, BoxProps, keyframes, ContainerProps, Container, Text, Textarea } from "@chakra-ui/react";
import { motion } from "framer-motion";
import  React  from 'react';
import star from "../../theme/hotels/star2.png";

export const Letter: React.FC<{
	value: string;
}> = ({value}) => {
	return(
		<Text
      position='relative'
      top='0vh'
      textAlign='center'
      fontSize='2vw'
      color='rgba(200,200,255, 1)'
      fontFamily= 'Space Grotesk'
      fontStyle='italic'
		>
			{value}
		</Text>
	);
}

export const Stars: React.FC<{
  numberOf: number
}> = ({numberOf}) => {
  const rows = [];
  for (let i = 0; i < numberOf; i++) {
      rows.push(<img src={star} style={{height: '25px', width: '25px'}}></img>);
  }
	return(
		<Box
      display='flex'
      flexDirection='row'
      justifyContent='space-around'
      alignItems='center'
      marginTop='1vh'
      marginBottom='4vh'
      width='10vw'
		>
     {rows}
		</Box>
	);
}


interface IHeaderBanner extends BoxProps {
  imageUrl: string;
  detailsOn: boolean
}

const animationImgChangeKeyframes = keyframes`
  0% {opacity: 0;}
  15% {opacity: 1;}
  85% {opacity: 1;}
  100% {opacity: 0;}
  `;
const animationImgChange = `${animationImgChangeKeyframes} 5s linear infinite`;

export const HeaderBanner: React.FC<IHeaderBanner> = (props) => {
  console.log(props.detailsOn)
  return (
    <Box
      id='banner'
      h='100%'
      width='90vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
      as={motion.div}
      animation={animationImgChange}
      
      {...props}
    >
      <img src={props.imageUrl} alt='bannerImg' />
      <Mask detailsOn={props.detailsOn}/>
    </Box>
  );
};
const animationBackgroundKeyframes = keyframes`
  0%   {background-color: rgba(0,0,0,0);}
  25%  {background-color: rgba(0,0,0,0);}
  50%  {background-color: rgba(0,0,0,1);}
  100% {background-color: rgba(0,0,0,1);}
  `;
const animationBackground = `${animationBackgroundKeyframes} 0.1s ease-in-out forwards`;

export const Mask: React.FC<{detailsOn: boolean}> = ({detailsOn}) => {
  return (
    <Box
      as={motion.div}
      animation={detailsOn ? animationBackground : 'none'}
      position='absolute'
      left='0vw'
      zIndex='50'
      h='52%'
      width='90vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
      boxShadow='inset 0px -5px 10px 1px #070707, inset 0px 5px 10px 1px #070707, inset 150px 0px 100px 10px #070707, inset -150px 0px 100px 10px #070707'

    >
    </Box>
  );
};

export const BannerContainer: React.FC<BoxProps> = (props) => {
  return(
    <Container
      id="banner-container"
      padding='0'
      height="60%"
      width='100%'
      minWidth='90vw'
      overflow='hidden'
      display='flex'
      flexDir='column'
      {...props}
    />
  );
}

export const HotelInfo: React.FC<BoxProps> = (props) => {
  return(
    <Container
      position='absolute'
      height="8%"
      width='100%'
      minWidth='90vw'
      overflow='hidden'
      display='flex'
      flexDir='row'
      textAlign='center'
      justifyContent='center'
      alignItems='center'
      {...props}
    />
  );
}

export const Label: React.FC<{
  infoType: string;
  value: string;
}> = ({ infoType, value }) => {

  return (
      <Text
          display='flex'
          textAlign='center'
          alignItems='center'
          resize= 'none'
          px="2vw"
          height="5vh"
          border="none"
          color='rgba(200,200,255, 1)'
          fontFamily= 'Space Grotesk'
          fontWeight='bold'
      >
        {infoType}
        <br/>
        {value}
      </Text>
      
  )
}

export const MainContainer: React.FC<ContainerProps> = (props) => (
    <Container
    position='absolute'
    top='0vh'
    left='0vw'
    width='90vw'
    border='none'
    display='flex'
    flexDir='column'
    p='0'
    {...props}
    />
);

interface ILoadingAreaProps {
    children?: React.ReactNode;
}

export const LoadingAreaInvisible: React.FC<ILoadingAreaProps> = (props) => {
    return (
      <Box
        as='main'
        display='flex'
        flexDirection='column'
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

interface ButtonAuraProps {
  color?: string;
  children?: React.ReactNode;
}
export const ButtonAura: React.FC<ButtonAuraProps> = ({ 
	color,
	children,
}) => {
  return (
    <button 
      style={{
        position: 'relative',
        top:'10vh',
        background: 'transparent',
        borderRadius: '100px',
        borderTopRightRadius: '0px',
        borderTopLeftRadius: '0px',
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTop: '0px',
        height: "20vh",
        width: "90vw",
        zIndex: "20"
      }}
    >
      {children}
    </button>
  );
};

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
			color= 'rgba(200,200,255, 0.2)'
			fontSize='3vw'
			position='relative'
      textAlign='center'
			top='-4vh'
			as={motion.div}
			animation={isHover ? animationMoveLetters : "none"}
			userSelect='none'
			spellCheck={false}
			fontFamily= 'Space Grotesk'
		>
			{value}
		</Text>
	);
}

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
			animation={isHover ? animationMoveLetters : "none"}
			userSelect='none'
			spellCheck={false}
			fontFamily= 'Space Grotesk'
      zIndex='10'
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
			transition='0.5s'
			background= {props.isHover ? 'linear-gradient(to top, transparent 50%, #070707 50%), linear-gradient(180deg, rgba(0,151,255,0) 80%, rgba(0,151,255,0.2497373949579832) 99%, rgba(78,116,176,0.6895133053221288) 100%)': '#070707'}
			boxShadow= {props.isHover ? 'rgba(0, 26, 255, 1) -0px 2px 2px, rgba(255, 255, 255, 0.9) -0px 4px 4px, rgba(255, 255, 255, 0.2) -0px 8px 8px, rgba(255, 255, 255, 0.2) -0px 16px 8px, rgba(255, 255, 255, 0.1) -0px 32px 16px' : 'rgba(0, 26, 255, 0.5) -0px 2px 2px, rgba(255, 255, 255, 0.5) -0px 4px 4px, rgba(255, 255, 255, 0.1) 0px 4px 2px, rgba(255, 255, 255, 0.1) -0px 8px 4px, rgba(255, 255, 255, 0.1) -0px 16px 8px'}
			height='89vh'
			width='90vw'
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='space-around'
			borderRadius= '100px'
			borderTopRightRadius= '4vh'
			borderTopLeftRadius= '4vh'
			borderStyle= 'solid'
			borderWidth= '0px'
			borderTop='0px'
			color='white'
			overflow='hidden'
			{...props}
      	>
        	{props.children}
      	</Box>
    )
};