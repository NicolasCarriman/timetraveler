import React from "react";
import { ModuleOverviewConfiguration } from "../models/moduleOverviewConfig";

export const useOverview = (
    config: ModuleOverviewConfiguration,
    currentSlide: number,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
          textArea: config.textArea,
          images: config.images
        }
    );
    
    const [images, setImages] = React.useState<string[]>(configuration.images);
    const [currentSlideSelected, setCurrentSlide] = React.useState(0);

    let switchImages = () => {
      if (currentSlideSelected < images.length - 1) {
        setCurrentSlide(currentSlideSelected + 1);
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
        currentSlideSelected,
        configuration,
    }
}