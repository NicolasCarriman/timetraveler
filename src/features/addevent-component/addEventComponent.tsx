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
    const ClickMe = () => {
        console.log("Button Clicked, must load the Card component and also save to the db new event on timeline");
    };

    return (
        <>
            <Arrow 
                onClick={ClickMe} 
                border="1px" 
                color="rgba(14,0,255,1)" 
                height="30vh"
                width="20vw" 
                radius="3px"
            >
             {'>'}
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
