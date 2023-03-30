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
  
    return {
        currentSlideSelected,
        configuration,
    }
}