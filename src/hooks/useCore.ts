import React from "react";
import { ModuleCoreConfiguration } from "../models/moduleCoreConfig";

export const useCore = (
    config: ModuleCoreConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			activeComponentName: config.activeComponentName,
			selectedCard: config.selectedCard,
			themeColor: config.themeColor,
			themeBackgroundColor: config.themeBackgroundColor,
			animationsMode: config.animationsMode,
			editMode: config.editMode,
			height: config.height,
			width: config.width
        }
    );

	const loadComponent = (componentName: string) => {
		setConfiguration({...configuration, activeComponentName: componentName})
	};

	const loadCard = (cardId: number) => {
		setConfiguration({...configuration, selectedCard: cardId})
	};

    return {
		loadComponent,
		loadCard,
		configuration
    }
}