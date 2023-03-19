import React from "react";
import { ModuleNoteConfiguration } from "../models/moduleNoteConfig";

export const useNote = (
    config: ModuleNoteConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
          themeColor: config.themeColor,
          animationsMode: config.animationsMode,
          textArea: config.textArea,
          leftArrow: config.leftArrow,
          rightArrow: config.rightArrow,
        }
    );

    return {
        configuration,
    }
}