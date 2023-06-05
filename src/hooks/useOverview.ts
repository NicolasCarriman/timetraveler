import React from "react";
import { ModuleOverviewConfiguration } from "../models/moduleOverviewConfig";
import { intinerarSelector } from "../redux/reducers/intineraryReducer/intinerary-selector";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useOverview = (
    bannerimages: string [],
) => {

    const [currentSlideSelected, setCurrentSlide] = React.useState(0);

    let switchImages = () => {
      if (currentSlideSelected < bannerimages.length - 1) {
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
    }
}