import React from "react";
import { ModuleCardConfiguration } from "../models/moduleCardConfig";

export const useCard = (
    imgUrl: string | undefined,
    config: ModuleCardConfiguration,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
          themeColor: config.themeColor,
          animationsMode: config.animationsMode,
          textArea: config.textArea,
          leftArrow: config.leftArrow,
          rightArrow: config.rightArrow,
          editMode: config.editMode,
        }
    );
    const [img, setImg] = React.useState<string | undefined>(undefined);
    const getImgUrl = () => {
        if(imgUrl){
            const fetchBanner = async() => {
                
                try {
                    const response = await fetch(imgUrl);
                    const data = await response.json();
                    setImg(data.imgUrl);
                } catch (error) {
                    console.log(error)
                };
            };
            fetchBanner();
        }
    }

    React.useEffect(() => {
        getImgUrl();
    }, []);

    return {
        img,
        configuration,
    }
}