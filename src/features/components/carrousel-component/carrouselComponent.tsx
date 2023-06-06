import React, { WheelEventHandler } from "react";
import { CarrouselContainer, CarrouselElement, ItemCarrousel } from "./CarrouselComponent.styled";
import { ICarrouselData } from "../../models/carrousel";
import { useCarrousel } from "../../hooks/useCarrousel";

interface ICarrousel {
  data: ICarrouselData[];
  onSelectedData: (data: ICarrouselData) => void;
}
function CarrouselComponent({ data, onSelectedData }: ICarrousel) {

  const {
    setDegrees,
    degrees,
    setSelectElement,
    getMaxPosition,
    next,
    previus,
    renderData,
    setSelecteElementPrevius
  } = useCarrousel(data);

  const getSelectedActivity = (data: ICarrouselData[]) => {
    const selectedActivity = data.find((item) => item.selected === true);
    if (!selectedActivity) return data[0];
    return selectedActivity;
  }

  const handleClick = (id: string) => {
    const element = renderData.find(i => i.id === id);
    if (!element) return;
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

  const handleScroll: WheelEventHandler<HTMLDivElement> = (event) => {
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
      if (elementIndex === 0) {
        const lastElementIndex = renderData.length - 1;
        previusElement = renderData[lastElementIndex];
      }
      previus(previusElement.position);
      setSelecteElementPrevius(previusElement.id);
    }
  }

  React.useEffect(() => {
    onSelectedData(getSelectedActivity(renderData))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderData]);

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
              elementopacity={e.opacity}
            />
          ))
        }
      </CarrouselElement>
    </CarrouselContainer>
  );
}

export default CarrouselComponent;
