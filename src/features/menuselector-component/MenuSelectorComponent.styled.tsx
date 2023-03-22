import { Box, BoxProps, keyframes, ContainerProps, Container, Text } from "@chakra-ui/react";
import  React  from 'react';


export const Letter: React.FC<{
	value: string;
}> = ({value}) => {
	return(
		<Text
			fontSize='4vw'
			lineHeight='20vh'
			textShadow='0 0 5px #0400ff, 0 0 15px #0400ff, 0 0 20px #0400ff, 0 0 40px #0400ff, 0 0 60px #00c3ff, 0 0 10px #003cff, 0 0 98px #00c3ff;color: #e6e6ff;'
			textAlign='center'
			animation='blink 12s infinite'
      fontFamily= 'Alkatra'
		>
			{value}
		</Text>
	);
}

export const MainContainer: React.FC<ContainerProps> = (props) => (
    <Container
    boxShadow='dark-lg'
    variant='small'
    h='65vh'
    position='absolute'
    top='18vh'
    left='5vw'
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
        minH='65vh'
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