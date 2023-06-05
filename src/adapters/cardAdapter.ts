import { ModuleCardConfiguration } from "../models/moduleCardConfig";
import { intineraryType } from "../services/getIntinerary";
import flag1 from "../theme/flags/hungary.png";
import flag2 from "../theme/flags/france.png";
import flag3 from "../theme/flags/germany.png";

export const destinyToCardAdapter = (destinations: intineraryType[]) => {
  let cardData: ModuleCardConfiguration[] = [];

  const flagsImage = [flag1, flag2, flag3];

  for (let i = 0; i < destinations.length; i++) {
    cardData.push({
      title: destinations[i].country,
      imgUrl: flagsImage[i],
      maskActive: false
    })
  }

  return cardData;
}