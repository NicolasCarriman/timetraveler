import { Box, BoxProps, List, keyframes } from "@chakra-ui/react";
import  React  from 'react';
import { Container, ContainerProps } from "../../components/container";
import { motion } from 'framer-motion';

export const ListContainer: React.FC<ContainerProps> = (props) => (
  <Container
    boxShadow='dark-lg'
    variant='small'
    h='60vh'
    border='solid'
    borderColor='#7878ff'
    borderRadius='12px'
    display='flex'
    flexDir='column'
    boxSizing='border-box'
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
      background='#2827277a'
      height='100%'
      display='flex'
      flexDirection='column'
      border='solid'
      p='4'
      borderColor='#d8ffe9'
      borderWidth='1px'
      borderRadius='12px'
      {...props}
    >
      {props.children}
    </Box>
  );
};

interface IHeaderBanner {
  imgUrl: string;
}

export const HeaderBanner: React.FC<IHeaderBanner> = (props) => {
  return (
    <Box
      as='header'
      id='banner'
      h='100%'
      minH='20vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      border='solid'
      borderWidth='1px'
      borderColor='whatsapp.100'
    >
      <img src={props.imgUrl} alt='bannerImg' />
    </Box>
  );
};

export const BannerContainer: React.FC<BoxProps> = (props) => {
  return(
    <Container
      variant="small"
      height="24%"
      {...props}
    />
  );
}

interface IDataListProps {
  children?: React.ReactNode;
}

export const MainDataList: React.FC<IDataListProps> = (props) => {
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

export const EmptyDestinys: React.FC = () => (
  <Box as='h1'>
    no activitys avalible
  </Box>
);