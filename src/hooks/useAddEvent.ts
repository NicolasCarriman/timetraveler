import React from "react";
import { ModuleAddEventConfiguration } from "../models/moduleAddEventConfig";

export const useAddEvent = (
    config: ModuleAddEventConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
          themeColor: config.themeColor,
          leftArrow: config.leftArrow,
          rightArrow: config.rightArrow,
        }
    );


    return {
        configuration
    }
}