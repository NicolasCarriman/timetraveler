import { Box } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container";
import { useCarrousel } from "../../hooks/useCarrousel";
import getRandomId from "../../utilis/uid";
import { CarrouselContainer, CarrouselElement, ItemCarrousel } from "./CarrouselComponent.styled";


const getArray = (num: number) => {
  let unitys = [];
  for (let i = 1; i <= num; i++) {
    unitys.push(
      {
        element: `activity ${i}`,
        selected: i === 1 ? true : false,
        id: getRandomId(),
        position: i - 1
      }
    );
  }
  return unitys;
}

const array = getArray(32);

function CarrouselComponent() {
  const {
    setDegrees,
    degrees,
    setSelectElement,
    getMaxPosition,
    next,
    previus,
    renderData,
    setSelecteElementPrevius
  } = useCarrousel(array);

  const handleClick = (id: string) => {
    const element = renderData.find(i => i.id === id);
    const isSelectedElement = renderData.find((item) => item.selected === element.selected);
    if(!element) return;
    const isLastElement = element.position > (getMaxPosition(renderData) - 3);
    if (!isLastElement) {
      setDegrees(340);
      next(element.position);
      setSelectElement(id);
    } else {
      previus(element.position);
      setSelecteElementPrevius(id);
    }
  };

  const handleScroll = (event: any) => {
    const delta = event.deltaY;
    const elementIndex = renderData.findIndex(el => el.selected === true);
    const isScrollUp = Math.sign(delta) < 0;
    if (isScrollUp) {
      let nextElment = renderData[elementIndex + 1];
      if (elementIndex === renderData.length - 1) {
        nextElment = renderData[0]
      }
      setDegrees(340);
      next(nextElment.position);
      setSelectElement(nextElment.id);
    } else {
      let previusElement = renderData[elementIndex - 1];
      if(elementIndex === 0) {
        const lastElementIndex = renderData.length - 1;
        previusElement = renderData[lastElementIndex];
      }
      previus(previusElement.position);
      setSelecteElementPrevius(previusElement.id);
    }
  }

  return (
    <CarrouselContainer>
      <CarrouselElement
        degrees={degrees}
        onWheel={handleScroll}
      >
          {
            renderData.map((e, i) => (
              <ItemCarrousel
                item={e}
                onClick={() => handleClick(e.id)}
                key={i}
                var={i + 1}
                elementopacity= {e.opacity}
              />
            ))
          }
      </CarrouselElement>
    </CarrouselContainer>
  );
}

export default CarrouselComponent;
