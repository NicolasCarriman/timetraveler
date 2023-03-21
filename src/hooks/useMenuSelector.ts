import React from "react";
import { ModuleCardConfiguration } from "../models/moduleCardConfig";
import { ModuleMenuSelectorConfiguration } from "../models/moduleMenuSelectorConfig";

export const useMenuSelector = (
    config: ModuleMenuSelectorConfiguration,
	cardsToRender: ModuleCardConfiguration[]
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			accountId: config.accountId,
			themeColor: config.themeColor,
			themeBackgroundColor: config.themeBackgroundColor,
			animationsMode: config.animationsMode,
			editMode: config.editMode,
			height: config.height,
			width: config.width
        }
    );
	
    return {
		configuration,
		cardsToRender
    }
}