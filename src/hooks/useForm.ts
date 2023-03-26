import React from "react";
import { ModuleFormConfiguration } from "../models/moduleFormConfig";

export const useForm = (
    config: ModuleFormConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			accountId: config.accountId,
			inputText: config.inputText,
			buttonText: config.buttonText,
			httpRequestUrl: config.httpRequestUrl,
			neonTitle: config.neonTitle,
			height: config.height,
			width: config.width
        }
    );
	
    return {
		configuration,
    }
}