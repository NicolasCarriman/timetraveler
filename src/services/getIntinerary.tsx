import berlin from "../data/berlin.json";
import paris from "../data/paris.json";
import budapest from "../data/budapest.json"

import berlinBike from "../theme/activities/berlin-bike.jpg";
import berlinMuseum from "../theme/activities/berlin-museum.jpg";
import berlinNight from "../theme/activities/berlin-night.jpg";
import berlinReigcht from "../theme/activities/berlin-reigch.jpg";
import berlinWall from "../theme/activities/berlin-wall.jpg";

import budapestVacilica from "../theme/activities/budapest-basilicapalace.jpg";
import budapestBuda from "../theme/activities/budapest-budacastle.jpg";
import budapestDanube from "../theme/activities/budapest-danube.jpg";
import budapestJewish from "../theme/activities/budapest-jewish.jpg";

import parisMontmarte from "../theme/activities/paris-Montmartre.jpg"
import parisRiver from "../theme/activities/paris-River.jpg"
import parisEiffel from "../theme/activities/paris-eiffel-tower.jpg"
import parisLuvre from "../theme/activities/paris-luvre.jpg"
import parisVersalle from "../theme/activities/paris-versallespalace.jpg"

const parisActivityImages = [parisEiffel, parisLuvre, parisRiver, parisVersalle, parisMontmarte];
const berlinActivityImages = [berlinWall, berlinMuseum, berlinBike, berlinReigcht, berlinNight];
const budapestActivityImages = [budapestVacilica, budapestJewish, budapestDanube, budapestBuda];

export const intineraryMock = [budapest, paris,berlin];
const intineraryMockMap = () => {
  let intinerary = [];
  const imagesArr = [budapestActivityImages, parisActivityImages, berlinActivityImages]
  for (let i = 0; i< intineraryMock.length; i++) {
    intinerary.push(intineraryMock[i].extra_activities.map((items, index) => {return {...items, image: imagesArr[i][index]}}))
  }
  return intinerary;
}

const intineraryMockReMapped = intineraryMock.map((item, index) => {
  const newExtraActivities = intineraryMockMap();
  return {...item, extra_activities: newExtraActivities[index]
}});

export const getIntinerary = () => {
  return intineraryMockReMapped
};

export type intineraryType = typeof intineraryMockReMapped[0];

export const getCountryName = (intinerary: intineraryType[]) => {
  const names = intinerary.map((i) => { return i.country });
  return names;
}