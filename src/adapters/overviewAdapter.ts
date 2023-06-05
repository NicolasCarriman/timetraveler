import { IDestiny } from "../models/intineraryReducer"
import { intineraryType } from "../services/getIntinerary";

export const destinyToOverviewAdapter = (destinyData: intineraryType, currenImg: {images: string[]}) => {
  let config: IDestiny = {
    textArea: destinyData.overview.about,
    images: currenImg.images,
    title: destinyData.city,
    maskActive: false
  };

  return config;
}