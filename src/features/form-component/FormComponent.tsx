import React, { useState } from "react";
import { ModuleFormConfiguration } from "../../models/moduleFormConfig";
import { useForm } from "../../hooks/useForm";
import {
    InputContainer,
    TipMessage,
    InputField,
    ButtonAura,
    LetterAnimation,
    MainContainer,
} from "./FormComponent.styled";


interface FormProps {
    config: ModuleFormConfiguration;
    handler: (componentName: string) => void;
}

export const FormComponent: React.FC<FormProps> = (
    { config, handler }
) => {
    const { configuration } = useForm(
        config,
    );

    console.log(config);


    const sendFormRequest = () => {
        console.log("Button Clicked, must send http request");
        /*
         If we use this to load the itinerary, we must send a GET http request to: /itinerary?={itineraryId}
         It must retrieve this data:
         {
            itineraryId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046"
            cards: [cards data array]
         }
         If we use this to login, we must send a POST http request to: /login 
         and redirect the user to Dashboard component if pass and user is valid.
         
         We must include a loading animation.
        */
        handler("menuselector")
    };

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
  
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    
    return (
        <>
            <TipMessage value={configuration.title}/>
            <MainContainer>
                    <InputContainer
                        ishover={isHover}
                    >
                        <InputField placeholder={configuration.inputText}/>
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <ButtonAura onClick={sendFormRequest}/>
                            <LetterAnimation value={configuration.buttonText} isHover={isHover}/>
                        </div>
                    </InputContainer>
            </MainContainer>
        </>
    )
};
