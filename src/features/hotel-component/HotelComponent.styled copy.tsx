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
      top='-2vh'
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
      marginBottom='5vh'
      width='10vw'
		>
     {rows}
		</Box>
	);
}


interface IHeaderBanner extends BoxProps {
  imageUrl: string;
}

const animationImgChangeKeyframes = keyframes`
  0% {opacity: 0;}
  15% {opacity: 1;}
  85% {opacity: 1;}
  100% {opacity: 0;}
  `;
const animationImgChange = `${animationImgChangeKeyframes} 5s linear infinite`;

export const HeaderBanner: React.FC<IHeaderBanner> = (props) => {
  return (
    <Box
      id='banner'
      h='100%'
      width='97vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
      as={motion.div}
      animation={animationImgChange}
      {...props}
    >
      <img src={props.imageUrl} alt='bannerImg' />
      <Mask/>
    </Box>
  );
};

export const Mask: React.FC = () => {
  return (
    <Box
      position='absolute'
      left='10vw'
      zIndex='50'
      h='60%'
      width='87vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
      boxShadow='inset 0px -5px 10px 1px #070707, inset 0px 5px 10px 1px #070707, inset 200px 0px 100px 10px #070707, inset -200px 0px 100px 10px #070707'
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
      minWidth='97vw'
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
      paddingRight='10.5vw'
      marginTop='1vh'
      height="8%"
      width='100%'
      minWidth='97vw'
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
          height="25vh"
          border="none"
          color='rgba(200,200,255, 0.6)'
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
    left='-4.2vw'
    width='100vw'
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
        p='0'
        paddingLeft='10vw'
        borderRadius='40px'
        borderBottomLeftRadius='0'
        borderTopLeftRadius='0'
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
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='100%'
        flex='1'
        padding='0vw'
        paddingBottom='1.5vh'
        overflow='hidden'
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
  isHoverArrow?: boolean
}
export const Arrow: React.FC<ArrowProps> = ({ 
	color,
	children,
	onClick,
	top,
	left,
  isHoverArrow
	}) => {
    
    return (
        <button 
          onClick={onClick}
          style={{
            color: color,
            transition: '0.5s',
            borderRadius: '40px',
            background: isHoverArrow ? 'linear-gradient(90deg, rgba(255,255,255,0.60) 0%, rgba(78,116,176,0.69) 3%, rgba(0,151,255,0.25) 10%, rgba(0,0,0,0) 40%)': 'linear-gradient(90deg, rgba(0,0,0,0) 50%, transparent 100%)',
            boxShadow: isHoverArrow ? 'rgba(0, 26, 255, 1) -2px 0px 2px, rgba(255, 255, 255, 0.9) -4px 0px 4px, rgba(255, 255, 255, 0.2) -8px 0px 8px, rgba(255, 255, 255, 0.2) -16px 0px 8px, rgba(255, 255, 255, 0.1) -32px 0px 16px' : 'rgba(0, 26, 255, 0.5) -2px 0px 2px, rgba(255, 255, 255, 0.5) -4px 0px 4px, rgba(255, 255, 255, 0.1) -4px 0px 2px, rgba(255, 255, 255, 0.1) -8px 0px 4px, rgba(255, 255, 255, 0.1) -16px 0px 8px',
            height: "92.6vh",
            width: "12vw",
            position: 'absolute',
            top: top,
            left: left,
            zIndex: '50'
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
			position='absolute'
      
			top='36vh'
			left='-3vw'
			as={motion.div}
			animation={isHover ? animationMoveLetters : "none"}
			userSelect='none'
			spellCheck='false'
			fontFamily= 'Space Grotesk'
      zIndex= '49'
      transform='rotate(-90deg)'
		>
			{value}
		</Text>
	);
}