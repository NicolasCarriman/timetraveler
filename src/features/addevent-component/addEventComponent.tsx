import React from "react";
import { ModuleAddEventConfiguration } from "../../models/moduleAddEventConfig";
import { useAddEvent } from "../../hooks/useAddEvent";
import {
    AddEventContainer,
    NeonBox,
    MainDataAddEvent,
    InputField,
    Arrow,
} from "./addEventComponent.styled";

interface AddEventProps {
    config: ModuleAddEventConfiguration
}

export const AddEventComponent: React.FC<AddEventProps> = (
    { config }
) => {
    const { configuration } = useAddEvent(
        config
    );
    const SaveEventAndLoadCard = () => {
        console.log("Button Clicked, must load the Card component and also save to the db new event on timeline");
    };
    const BackToTimeLine = () => {
        console.log("Button Clicked, must back to TimeLine");
    };
    return (
        <>
            <Arrow 
                onClick={SaveEventAndLoadCard} 
                color="white"
                top="29.3vh"
                left="70vw"
                orientation="right"
            >
             {'>'}
            </Arrow>
            <Arrow 
                onClick={BackToTimeLine}
                color="white" 
                top="29.3vh"
                left="22vw"
                orientation="left"
            >
             {'<'}
            </Arrow>
            <AddEventContainer
                maxWidth='40vw'
                height='30vh'
                mt='8'
            >
                <NeonBox>
                    <MainDataAddEvent>
                        <InputField 
                            type="text" 
                            left="0vw" 
                            top="-1vh" 
                            width="18vw"
                        />
                        <InputField 
                            type="date" 
                            left="11vw" 
                            top="5vh" 
                            width="11vw"
                        />
                        <InputField 
                            type="date" 
                            left="-11vw" 
                            top="0vh" 
                            width="11vw"
                        />
                    </MainDataAddEvent>   
                </NeonBox>
            </AddEventContainer>
        </>
    )
};
