import React, { useState } from "react";
import { ModuleTimeLineConfiguration } from "../../models/moduleTimeLineConfig";
import {
  MainContainer,
  NeonBox,
  LoadingAreaInvisible,
  Line,
  Point,
  DayArea,
  DescriptionNeonBox,
  DayTitle,
  DayPoints,
  XButton,
  XLetterAnimation
} from "./TimeLineComponent.styled";
import { HotelComponent } from "../hotel-component/HotelComponent";
import { useTimeLine } from "../../hooks";

interface TimeLineProps {
  config: ModuleTimeLineConfiguration;
  handler: (componentName: string) => void;
}

export const TimeLineComponent: React.FC<TimeLineProps> = (
  { config, handler }
) => {
  const { configuration } = useTimeLine(
    config,
  );

  const [isHoverPoint, setIsHoverPoint] = useState([-1, -1]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHoverX, setIsHoverX] = useState(false);
  const currentComponent = configuration.days[0].events[0].component;
  console.log(currentComponent);
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleMouseEnterPoint = (day: number, point: number) => {
    setIsHoverPoint(() => [day, point]);
  };

  const handleMouseLeavePoint = () => {
    setIsHoverPoint([-1, -1]);
  };

  const handleMouseEnterX = () => {
    setIsHoverX(true);
  };

  const handleMouseLeaveX = () => {
    setIsHoverX(false);
  };

  return (
    <>
      <MainContainer
        maxWidth='90vw'
        mt='8'
        height='100%'
      >
        <NeonBox>
          <LoadingAreaInvisible>
            {isOpen ? null :
              <div
                onMouseEnter={handleMouseEnterX}
                onMouseLeave={handleMouseLeaveX}
              >
                <XButton onClick={() => handler("navigation")} />
                <XLetterAnimation value={"<"} isHover={isHoverX} />
              </div>
            }
            {isOpen ? null : <Line onMouseLeave={() => (handleMouseLeavePoint())} />}
            {isOpen ? <HotelComponent config={currentComponent} onClose={closeModal} isOpen={isOpen} currentSlide={0} /> :
              configuration.days.map((e, day_index) => (
                <DayArea
                  widthArea={"" + (100 / configuration.days.length) + "%"}
                  isHover={isHoverPoint[0] === day_index ? true : false}
                  somethingIsSelected={isHoverPoint[0] !== -1 ? true : false}
                >
                  <DayTitle
                    isHover={isHoverPoint[0] === day_index ? true : false}
                    somethingIsSelected={isHoverPoint[0] !== -1 ? true : false}
                    textValue={"Day " + (day_index + 1)}
                  />
                  <DayPoints>
                    {
                      configuration.days[day_index].events.map((e, event_index) => (
                        <div
                          onMouseEnter={() => handleMouseEnterPoint(day_index, event_index)}
                        >
                          <DescriptionNeonBox
                            hoverText={configuration.days[day_index].events[event_index].hoverText}
                            isHover={isHoverPoint[0] === day_index && isHoverPoint[1] === event_index ? true : false}
                          />
                          <Point
                            image={configuration.days[day_index].events[event_index].icon}
                            config={configuration.days[day_index].events[event_index]}
                            isHover={isHoverPoint[0] === day_index && isHoverPoint[1] === event_index ? true : false}
                            onClick={() => setIsOpen(true)}
                            somethingIsSelected={isHoverPoint[0] !== -1 && isHoverPoint[1] !== -1 ? true : false}
                          />
                        </div>
                      ))
                    }
                  </DayPoints>
                </DayArea>
              ))
            }
          </LoadingAreaInvisible>
        </NeonBox>
      </MainContainer>
    </>
  )
};
