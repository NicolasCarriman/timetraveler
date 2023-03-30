import React from "react";
import { ModuleFormConfiguration } from "../models/moduleFormConfig";

export const useForm = (
    config: ModuleFormConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
			inputText: config.inputText,
			buttonText: config.buttonText,
			httpRequestUrl: config.httpRequestUrl,
			title: config.title,
        }
    );
	
    return {
		configuration,
    }
}