import React from "react";
import { ModuleNavigationConfiguration } from "../models/moduleNavigationConfig";

export const useNavigation = (
    config: ModuleNavigationConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			activeComponentName: config.activeComponentName,
			activeCard: config.activeCard,
			leftArrow: config.leftArrow,
			rightArrow: config.rightArrow,
			tabPanel: config.tabPanel,
			tabSelection: config.tabSelection,
			height: config.height,
			width: config.width,
			overviewComponent: config.overviewComponent,
			activityComponent: config.activityComponent,
			journalComponent: config.journalComponent,
			infoComponent: config.infoComponent,
        }
    );

	const changeTab = (tabName: string) => {
		setConfiguration({...configuration, activeComponentName: tabName})
	};
	const changeCard = (cardId: number) => {
		console.log("activeCard: " + configuration.activeCard)
		setConfiguration({...configuration, activeCard: cardId, activeComponentName: "overview"})
		
	};
    return {
		changeTab,
		changeCard,
		configuration
    }
}