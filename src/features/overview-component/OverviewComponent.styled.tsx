import { Box, BoxProps, keyframes, Container, Textarea } from "@chakra-ui/react";
import React from 'react';
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
        as={motion.div}
        key={props.imageUrl}
        id='banner'
        h='100%'
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 2 }}
        exit={{ opacity: 0}}
        {...props}
      >
        <img src={props.imageUrl} alt='bannerImg' />
        <Mask />
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
  return (
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

export const TextAreaContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      display='flex'
      flexDirection='column'
      justifyContent='center'
      align-items='center'
      minH='46.5vh'
      minW='38.2vw'
      padding='3%'
      margin='0px'
      {...props}
    />
  );
}

export const TextArea: React.FC<{
  left?: string;
  top?: string;
  width: string;
  placeholderText?: string;
  value?: string;
}> = ({ left, top, width, placeholderText, value }) => {

  return (
    <Textarea
      isRequired
      textAlign='center'
      position='relative'
      resize='none'
      top={top}
      left={left}
      px="2vw"
      backgroundColor={"rgba(255, 255, 255, 0.01)"}
      height="calc(38vh)"
      value={value}
      width={width}
      border="none"
      borderBottom="1px solid gray"
      color="white"
      _placeholder={{ color: "gray.600" }}
      placeholder={placeholderText}
    />
  )
}
