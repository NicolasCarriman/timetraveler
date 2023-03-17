import { Box } from "@chakra-ui/react";
import React from "react";
import { Container } from "../../components/container";
import { useCarrousel } from "../../hooks/useCarrousel";
import getRandomId from "../../utilis/uid";
import { CarrouselContainer, CarrouselElement, ItemCarrousel } from "./CarrouselComponent.styled";

//value 340deg
//cada 20
//ahora tenemos que configurar el componente que se maneje por posiciones
//primera posicion selected ultima posicion
// hice click en un elemento, ese elemento es mayor a el elemento previo? y esta a un rango de dos lugares? next()
//sino 

function reOrderData (data : ICarrouselData[]) {
  const first = data.slice(2, data.length);
  const last = data.slice(0,2);
  return (first.concat(last));
}


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

const array = getArray(8);

interface ICarrouselData {
  element: string;
  selected: boolean;
  id: string;
  position: number;
}

//debo de tomar los numeros que se van a ver

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

  return (
    <CarrouselContainer>
      <CarrouselElement degrees={degrees}>
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