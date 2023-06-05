import { Box, BoxProps, keyframes, ContainerProps, Container, ResponsiveValue } from "@chakra-ui/react";
import React from 'react';
import { motion } from 'framer-motion';


export const MainContainer: React.FC<ContainerProps> = (props) => (
  <Container
    id='MainContainer'
    overflow='hidden'
    boxShadow='dark-lg'
    variant='small'
    position='relative'
    border='none'
    display='flex'
    flexDir='column'
    maxWidth='calc(100vw)'
    width='100%'
    justifyContent='center'
    alignItems='center'
    boxSizing='border-box'
    p='0'
    height='calc(100vh)'
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
      minH='70vh'
      display='flex'
      width='65%'
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

export const LoadingArea: React.FC<ILoadingAreaProps> = (props) => {
  return (
    <Box
      as='main'
      overflow='hidden'
      id='loading-area'
      height='100%'
      flex='1'
      borderRadius='12px'
      border='solid'
      borderWidth='1px'
      borderColor='#0f1715'
      boxShadow='1px 1px 2px #5e5e5e,
            0px 0px 2px #5e5e5e'
      padding='0'
    >
      {props.children}
    </Box>
  );
};

interface IArrow extends BoxProps {
  side: 'left' | 'right'
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
  const [isHover, setIsHover] = React.useState(false);
  const arrowRef = React.useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const handleCustomFunction = props.onClick;
    if (!handleCustomFunction) return;
    handleCustomFunction(event);
  }

  const animationKeyframesFirst = keyframes`
    0% { fill: #1a202c; filter: none;}
    25% { fill: #1a202c; filter: none;}
    50% { fill: #1a202c; filter: none;}
    75% { 20%; fill: #d79eff; filter: drop-shadow(1px 1px 4px white);}
    100% { 20%; fill: #d79eff; filter: drop-shadow(1px 1px 4px white);}
  `;

  const animationKeyframesSecond = keyframes`
    0% {fill: #1a202c; filter: none;}
    25% {fill: #1a202c; filter: none;}
    50% { fill: #d79eff; filter: drop-shadow(1px 1px 4px white);}
    75% { fill: #7f6393;}
    100% { fill: #1a202c;  filter: none;}
  `;

  const animationKeyframesThird = keyframes`
    0% { fill: #d79eff; filter: drop-shadow(1px 2px 4px white);}
    25% { fill: #d79eff; filter: drop-shadow(1px 2px 4px white);}
    50% { fill: #7f6393; filter: none;}
    75% { fill: #1a202c;}
    100% { fill: #1a202c; filter: none;}
  `;

  const animations = [animationKeyframesFirst, animationKeyframesSecond, animationKeyframesThird]

  const getKeyFrames = (index: number) => {
    for (let i = 0; i < animations.length; i++) {
      if (index === i) {
        return `${animations[i]} 1s infinite`;
      }
    }
  }

  const onHoverAnimation = () => {
    setIsHover(true)
  }

  const onLeaveAnimation = () => {
    setIsHover(false);
  }

  const ArrowArray = new Array(3).fill(0);

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
        ref={arrowRef}
        onMouseEnter={onHoverAnimation}
        onMouseLeave={onLeaveAnimation}
        transform={props.side === 'left' ? 'rotateY(180deg)' : undefined}
      >
        {
          ArrowArray.map((element, index) => (
            <AnimatedArrow
              key={index}
              animation={isHover ? getKeyFrames(index) : undefined}
            >
            </AnimatedArrow>
          ))
        }
      </Box>
    </Container>
  );
}

export const TabContainer: React.FC<BoxProps> = (props) => {
  return (
    <Container
      margin='0'
      id='tab-container'
      fontFamily='Space Grotesk'
      display='flex'
      flexDirection='row'
      minH='5vh'
      minW='38.2vw'
      justifyContent='left'
      {...props}
    />
  );
}

const animationTabSelectionKeyframes = keyframes`
0% { box-shadow: black; }
3% { box-shadow: rgba(0, 26, 255, 0.1) 0px -2px 0px, rgba(255, 255, 255, 0.1) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
10% { box-shadow: rgba(0, 26, 255, 0.5) 0px -2px 0px, rgba(255, 255, 255, 0.5) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -8px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
50% { box-shadow: rgba(0, 26, 255, 0.7) 0px -2px 0px, rgba(255, 255, 255, 0.5) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -8px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
100% { box-shadow: rgba(0, 26, 255, 1) 0px -2px 0px, rgba(255, 255, 255, 0.9) 0px -4px 0px, rgba(255, 255, 255, 0.2) 0px -8px 0px, rgba(255, 255, 255, 0.2) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px; }
`;
const animationTabSelection = `${animationTabSelectionKeyframes} 3s ease-in-out infinite`;

interface TabProps {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
  activated: boolean;
  name: string;
  isHover: boolean;
}
export const Tab: React.FC<TabProps> = ({
  color,
  children,
  onClick,
  activated,
  name,
  isHover,
}) => {

  return (
    activated ?
      <Box
        id='neonShadow'
        boxShadow='rgba(0, 26, 255, 0.5) 0px -2px 0px, rgba(255, 255, 255, 0.5) 0px -4px 0px, rgba(255, 255, 255, 0.1) 0px -8px 0px, rgba(255, 255, 255, 0.1) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px;'
        boxSizing='border-box'
        borderRadius="9px"
      >
        <button
          onClick={onClick}
          style={{
            textAlign: 'center',
            color: color,
            borderRadius: "5px",
            width: "7vw",
            paddingTop: "1.5vh",
            background: isHover ? 'linear-gradient(180deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)' : '#070707',
          }}>{name}</button>
      </Box>
      :
      <Box
        id='neonShadow'
        boxSizing='border-box'
      >
        <button
          onClick={onClick}
          style={{
            textAlign: 'center',
            color: color,
            borderRadius: "5px",
            width: "7vw",
            paddingTop: "1.5vh",
            transition: '0.4s',
            boxShadow: isHover ? 'rgba(0, 26, 255, 1) 0px -2px 0px, rgba(255, 255, 255, 0.9) 0px -4px 0px, rgba(255, 255, 255, 0.2) 0px -8px 0px, rgba(255, 255, 255, 0.2) 0px -16px 8px, rgba(255, 255, 255, 0.1) 0px -32px 16px' : 'rgba(0, 26, 255, 0) 0px -2px 0px, rgba(255, 255, 255,0) 0px -4px 0px, rgba(255, 255, 255, 0) 0px -4px 0px, rgba(255, 255, 255, 0.0) 0px -16px 8px, rgba(255, 255, 255, 0.0) 0px -32px 16px',
            background: isHover ? 'linear-gradient(180deg, rgba(255,255,255,0.6026785714285714) 0%, rgba(78,116,176,0.6895133053221288) 3%, rgba(0,151,255,0.2497373949579832) 15%, rgba(0,151,255,0) 70%)' : '#070707',
          }}>{name}</button>
      </Box>
  );
};