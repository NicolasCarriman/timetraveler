import React, { useState } from "react";
import { dayConfiguration, ModuleTimeLineConfiguration } from "../../models/moduleTimeLineConfig";
import { useTimeLine } from "../../hooks/useTimeLine";
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
} from "./TImeLineComponent.styled";

interface TimeLineProps {
    config: ModuleTimeLineConfiguration
    days: dayConfiguration[]
}

export const TimeLineComponent: React.FC<TimeLineProps> = (
    { config, days }
) => {
    const { configuration, daysToRender } = useTimeLine(
        config,
        days
    );

    const [isHoverPoint, setIsHoverPoint] = useState([-1, -1]);

    const handleMouseEnterPoint = (day: number, point: number) => {
        setIsHoverPoint(() => [day, point]);
        console.log(isHoverPoint);
    };
  
    const handleMouseLeavePoint = () => {
        setIsHoverPoint([-1, -1]);
    };
    return (
        <>
            <MainContainer
                maxWidth='90vw'
                height={configuration.height}
                mt='8'
            >
                <NeonBox>
                    <LoadingAreaInvisible>
                        <Line onMouseLeave={() => (handleMouseLeavePoint())}/>
                        {
                            daysToRender.map((e, day_index) => (
                                <DayArea widthArea={"" + (100 / daysToRender.length) + "%"} isHover={isHoverPoint[0] == day_index ? true : false} somethingIsSelected={isHoverPoint[0] != -1 ? true : false}>
                                    <DayTitle isHover={isHoverPoint[0] == day_index ? true : false} somethingIsSelected={isHoverPoint[0] != -1 ? true : false} textValue={"Day " + (day_index + 1)}/>
                                    <DayPoints>
                                        {
                                            daysToRender[day_index].events.map((e, event_index) =>(
                                                <div
                                                    onMouseEnter={() => handleMouseEnterPoint(day_index, event_index)}
                                                >
                                                    <DescriptionNeonBox hoverText={daysToRender[day_index].events[event_index].hoverText} isHover={isHoverPoint[0] == day_index && isHoverPoint[1] == event_index ? true : false}/>
                                                    <Point image={daysToRender[day_index].events[event_index].icon} config={daysToRender[day_index].events[event_index]} isHover={isHoverPoint[0] == day_index && isHoverPoint[1] == event_index ? true : false} somethingIsSelected={isHoverPoint[0] != -1 && isHoverPoint[1] != -1 ? true : false}/>
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
