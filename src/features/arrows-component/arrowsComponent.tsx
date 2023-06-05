import React from 'react'
import { Container } from '../../components/container';
import { Box } from '@chakra-ui/react';
import { Arrow } from './arrows.styled';
import { ArrowConfig } from '../../models';
import { useArrow } from '../../hooks/useArrow';
import { intineraryType } from '../../services/getIntinerary';



function ArrowsComponent({arrowConfig}: {arrowConfig: ArrowConfig<intineraryType[]>}) {

  const { currentIndex, arrayData, next, prev } = arrowConfig;
  const { enableLeftArrow, enableRightArrow } = useArrow(currentIndex, arrayData);

  return (
    <Container
      id='arrowContainer'
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      height='8vh'
      alignItems='center'
      marginTop='2vh'
    >
      <Box
        position='relative'
        id='left'
      >
        {
          enableLeftArrow &&

          <Arrow
            side='right'
            onClick={prev}
          />
        }
      </Box>
      <Box
        marginRight={'2x'}
        id='right'
      >
        {
          enableRightArrow &&
          <Arrow
            side='left'
            onClick={next}
          />
        }
      </Box>
    </Container>
  )
}

export default ArrowsComponent;