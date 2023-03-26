import React from "react";
import { ModuleMenuSelectorConfiguration } from "../models/moduleMenuSelectorConfig";

export const useMenuSelector = (
    config: ModuleMenuSelectorConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			accountId: config.accountId,
			cards: config.cards,
			height: config.height,
			width: config.width
        }
    );
	
    return {
		configuration,
    }
}