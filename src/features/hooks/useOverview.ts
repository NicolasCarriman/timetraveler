import React from "react";

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