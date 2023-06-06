import React from "react";
import { ModuleHotelConfiguration } from "../models/moduleHotelConfig";

export const useHotel = (
    config: ModuleHotelConfiguration,
    currentSlide: number,
) => {

    const [configuration, setConfiguration] = React.useState(
        {
            name: config.name,
            spokenLanguages: config.spokenLanguages,
            stars: config.stars,
            images: config.images,
            locationCoordinates: config.locationCoordinates,
            checkinHour: config.checkinHour,
            checkoutHour: config.checkoutHour,
            startDate: config.startDate,
            endDate: config.endDate,
			rooms: config.rooms,
			breakfast: config.breakfast,
			wifi: config.wifi,
			address: config.address,
			phoneNumber: config.phoneNumber,
			contactEmail: config.contactEmail,
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
		configuration
    }
}
