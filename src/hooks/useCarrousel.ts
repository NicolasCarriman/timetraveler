import React from "react";
import { ICarrouselData } from "../models/carrouset";
import getRandomId from "../utilis/uid";

//buscar el de la posicion seleccionada
const getArrayData = () => {
  let renderData: Partial<ICarrouselData>[] = [];

  for (let i = 0; i < 18; i++) {
    renderData.push({
      element: ``,
      position: i
    })
  };

  return renderData
}

export const useCarrousel = (array: ICarrouselData[]) => {
  const [renderData, setRenderData] = React.useState<any[]>(setOrder(array));
  const [carrouselData, setCarrouselData] = React.useState<ICarrouselData[]>(array);
  const [degrees, setDegrees] = React.useState<number>(0);

  const getMaxPosition = (array: ICarrouselData[]) => {
    const mapedPositions = array.map(arr => arr.position);
    const lastPosition = (Math.max(...mapedPositions));
    return lastPosition;
  }

  function setOrder(data: ICarrouselData[]) {
    const selectedElementIndex = data.findIndex((item) => item.selected === true);
    let positionData: any[] = getArrayData();
    positionData = positionData.slice(data.length)
    const first = data.slice(selectedElementIndex, selectedElementIndex + 3);
    const last = data.slice(selectedElementIndex + 3);
    const result = first.concat(positionData);

    const setOpacity = (elements: ICarrouselData[]) => {
      const opacityMap = elements.map((item, index) => {
        if (index < selectedElementIndex + 3 || index > elements.length - 3) {
          return {
            ...item,
            opacity: '0.8'
          };
        } else return {
          ...item,
          opacity: '0'
        }
      });
      return opacityMap
    }

    const resetPositions = (elements: ICarrouselData[]) => {
      const last = elements.slice(selectedElementIndex).map((item, i) => { return { ...item, position: i } });
      const first = elements.slice(0, selectedElementIndex).map((item, i) => { return { ...item, position: (getMaxPosition(last) + 1 + i) } });
      return first.concat(last);
    };

    const elementsWithOpacity = setOpacity(result.concat(last));

    return resetPositions(elementsWithOpacity);
  };

  const initCarrousel = (id: string) => {
    let selectedActivity = renderData.find((act) => (act.id === id));
    if (!selectedActivity) return;

    let elementsData = [...renderData];

    const setSelectedActivity = (selectedActivity: ICarrouselData) => {
      const prevSelectedAct = renderData.find((act) => (act.selected === true));
      if (selectedActivity === prevSelectedAct) return array;
      else {
        const dataUpdate = renderData.map((act) => {
          if (act.id === prevSelectedAct?.id) {
            return {
              ...act, selected: false
            }
          } else if (act.id === selectedActivity?.id) {
            return {
              ...act, selected: true
            }
          } else return act;
        });
        elementsData = dataUpdate;
      }
    };

    setSelectedActivity(selectedActivity);

    const getNextElements = (selectedActivity: ICarrouselData) => {
      const index = carrouselData.findIndex(item => item.element === selectedActivity.element);
      const nextElements = carrouselData.slice(index + 1, index + 4);
      return nextElements;
    }

    let nextElements = getNextElements(selectedActivity);

    interface ICarrousel {
      currenSelected: any;
      updatedData: any[];
      nextElements: ICarrouselData[] | undefined;
    }

    const insertNextElements = (updatedData: any[], nextElements: ICarrouselData[]) => {
      if (!nextElements) return;

      const nextElementIndex = updatedData.findIndex((item) => item.selected === true) + 1;

      if (nextElements.length < 3) {
        const repetitions = 3 - nextElements.length;
        for (let i = 0; (i + 1) <= repetitions; i++) {
          const element = carrouselData[i];
          nextElements.push({ ...element, id: getRandomId() });
        };
      };

      const nextElementsWithRandomId = nextElements.map(
        (item) => {
          return { ...item, id: getRandomId(), selected: false }
        });

      const arrayWithoutElements = (updatedData: ICarrouselData[]) => {
        const arrayElement = [...updatedData];
        const first = arrayElement.slice(0, nextElementIndex);
        const last = arrayElement.slice(nextElementIndex).slice(3);
        const result = first.concat(nextElementsWithRandomId).concat(last);
        return result;
      }

      return arrayWithoutElements(updatedData);
    };

    insertNextElements(elementsData, nextElements);

    const visibleElements = () => {
      //un bucle para recorrer el arreglo

      const getNextElements = (currenSelected: ICarrouselData) => {
        const nextElementIndex = carrouselData.findIndex(item => item.element === currenSelected.element);
        const nextElements = carrouselData.slice(nextElementIndex + 1, nextElementIndex + 4);
        return nextElements;
      }

      const insertElements = (currenSelected: ICarrouselData, updatedData: ICarrouselData[]) => {
        let nextElements = getNextElements(currenSelected);
        if (nextElements) {
          const indexToSlice = updatedData.findIndex((item) => item.selected === true) + 1;
          if (nextElements.length < 3) {
            const repetitions = 3 - nextElements.length;
            for (let i = 0; (i + 1) <= repetitions; i++) {
              const element = carrouselData[i];
              nextElements.push({ ...element, id: getRandomId() });
            };
          };

          const nextElementsWithRandomId = nextElements.map(
            (item) => {
              return { ...item, id: getRandomId(), selected: false }
            });

          const arrayWithoutElements = (updatedData: ICarrouselData[]) => {
            const arrayElement = [...updatedData];
            const first = arrayElement.slice(0, indexToSlice);
            const last = arrayElement.slice(indexToSlice).slice(3);
            const result = first.concat(nextElementsWithRandomId).concat(last);
            return result;
          }

          return arrayWithoutElements(updatedData);
        }
      };

      const newUpdatedElements = insertElements(selectedActivity, elementsData);
      if (!newUpdatedElements) return;

      const resetPositions = (updatedData: any[]) => {
        const selectedIndex = updatedData.indexOf(selectedActivity);
        if (!selectedActivity) return;

        const last = updatedData.slice(selectedIndex).map((item, i) => { return { ...item, position: i } });
        const first = updatedData.slice(0, selectedIndex).map((item, i) => { return { ...item, position: (getMaxPosition(last) + 1 + i) } });
        return first.concat(last);
      };

      return resetPositions(newUpdatedElements);
    }
  }





  const setSelecteElementPrevius = (id: string) => {
    let selectedActivity = renderData.find((act) => (act.id === id));
    if (!selectedActivity) return;

    const setSelectedElement = (selectedActivity: ICarrouselData) => {
      const prevSelectedAct = renderData.find((act) => (act.selected === true));
      if (selectedActivity === prevSelectedAct) return array;
      else {
        const dataUpdate = renderData.map((act) => {
          if (act.id === prevSelectedAct?.id) {
            return {
              ...act, selected: false
            }
          } else if (act.id === selectedActivity?.id) {
            return {
              ...act, selected: true
            }
          } else return act;
        });
        return dataUpdate
      }
    };

    const updatedData = setSelectedElement(selectedActivity);

    const currenSelected = updatedData.find(item => item.selected === true);

    const visibleElements = () => {

      const getNextElements = (currenSelected: ICarrouselData) => {
        const selectedIndex = carrouselData.findIndex(item => item.element === currenSelected.element);
        //aca hay que solucionar
        let elementsSliced = carrouselData.slice(selectedIndex - 3, selectedIndex);
        if (!elementsSliced.length) {
          elementsSliced = carrouselData.slice(0, selectedIndex);
        }
        let nextElements = elementsSliced.map(item => {
          return {
            ...item,
            selected: false
          }
        });

        const getElementsWithRandomId = (nextElements: ICarrouselData[]) => {
          const elementsWithRandomId = nextElements.map((item) => {
            return { ...item, id: getRandomId(), selected: false }
          });
          return elementsWithRandomId;
        }

        const getMissingElements = (element: ICarrouselData[]) => {
          const repetitions = 3 - nextElements.length;
          const arrayCopy = [...carrouselData].reverse();
          for (let i = 0; i < repetitions; i++) {
            nextElements.unshift(arrayCopy[i]);
          }
          return element;
        }

        if (nextElements.length < 3) {
          const missingElements = getMissingElements(nextElements);
          nextElements = getElementsWithRandomId(missingElements);
          return nextElements;
        } else {
          nextElements = getElementsWithRandomId(nextElements);
          return nextElements;
        };
      }

      const insertElements = (currenSelected: ICarrouselData, updatedData: ICarrouselData[]) => {
        let nextElements = getNextElements(currenSelected);

        const indexToSlice = updatedData.findIndex((item) => item.selected === true);

        const nextElementsWithRandomId = nextElements.map((item) => {
          return { ...item, id: getRandomId(), selected: false }
        });

        const arrayWithoutElements = (updatedData: ICarrouselData[]) => {
          let arrayElement = [...updatedData];
          const getLastElements = () => {
            if (indexToSlice >= nextElementsWithRandomId.length) {
              const start = indexToSlice - 3;
              arrayElement.splice(start, 3, ...nextElementsWithRandomId);
            } else {
              const newElements = nextElementsWithRandomId;
              const elementsToAdd = [];
              const numElementsToReplace = indexToSlice;
              const numElementsToAdd = 3 - numElementsToReplace;
              const arrayPrueba = [...arrayElement];

              arrayPrueba.splice(0, numElementsToReplace);

              if (numElementsToReplace !== 0) {
                arrayElement.splice(0, numElementsToReplace, ...newElements.slice(numElementsToReplace - numElementsToAdd));
              }

              for (let i = 0; i < numElementsToAdd; i++) {
                elementsToAdd.push(newElements[i]);
              }

              const numLastElementsToReplace = elementsToAdd.length;

              if (elementsToAdd.length) {
                const start = arrayElement.length - numLastElementsToReplace;
                arrayElement.splice(start, numLastElementsToReplace, ...elementsToAdd);
              }

            }
          }
          getLastElements();
          return arrayElement;
        };

        return arrayWithoutElements(updatedData);
      };

      const newUpdatedElements = insertElements(currenSelected, updatedData);

      if (!newUpdatedElements) return;

      const resetPositions = (updatedData: any[]) => {
        const selectedIndex = updatedData.indexOf(currenSelected);
        if (!currenSelected) return;
        const last = updatedData.slice(selectedIndex).map((item, i) => { return { ...item, position: i } });
        const first = updatedData.slice(0, selectedIndex).map((item, i) => { return { ...item, position: (getMaxPosition(last) + 1 + i) } });
        return first.concat(last);
      };

      return resetPositions(newUpdatedElements);
    }

    const getOpacity = (currenSelected: ICarrouselData) => {
      let elements = visibleElements();
      if (!elements) return;
      const currenIndex = elements.findIndex((item) => item.id === currenSelected.id);
      if (currenIndex === undefined) return;
      let indexToStart = currenIndex - 2;
      const indexToFinish = currenIndex + 2;
      const resetOpacity = elements.map(item => {
        return {
          ...item,
          opacity: '0',
        }
      });
      elements = resetOpacity;
      if (indexToStart < 0) {
        const numOfRepetitions = elements.length + indexToStart;
        for (let i = numOfRepetitions; i < elements.length; i++) {
          elements[i].opacity = '0.8'
        }
      }
      if (indexToFinish > elements.length) {
        const numOfRepetitions = indexToFinish - elements.length;
        for (let i = 0; i <= numOfRepetitions; i++) {
          elements[i].opacity = '0.8';
        }
      }
      for (let i = indexToStart; i <= indexToFinish; i++) {
        if (elements[i]) {
          elements[i].opacity = '0.8';
        } else {
          elements[0].opacity = '0.8'
          for (let j = i; i < 0; i++) {
            elements[elements.length + j].opacity = '0.8';
          }
        }
      }
      return elements;
    };

    const result = getOpacity(currenSelected);
    if (!result) return;
    setRenderData(result);

  };

  const setSelectElement = (id: string) => {

    let selectedActivity = renderData.find((act) => (act.id === id));
    if (!selectedActivity) return;

    initCarrousel(id);
    const updateSelectedData = (selectedActivity: ICarrouselData) => {
      const prevSelectedAct = renderData.find((act) => (act.selected === true));
      if (selectedActivity === prevSelectedAct) return array;
      else {
        const dataUpdate = renderData.map((act) => {
          if (act.id === prevSelectedAct?.id) {
            return {
              ...act, selected: false
            }
          } else if (act.id === selectedActivity?.id) {
            return {
              ...act, selected: true
            }
          } else return act;
        });
        return dataUpdate
      }
    };

    const updatedData = updateSelectedData(selectedActivity);

    const currenSelected = updatedData.find(item => item.selected === true)

    const visibleElements = () => {

      const getNextElements = (currenSelected: ICarrouselData) => {
        const nextElementIndex = carrouselData.findIndex(item => item.element === currenSelected.element);
        const nextElements = carrouselData.slice(nextElementIndex + 1, nextElementIndex + 4);

        if (nextElements.length < 3) {
          const repetitions = 3 - nextElements.length;
          for (let i = 0; (i + 1) <= repetitions; i++) {
            const element = carrouselData[i];
            nextElements.push({ ...element, id: getRandomId() });
          };
        }
        return nextElements;
      }

      const insertElements = (currenSelected: ICarrouselData, updatedData: ICarrouselData[]) => {
        let nextElements = getNextElements(currenSelected);
        const indexToSlice = updatedData.findIndex((item) => item.selected === true) + 1;

        const nextElementsWithRandomId = nextElements.map(
          (item) => {
            return { ...item, id: getRandomId(), selected: false }
          });

        const arrayWithoutElements = (updatedData: ICarrouselData[]) => {
          const arrayElement = [...updatedData];
          const start = indexToSlice + 3;
          const first = arrayElement.slice(0, indexToSlice);
          const last = arrayElement.slice(indexToSlice).slice(3);
          console.log('first :', start);
          const result = first.concat(
            
          ).concat(last);
          return result;
        }
        return arrayWithoutElements(updatedData);
      };

      const newUpdatedElements = insertElements(currenSelected, updatedData);
      if (!newUpdatedElements) return;
      const resetPositions = (updatedData: any[]) => {
        const selectedIndex = updatedData.indexOf(currenSelected);
        if (!currenSelected) return;
        const last = updatedData.slice(selectedIndex).map((item, i) => { return { ...item, position: i } });
        const first = updatedData.slice(0, selectedIndex).map((item, i) => { return { ...item, position: (getMaxPosition(last) + 1 + i) } });
        return first.concat(last);
      };
      return resetPositions(newUpdatedElements);
    }

    const getOpacity = (currenSelected: ICarrouselData) => {
      let elements = visibleElements();
      if (!elements) return;
      const currenIndex = elements.findIndex((item) => item.id === currenSelected.id);
      if (currenIndex === undefined) return;
      let indexToStart = currenIndex - 2;
      const indexToFinish = currenIndex + 2;
      const resetOpacity = elements.map(item => {
        return {
          ...item,
          opacity: '0',
        }
      });
      elements = resetOpacity;
      for (let i = indexToStart; i <= indexToFinish; i++) {
        if (elements[i]) {
          elements[i].opacity = '0.8';
        } else {
          elements[0].opacity = '0.8'
          for (let j = i; i < 0; i++) {
            elements[elements.length + j].opacity = '0.8';
          }
        }
      }
      return elements;
    };

    const result = getOpacity(currenSelected);
    if (!result) return;
    setRenderData(result);
  }

  const next = (elementPosition: number) => {
    setDegrees(degrees - 20 * (elementPosition));
  }

  const previus = (elementPosition: number) => {
    const repetitions = getMaxPosition(renderData) - elementPosition + 1;
    setDegrees(degrees + (20 * repetitions));
  }
  //tengo que añadir el atributo opacidad 
  return {
    setDegrees,
    degrees,
    setSelectElement,
    getMaxPosition,
    next,
    previus,
    renderData,
    setSelecteElementPrevius,
  }
};
