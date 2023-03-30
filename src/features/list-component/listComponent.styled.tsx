import { Box, BoxProps, keyframes } from "@chakra-ui/react";
import  React  from 'react';
import { Container } from "../../components/container";
import { motion } from 'framer-motion';


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
      h='34vh'
      width='100%'
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
      id='mask'
      position='absolute'
      zIndex='50'
      h='100%'
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      boxShadow='inset 0px 0px 10px 10px #070707'
    >
    </Box>
  );
};

export const BannerContainer: React.FC<BoxProps> = (props) => {
  return(
    <Container
      id="banner-container"
      position='relative'
      padding='0'
      variant="small"
      height="30%"
      width='100%'
      maxW='100vw'
      overflow='hidden'
      {...props}
    />
  );
}

export const InputContainer: React.FC<BoxProps> = (props) => {
  return(
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
