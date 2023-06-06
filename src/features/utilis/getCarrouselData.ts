import { intineraryType } from "../../services/getIntinerary";
import getRandomId from "../../utilis/uid";

export const getCarrouselData = (data: intineraryType) => {
  const getArray = (data: intineraryType) => {
    const extraActivities = data.extra_activities;
    let unitys = [];
    for (let i = 1; i <= extraActivities.length; i++) {
      const currentAct = extraActivities[i - 1];
      unitys.push(
        {
          title: currentAct.title,
          selected: i === 1 ? true : false,
          id: getRandomId(),
          position: i - 1,
        }
      );
    }
    return unitys;
  }
  return getArray(data);
}
