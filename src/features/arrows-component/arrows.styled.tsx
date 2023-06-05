import { Box, BoxProps, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Container } from "../../components/container";

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
          ArrowArray.map((_element, index) => (
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