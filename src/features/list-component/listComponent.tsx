
import React from "react";
import CarrouselComponent from "../carrousel-component/carrouselComponent";
import { Main } from "./listComponent.styled";
import { getActivities } from "../../services/getActivitites";
import { useAppSelector } from "../../hooks/useRedux";
import { activitySelector } from "../../redux/reducers/activityReducer/activity-selector";
import { ExtraActivity } from "../extraActivity-component/extraActivity";
import { BoxImage } from "../../components/boxImage";
import { Container } from "../../components/container";
import { destinySelector } from "../../redux/reducers/destinyReducer/destiny-selector";

interface ListProps {
}

export const ListComponent: React.FC<ListProps> = (props) => {
  const currentActivity = useAppSelector(activitySelector).currentActivity;
  console.log(currentActivity);
  const currentDestiny = useAppSelector(destinySelector).currentDestiny;
  const carrouselConfig = currentDestiny ? getActivities(currentDestiny) : null;

  return (
    <>
      {
        carrouselConfig ?
          <>
            <Container variant='large' display='flex' flexDir='row' gap='12px'>
              <BoxImage imgUrl={currentActivity ? currentActivity.img : carrouselConfig[0].img}>
                <Main>
                  <CarrouselComponent data={carrouselConfig} />
                </Main>
              </BoxImage>
              <ExtraActivity
                text={currentActivity ? currentActivity.text : ''}
                location={currentActivity ? currentActivity.location : ''}
                price={35}
              />
            </Container>
          </> : null
      }
    </>

  )
};

