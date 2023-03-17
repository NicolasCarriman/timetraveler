import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container";

interface ItemCarrouselProps extends BoxProps {
  item: any
  var: number;
  elementopacity: string;
}

export const ItemCarrousel: React.FC<ItemCarrouselProps> = (props) => {

  const isSelected = props.item.selected;

  return (
    <Box
      ml='12'
      as='h3'
      left='0'
      right='0'
      position='absolute'
      fontSize='1.4em'
      fontWeight={400}
      letterSpacing='10px'
      lineHeight='2em'
      textShadow={isSelected ? '-1px 3px 8px #0074ff, 3px -4px 8px #b800ff' : 'none'}
      sx={{
        cursor: 'pointer',
        opacity: props.elementopacity,
        transition: '0.4s',
        width: '100%',
        minWidth: '34vw',
        textAlign: 'left',
        color: isSelected ? '#00ffd0' : '#fff',
        transform: `translate(-50%, -50%)
          rotateX(calc(${props.var} * 20deg)) translateZ(105px)`
      }}
      {...props}
    >
      {props.item.element}
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
      className="carrousel"
      position='relative'
      sx={{
        transformStyle: 'preserve-3d',
        transition: '0.6s',
        transform: `rotateX(${props.degrees}deg)`,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'flex-start'
      }}
      {...props}
    />
  );
}
