import { BoxProps, Container, Text, Box } from "@chakra-ui/react";

import  React  from 'react';
import { ModuleCardConfiguration } from "../../models/moduleCardConfig";


interface PassedProps extends BoxProps{
	ishover: string
	somethingisselectedthenhide: string
}

export const CardItem: React.FC<PassedProps> = (props) => {
	const isHover = props.ishover === 'true';
	const somethingisselectedthenhide = props.somethingisselectedthenhide === 'true';
  return(
	
    <Container
		paddingTop='3vh'
		marginLeft='1vw'
		display='flex'
		flexDirection='column'
		boxShadow={isHover ? 'rgba(0, 26, 255, 1) 0px -2px 0px, rgba(255, 255, 255, 0.9) 0px -4px 0px, rgba(255, 255, 255, 0.2) 0px -8px 0px, rgba(255, 255, 255, 0.2) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px' : 'rgba(0, 26, 255, 0) 0px -2px 0px, rgba(255, 255, 255,0) 0px -4px 0px, rgba(255, 255, 255, 0) 0px -4px 0px, rgba(255, 255, 255, 0.0) 0px -16px 8px, rgba(255, 255, 255, 0.0) 0px -32px 16px'}
		height='38vh'
		width='30vh'
		transition={isHover ? 'all 1000ms ease': 'none'}
		opacity= {isHover ? '1' : '0.3' && somethingisselectedthenhide ? '0.3' : '0.7'}
		cursor='pointer'
		transform={isHover ? 'perspective(21vw) rotateY(0deg)' : 'perspective(21vw) rotateY(35deg)'}
		borderRadius='2.3vh'
		borderWidth={isHover ? '0.11vw': '0.11vw'}
		borderColor={isHover ? 'rgba(209, 210, 255, 0.6)': 'rgba(255, 255, 255, 0.3)'}
		borderStyle= 'solid'
		backgroundColor={isHover ? 'rgb(20, 20, 20, 0)' : 'rgb(20, 20, 20, 1)'}
	  {...props}
    />
    

  );
}


export const CardTitle: React.FC<{
    value: string;
  }> = ({value}) => {
	return(
		<Text
			marginLeft ='0.5vw'
			marginRight='0.5vw'
			fontSize='1.2vw'
			color='rgb(142, 143, 163, 1)'
			backgroundImage='linear-gradient(rgb(245, 245, 245) 50% rgb(173, 173, 173) 50%)'
			textAlign='center'
		>
			{value}
		</Text>
	);
}

export const Mask: React.FC<{isActive: boolean}> = (props) => {

	return (
		<Box
			position='absolute'
			top='12vh'
			left='4.19vw'
			zIndex='50'
			h='37%'
			width='45%'
			borderRadius='50%'
			boxShadow='inset 0px 0px 5px 10px rgb(20, 20, 20)'
			opacity={props.isActive ? '1' : '0'}
		/>
	);
};

export const CardArea: React.FC<{config: ModuleCardConfiguration}> = (props) => {
    return (       
		<Box
			height='50%'
			width='50%'
		>	
			<img src={props.config.imgUrl} alt={props.config.title}/>
	 		<Mask isActive={props.config.maskActive}/>
		</Box>
    )
}


