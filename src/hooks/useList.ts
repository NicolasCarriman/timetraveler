import React from "react";
import { Activity } from "../models/activity";
import { ModuleListConfiguration } from "../models/moduleListConfig";

export const useList = (
    config: ModuleListConfiguration,
    currentSlide: number,
  ) => {

  const [configuration, setConfiguration] = React.useState(
    {
      bannerActivated: config.bannerActivated,
      carrousel: config.carrousel,
      images: config.images
    }
  );
    
  const [images, setImages] = React.useState<string[]>(configuration.images);
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
    currentSlideSelected,
    configuration,
  }
}