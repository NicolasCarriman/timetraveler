import React from "react";
import { ModuleNoteConfiguration } from "../../models/moduleNoteConfig";
import { useNote } from "../../hooks/useNote";
import {
    TextArea,
    InputContainer,
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
    return (
        <>
            <InputContainer>
                <TextArea 
                    width='auto'
                    value={configuration.textArea}
                />
            </InputContainer>
            <ToolBarContainer>
                {'QUEDA PENDIENTE AGREGAR HERRAMIENTAS EN ESTA TOOLBAR PARA NOTAS !'}
            </ToolBarContainer>
        </>
    )
};
