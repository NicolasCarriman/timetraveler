import { Box, BoxProps, keyframes, ContainerProps, Container, Text } from "@chakra-ui/react";
import  React  from 'react';


export const Letter: React.FC<{
	value: string;
}> = ({value}) => {
	return(
		<Text
      fontSize='4vw'
      lineHeight='25vh'
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
    position='relative'
    display='flex'
    justifyContent='center'
    alignItems='center'
    {...props}
    />
);

export const NeonBox: React.FC<BoxProps> = (props) => {
    return (
        <Box
        boxShadow='rgba(0, 26, 255, 0.5) 0px 2px 0px, rgba(255, 255, 255, 0.5) 0px 4px 0px, rgba(255, 255, 255, 0.1) 0px 8px 0px, rgba(255, 255, 255, 0.1) 0px 16px 8px, rgba(255, 255, 255, 0.1) 0px 32px 16px'
        background='#070707'
        height='100%'
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
        id='loading-area-invisible'
        display='flex'
        flexDir='row'
        justifyContent='center'
      >
        {props.children}
      </Box>
    );
  };
