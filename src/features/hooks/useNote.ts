import React from "react";
import { ModuleNoteConfiguration } from "../models/moduleNoteConfig";

export const useNote = (
    config: ModuleNoteConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
          textArea: config.textArea,
        }
    );

    return {
        configuration,
    }
}