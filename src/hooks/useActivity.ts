import React from "react";
import { Activity } from "../models/activity";

const mockedData = [
  {
    id: '123',
    text: 'Test Activity 1',
    selected: true
  },
  {
    id:'654',
    text: 'Test Activity 2',
    selected: false,
  },
  {
    id: '223',
    text: 'Test Activity 3',
    selected: false
  },
  {
    id: '523',
    text: 'Test Activity 4',
    selected: false
  },
  {
    id: '526',
    text: 'Test Activity 5',
    selected: false
  },
];

export const useActivity = () => {
  const [activityList, setActivityList] = React.useState<Activity[]>(mockedData);
  const [selectedAct, setSelectedAct] = React.useState<Activity>(getSelectedAct(mockedData));
  
  function setDefaultOrder (actArr: Activity[] | undefined) {
    if (actArr && actArr.length > 2 && actArr.length % 2 === 0) {
      let newArr: Activity[];
      const firstElements = actArr.slice(0,2);
      const lastElements = actArr.slice(2,4);
      newArr = lastElements.concat(firstElements);
      return newArr
    } else if (actArr && actArr.length > 3 && actArr.length % 2 !== 0) {
        let newArr: Activity[];
        const firstElements = actArr.slice(0,3);
        const lastElements = actArr.slice(3, actArr.length);
        newArr = lastElements.concat(firstElements);
        return newArr;
    } else return [];
  };

  function getSelectedAct(actArr: Activity[]) {
    const currentAct = actArr.find((act) => act.selected);
    if (currentAct) {
      return currentAct;
    } else return actArr[0]
  };

  const selectActivity = (id: string) => {
    const prevSelectedAct = activityList.find((act) => (act.selected === true));
    const currentAct = activityList.find((act) => (act.id === id));
    if (currentAct === prevSelectedAct) return;
    else {
      const activityUpdate = activityList.map((act) => {
        if (act.id === prevSelectedAct?.id) {
          return {
            ...act, selected: false
          }
        } else if (act.id === currentAct?.id) {
          return {
            ...act, selected: true
          }
        } else return act;
      });
      setActivityList(activityUpdate);
    }
  };

  function getActIndex(activitys: Activity[]) {
    const currentAct = activitys.find((item) => item.selected === true);
    if (currentAct) {
      const actIndex = activitys.indexOf(currentAct);
      return actIndex
    } else return 0;
  };

  const slideAct = (actArr: Activity[]) => {
    if (actArr && actArr.length > 2 && actArr.length % 2 === 0) {
      const currentIndex = getActIndex(activityList);
      const substraction = actArr.length - currentIndex;
      if ( substraction === 1) {
        console.log('next', substraction);
      }
    } else return actArr;
  };

  const slideNextAct = (actArr: Activity[]) => {
    const currentSelected = actArr.find((act) => act.selected === true);
    if (currentSelected) {
      const currentIndex = actArr.indexOf(currentSelected);
      slideAct(activityList);
      return currentIndex * 24; 
    } else return 0;
  };

  return {
    activityList,
    selectActivity,
    setDefaultOrder,
    slideNextAct,
  }
};
