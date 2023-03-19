import React from "react";
import { Activity } from "../models/activity";
import { ModuleListConfiguration } from "../models/moduleListConfig";

export const useList = (
    imagesUrl: string[],
    config: ModuleListConfiguration,
    currentSlide: number,
  ) => {

  const [configuration, setConfiguration] = React.useState(
    {
      themeColor: config.themeColor,
      bannerActivated: config.bannerActivated,
      leftArrow: config.leftArrow,
      rightArrow: config.rightArrow,
      editElements: config.editElements,
      carrousel: config.carrousel
    }
  );
    
  const [images, setImages] = React.useState<string[]>(imagesUrl);
  const [currentSlideSelected, setCurrentSlide] = React.useState(0);


  /*
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
  */

  return {
    images,
    currentSlideSelected,
    configuration,
  }
}