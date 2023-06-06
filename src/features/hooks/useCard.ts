import React from "react";
import { ModuleCardConfiguration } from "../models";


export const useCard = (
    config: ModuleCardConfiguration,
    active: string,
    somethingIsSelectedThenHide: string,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
            title: config.title,
            imgUrl: config.imgUrl,
            maskActive: config.maskActive,
        }
    );

    return {
        configuration,
        active,
        somethingIsSelectedThenHide,
        setConfiguration
    }
}