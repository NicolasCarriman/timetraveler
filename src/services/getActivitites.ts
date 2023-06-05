import getRandomId from "../utilis/uid";
import { intineraryType } from "./getIntinerary";

export const getActivities = (data: intineraryType) => {
  const getArray = (data: intineraryType) => {
    const extraActivities = data.extra_activities;
    let unitys = [];
    for (let i = 1; i <= extraActivities.length; i++) {
      const currentAct = extraActivities[i - 1];
      console.log(currentAct);
      unitys.push(
        {
          img: currentAct.image,
          title: currentAct.title,
          selected: i === 1 ? true : false,
          id: getRandomId(),
          position: i - 1,
          price: i,
          text: currentAct.description,
          location: data.city,
        }
      );
    }
    return unitys;
  }
  return getArray(data);
}
