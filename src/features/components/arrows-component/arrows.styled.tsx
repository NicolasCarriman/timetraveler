import { Box, BoxProps, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Container } from "../../../components/container";

interface IArrow extends BoxProps {
  side: 'left' | 'right'
  hover: string
}

interface IArrowAnimated extends BoxProps {
  animation?: any
}

const AnimatedArrow: React.FC<IArrowAnimated> = (props) => {
  return (
    <Box
      transform='rotateZ(90deg)'
      filter='drop-shadow(-1px 3px 8px #202b3c, 3px -4px 8px #847d87)'
      as={motion.svg}
      cursor='pointer'
      fontSize='3.6em'
      fontWeight='bold'
      transition='.5s'
      fill="#1a202c"
      height="24px"
      width="24px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
      {...props}

    >
      <path d="M490,254.451V0.419L245,235.953L0,0.419v254.032l245,235.131L490,254.451z M30.625,72.346L245,278.421L459.375,72.346
      v169.036L245,447.143L30.625,241.381V72.346z"/>
    </Box>
  )
}


export const Arrow: React.FC<IArrow> = (props) => {
  const isHover = props.hover === 'true';

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const handleCustomFunction = props.onClick;
    if (!handleCustomFunction) return;
    handleCustomFunction(event);
  }


  const animationFrame = keyframes`
    0% {fill: #1a202c; filter: none;}
    25% {fill: #1a202c; filter: none;}
    50% { fill: white; filter: drop-shadow(1px 1px 4px white);}
    75% { fill: white;}
    100% { fill: #1a202c;  filter: none;}
  `;

  return (
    <Container
      id='arrow-container'
      display='flex'
      flexDir='row'
      justifyContent='center'
      alignItems='center'
      height='calc(8vh)'
      onClick={handleClick}
    >
      <Box
        id='arrow'
        display='flex'
        flexDirection='row'
        transform={props.side === 'left' ? 'rotateY(180deg)' : undefined}
      >
        <AnimatedArrow
          animation={isHover ? `${animationFrame} 1s infinite` : 'none'}
        >
        </AnimatedArrow>
      </Box>
    </Container>
  );
}

interface ArrowProps {
  color: string;
  children?: React.ReactNode;
  orientation: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
export const ArrowComponent: React.FC<ArrowProps> = ({ 
	color,
	orientation,
  onClick
	}) => {
    
    const [hover, setHover ] = React.useState(false);

    const hoverTrue = () => setHover(true);
    const hoverFalse = () => setHover(false);
  
    return (
      orientation === "left" ?
        <button
          onClick={onClick}
          onMouseEnter={() => hoverTrue()}
          onMouseLeave={() => hoverFalse()}
          style={{
          color: color,
		      transition: '0.5s',
          background: hover ? 'linear-gradient(90deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)': '#070707',
          boxShadow: hover ? 'rgba(0, 26, 255, 1) -2px 2px 0px, rgba(255, 255, 255, 0.9) -4px 4px 0px, rgba(255, 255, 255, 0.2) -8px 8px 0px, rgba(255, 255, 255, 0.2) -16px 16px 8px, rgba(255, 255, 255, 0.1) -32px 32px 16px' : 'rgba(0, 26, 255, 0.5) -2px 2px 0px, rgba(255, 255, 255, 0.5) -4px 4px 0px, rgba(255, 255, 255, 0.1) -8px 8px 0px, rgba(255, 255, 255, 0.1) -16px 16px 8px, rgba(255, 255, 255, 0.1) -32px 32px 16px',
          borderRadius: '20px',
          height: "100%",
          width: "5vw",
          position: 'relative',
        }}
      >
        <Arrow side={"right"} hover={hover.toString()} />
      </button> :
        <button
          onClick={onClick}
          onMouseEnter={() => hoverTrue()}
          onMouseLeave={() => hoverFalse()}
          style={{
          color: color,
		      transition: '0.5s',
          background: hover ? 'linear-gradient(270deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)': '#070707',
          boxShadow: hover ? 'rgba(0, 26, 255, 1) 2px 2px 0px, rgba(255, 255, 255, 0.9) 4px 4px 0px, rgba(255, 255, 255, 0.2) 8px 8px 0px, rgba(255, 255, 255, 0.2) 16px 16px 8px, rgba(255, 255, 255, 0.1) 32px 32px 16px' : 'rgba(0, 26, 255, 0.5) 2px 2px 0px, rgba(255, 255, 255, 0.5) 4px 4px 0px, rgba(255, 255, 255, 0.1) 8px 8px 0px, rgba(255, 255, 255, 0.1) 16px 16px 8px, rgba(255, 255, 255, 0.1) 32px 32px 16px',
          borderRadius: '20px',
          height: "100%",
          width: "5vw",
          position: 'relative',
        }}
      >
        <Arrow side={"left"} hover={hover.toString()} />
      </button>
    );
};
