import React from "react";
import { ModuleNavigationConfiguration } from "../models/moduleNavigationConfig";

export const useNavigation = (
    config: ModuleNavigationConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			activeComponentName: config.activeComponentName,
			activeCard: config.activeCard,
			enableArrows: config.enableArrows,
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
			setConfiguration((prevConfig) => ({
				...prevConfig,
				activeComponentName: tabName,
			}));
		};

    return {
		changeTab,
		configuration,
    }
}