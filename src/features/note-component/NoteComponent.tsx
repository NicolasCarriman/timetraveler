import React from "react";
import { ModuleNoteConfiguration } from "../../models/moduleNoteConfig";
import { useNote } from "../../hooks/useNote";
import {
    NoteContainer,
    NeonBox,
    MainDataNote,
    TextArea,
    Arrow,
    InputContainer,
    Tab,
    TabContainer,
    ToolBarContainer,
} from "./NoteComponent.styled";

interface NoteProps {
    config: ModuleNoteConfiguration
}

export const NoteComponent: React.FC<NoteProps> = (
    { config }
) => {
    const { configuration } = useNote(
        config,
    );
    const SaveNoteAndLoadTimeLine = () => {
        console.log("Button Clicked, must save the Note component");
    };
    const BackToTimeLine = () => {
        console.log("Button Clicked, must back to TimeLine");
    };
    const ChangeTab = () => {
        console.log("Tab Clicked, must load the component that the user has selected");
    };
    return (
        <>
            <Arrow 
                onClick={SaveNoteAndLoadTimeLine} 
                color="white"
                top="12vh"
                left="70vw"
                orientation="right"
            >
             {'>'}
            </Arrow>
            <Arrow 
                onClick={BackToTimeLine}
                color="white" 
                top="12vh"
                left="22vw"
                orientation="left"
            >
             {'<'}
            </Arrow>
            <NoteContainer
                maxWidth='40vw'
                height='75vh'
                mt='8'
            >
                <TabContainer>
                    <Tab onClick={ChangeTab} color="white" activated="false" name="Overview"/>
                    <Tab onClick={ChangeTab} color="white" activated="false" name="Activities"/>
                    <Tab onClick={ChangeTab} color="white" activated="false" name="Info"/>
                    <Tab onClick={ChangeTab} color="white" activated="true" name="Notes"/>
                </TabContainer>
                <NeonBox>
                    <MainDataNote>
                        <InputContainer>
                            <TextArea 
                                width="36vw"
                                value={configuration.textArea}
                            />
                        </InputContainer>
                        <ToolBarContainer>
                            {'QUEDA PENDIENTE AGREGAR HERRAMIENTAS EN ESTA TOOLBAR PARA NOTAS !'}
                        </ToolBarContainer>
                    </MainDataNote>   
                </NeonBox>
            </NoteContainer>
        </>
    )
};
