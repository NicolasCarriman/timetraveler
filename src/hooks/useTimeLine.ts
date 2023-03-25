import React from "react";
import { dayConfiguration, ModuleTimeLineConfiguration } from "../models/moduleTimeLineConfig";

export const useTimeLine = (
    config: ModuleTimeLineConfiguration,
	daysToRender: dayConfiguration[]
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			timeLineId: config.timeLineId,
			startDate: config.startDate,
			endDate: config.endDate,
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
		daysToRender
    }
}