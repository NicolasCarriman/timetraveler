import React from "react";
import { useAppDispatch, useAppSelector } from "./useRedux"
import { destinySelector } from "../redux/reducers/destinyReducer/destiny-selector";
import { overview } from "../redux/reducers/intineraryReducer/intinerary-state";
import { destinyToOverviewAdapter } from "../adapters/overviewAdapter";
import { setCurrentDestiny } from "../redux/reducers/destinyReducer/destiny-slice";

export const useDestiny = () => {
  const [currentIndex, setCurrenIndex] = React.useState<number>(0);
  const destiny = useAppSelector(destinySelector);
  const dispatch = useAppDispatch();
  const overviewConfig = destiny.currentDestiny ? destinyToOverviewAdapter(destiny.currentDestiny, getCurrentImages(currentIndex)) : undefined;

  const getCurrentDestinyIndex = () => {
    const actualCurrentDestiny = destiny.currentDestiny;
    const destinyIndex = destiny.Destinations.findIndex((item) => item.city === actualCurrentDestiny?.city);
    setCurrenIndex(destinyIndex);
  }

  const nextDestiny = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= destiny.Destinations.length) {
      setCurrenIndex(0);
      dispatch(setCurrentDestiny(destiny.Destinations[0]));
    } else {
      setCurrenIndex(nextIndex);
      dispatch(setCurrentDestiny(destiny.Destinations[nextIndex]));
    }
  }

  const prevDestiny = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0 ) {
      setCurrenIndex(destiny.Destinations.length);
      dispatch(setCurrentDestiny(destiny.Destinations[destiny.Destinations.length - 1]));
    } else {
      setCurrenIndex(prevIndex);
      dispatch(setCurrentDestiny(destiny.Destinations[prevIndex]));
    }
  }

  function getCurrentImages(id: number) {
    const imageArray = overview[id];
    return imageArray;
  }

  React.useEffect(() => {
    getCurrentDestinyIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destiny.currentDestiny])

  return {
    destiny,
    currentIndex,
    overviewConfig,
    nextDestiny,
    prevDestiny,
  }
}