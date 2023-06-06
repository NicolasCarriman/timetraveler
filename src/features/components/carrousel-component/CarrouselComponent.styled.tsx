import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../../components/container";

interface ItemCarrouselProps extends BoxProps {
  item: any
  var: number;
  elementopacity: string;
}

export const ItemCarrousel: React.FC<ItemCarrouselProps> = (props) => {
  const isSelected = props.item.selected;
  let isVisible = props.elementopacity !== '0';
  return (
    <Box
      as='h3'
      ml='2vw'
      left={0}
      right={0}
      position='absolute'
      fontSize='1em'
      fontWeight={isSelected ? 'bold' : 'light'}
      letterSpacing='2px'
      lineHeight='2em'
      sx={{
        pointerEvents: isVisible ? 'auto' : 'none',
        cursor: 'pointer',
        opacity: props.elementopacity,
        transition: '0.2s',
        maxW:'26vh',
        width: '100%',
        minWidth: '18vw',
        textAlign: 'center',
        color: isSelected ? 'white' : '#ffffffad',
        textShadow: isSelected ? '1px 1px black' : 'none',
        transform: `
          rotateX(calc(${props.var} * 20deg)) translateZ(105px)`
      }}
      {...props}
    >
      {props.item.title}
    </Box>
  );
};

export const CarrouselContainer: React.FC<BoxProps> = (props) => (
  <Container
    position='relative'
    display='flex'
    justifyContent='center'
    alignItems='center'
    sx={{
      transformStyle: 'preserve-3d',
      transform: 'rotateX(335deg)',
    }}
    {...props}
  />
);

interface CarrouselProps extends BoxProps {
  degrees: number
}

export const CarrouselElement: React.FC<CarrouselProps> = (props) => {
  return (
    <Box
      id="carrousel"
      position='relative'
      sx={{
        transformStyle: 'preserve-3d',
        transition: '0.6s',
        transform: `rotateX(${props.degrees}deg)`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minH: '40vh',
        height: '100%',
        width: '29vw',
      }}
      {...props}
    />
  );
}

