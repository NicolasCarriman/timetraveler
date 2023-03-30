import React from "react";
import { ModuleCardConfiguration } from "../models/moduleCardConfig";

export const useCard = (
    config: ModuleCardConfiguration,
    active: boolean,
    somethingIsSelectedThenHide: boolean,
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
    }
}