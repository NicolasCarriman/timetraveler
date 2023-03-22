import React from "react";
import { ModuleFormConfiguration } from "../models/moduleFormConfig";

export const useForm = (
    config: ModuleFormConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			accountId: config.accountId,
			themeColor: config.themeColor,
			themeBackgroundColor: config.themeBackgroundColor,
			inputText: config.inputText,
			buttonText: config.buttonText,
			httpRequestUrl: config.httpRequestUrl,
			neonTitle: config.neonTitle,
			animationsMode: config.animationsMode,
			height: config.height,
			width: config.width
        }
    );
	
    return {
		configuration,
    }
}