import { useEffect, useState } from "react";
import { intineraryType } from "../../services/getIntinerary";

export const useArrow = (index: number, array: intineraryType[]) => {
  const [enableLeftArrow, setEnableLeftArrow] = useState(false);
  const [enableRightArrow, setEnableRightArrow] = useState(false);
  
  const updateLeftArrow = (index: number) => {
    if (index <= 0) {
      setEnableLeftArrow(false);
    }
    else {
      setEnableLeftArrow(true);
    }
  }

  const updateRightArrow = (index: number, array: intineraryType[]) => {
    if (index >= array.length - 1) {
      setEnableRightArrow(false);
    }
    else {
      setEnableRightArrow(true);
    }
  }


  useEffect(() => {
    updateLeftArrow(index);
    updateRightArrow(index, array);
  },[index]);


  return { enableLeftArrow, enableRightArrow }
}