
import React from "react";
import CarrouselComponent from "../carrousel-component/carrouselComponent";
import { Main } from "./listComponent.styled";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { activitySelector } from "../../../redux/reducers/activityReducer/activity-selector";
import { ExtraActivity } from "../extraActivity-component/extraActivity";
import { BoxImage } from "../../../components/boxImage";
import { Container } from "../../../components/container";
import { destinySelector } from "../../../redux/reducers/destinyReducer/destiny-selector";
import { ICarrouselData } from "../../models/carrousel";
import { setCurrentActivity } from "../../../redux/reducers/activityReducer/activity-slice";
import { getCarrouselData } from "../../utilis";

interface ListProps {
}

export const ListComponent: React.FC<ListProps> = (props) => {
  const currentDestiny = useAppSelector(destinySelector).currentDestiny;
  const carrouselData = currentDestiny ? getCarrouselData(currentDestiny) : null;
  const currentActivity = useAppSelector(activitySelector).currentActivity;
  const dispatch = useAppDispatch();

  const handleSelect = (data: ICarrouselData) => {
    const getSelectedActivity = () => {
      const matchedActivity = currentDestiny?.extra_activities.find(item => item.title === data.title);
      return matchedActivity
    }
    dispatch(setCurrentActivity(getSelectedActivity()));
  }

  return (
    <>
      {
        carrouselData ?
          <>
            <Container variant='large' display='flex' flexDir='row' gap='12px'>
              <BoxImage imgurl={currentActivity ? currentActivity.image : currentDestiny?.extra_activities[0].image}>
                <Main>
                  <CarrouselComponent data={carrouselData} onSelectedData={handleSelect}/>
                </Main>
              </BoxImage>
              <ExtraActivity
                text={currentActivity ? currentActivity.description : ''}
                location={currentActivity ? currentActivity.location : ''}
                price={35}
              />
            </Container>
          </> : null
      }
    </>

  )
};

