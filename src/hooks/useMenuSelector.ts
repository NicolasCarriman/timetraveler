import React from "react";
import { ModuleMenuSelectorConfiguration } from "../models/moduleMenuSelectorConfig";

export const useMenuSelector = (
    config: ModuleMenuSelectorConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			itineraryId: config.itineraryId,
			cards: config.cards,
        }
    );
	
    return {
		configuration,
    }
}