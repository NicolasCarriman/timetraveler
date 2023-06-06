import React from 'react'
import { useArrow } from '../../hooks/useArrow';
import { intineraryType } from '../../../services/getIntinerary';
import { ArrowConfig } from '../../models';
import { ArrowComponent } from './arrows.styled';


function Arrow({ arrowConfig }: { arrowConfig: ArrowConfig<intineraryType[]> }) {

  const { currentIndex, arrayData, next, prev, side } = arrowConfig;
  const { enableLeftArrow, enableRightArrow } = useArrow(currentIndex, arrayData);

  const isLeftArrow = side === 'left';

  return (
    <>
      {
        isLeftArrow && enableLeftArrow ?
        <ArrowComponent onClick={() => prev()} color={"white"} orientation={"left"} />
        : null
      }
      {
        !isLeftArrow && enableRightArrow ?
        <ArrowComponent onClick={() => next()} color={"white"} orientation={"right"} />
        : null
      }
    </>
  )
}

export default Arrow;