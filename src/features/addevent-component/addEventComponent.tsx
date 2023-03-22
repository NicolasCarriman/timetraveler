import React from "react";
import { ModuleAddEventConfiguration } from "../../models/moduleAddEventConfig";
import { useAddEvent } from "../../hooks/useAddEvent";
import {
    InputField,
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
    return (
        <>
            <InputField 
                type="text" 
                left="0vw" 
                top="-1vh" 
                width="18vw"
                placeholder="Input event name"
            />
            <InputField 
                type="date" 
                left="11vw" 
                top="5vh" 
                width="11vw"
                placeholder="Input event name"
            />
            <InputField 
                type="date" 
                left="-11vw" 
                top="0vh" 
                width="11vw"
                placeholder="Input event name"
            />
        </>
    )
};
