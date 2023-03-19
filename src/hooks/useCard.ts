import React from "react";
import { ModuleCardConfiguration } from "../models/moduleCardConfig";

export const useCard = (
    imagesUrl: string[],
    config: ModuleCardConfiguration,
    currentSlide: number,
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
    
    const [images, setImages] = React.useState<string[]>(imagesUrl);
    const [currentSlideSelected, setCurrentSlide] = React.useState(0);

    let switchImages = () => {
      if (currentSlideSelected < images.length - 1) {
        setCurrentSlide(currentSlideSelected + 1);
        console.log(currentSlideSelected)
      } else {
        setCurrentSlide(0);
      }
    };
    React.useEffect(() => {
        const sliderInterval = setInterval(() => {
          switchImages();
        }, 5000);
        return () => {
          clearInterval(sliderInterval);
        };
    });
    /*
    const getImgUrl = () => {
        if(imgUrl){
            const fetchBanner = async() => {
                
                try {
                    const response = await fetch(imgUrl[0]);
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
    */
    return {
        images,
        currentSlideSelected,
        configuration,
    }
}