import React, { useState } from "react";
import { ModuleFormConfiguration } from "../../models/moduleFormConfig";
import { useForm } from "../../hooks/useForm";
import {
    MainContainer,
    InputContainer,
    LoadingAreaInvisible,
    Letter,
    InputField,
    ButtonAura,
    LetterAnimation,
} from "./FormComponent.styled";


interface FormProps {
    config: ModuleFormConfiguration
}

export const FormComponent: React.FC<FormProps> = (
    { config }
) => {
    const { configuration } = useForm(
        config,
    );


    const sendFormRequest = () => {
        console.log("Button Clicked, must send http request");
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
            <Letter value={configuration.neonTitle}/>
            <MainContainer
                maxWidth='50vw'
                height={configuration.height}
                mt='8'
            >
                <LoadingAreaInvisible>
                    <InputContainer
                        isHover={isHover}
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
                </LoadingAreaInvisible>  
            </MainContainer>
        </>
    )
};
