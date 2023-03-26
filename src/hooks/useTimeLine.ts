import React from "react";
import { ModuleTimeLineConfiguration } from "../models/moduleTimeLineConfig";

export const useTimeLine = (
    config: ModuleTimeLineConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			timeLineId: config.timeLineId,
			startDate: config.startDate,
			endDate: config.endDate,
			days: config.days,
			height: config.height,
			width: config.width
        }
    );

    return {
		configuration,
    }
}