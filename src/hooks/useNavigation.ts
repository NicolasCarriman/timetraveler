import { propNames } from "@chakra-ui/react";
import React from "react";
import { ModuleNavigationConfiguration } from "../models/moduleNavigationConfig";

export const useNavigation = (
    config: ModuleNavigationConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			id: config.id,
			activeComponentName: config.activeComponentName,
			themeColor: config.themeColor,
			themeBackgroundColor: config.themeBackgroundColor,
			animationsMode: config.animationsMode,
			editMode: config.editMode,
			leftArrow: config.leftArrow,
			rightArrow: config.rightArrow,
			tabPanel: config.tabPanel,
			tabSelection: config.tabSelection,
			height: config.height,
			width: config.width
        }
    );
	const [activeComponentName, setActiveComponentName] = React.useState("")

	const changeTab = (asd: string) => {
		setConfiguration({...configuration, activeComponentName: asd})
	};
	
    return {
		changeTab,
		configuration
    }
}