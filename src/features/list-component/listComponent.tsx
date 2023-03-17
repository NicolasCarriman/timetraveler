import React from "react";
import { ErrorComponent } from "../../components/error";
import { LoadingComponent } from "../../components/loader";
import { useActivity } from "../../hooks/useActivity";
import { useCarrousel } from "../../hooks/useCarrousel";
import { useList } from "../../hooks/useList";
import { Activity } from "../../models/activity";
import { ModuleListConfiguration } from "../../models/moduleListConfig";
import { ActivityList } from "../activity-compoent/activityComponent";
import { ActivtyItem } from "../activity-compoent/activityItem/activtyItem";
import CarrouselComponent from "../carrousel-component/carrouselComponent";
import {
  ListContainer,
  NeonBox,
  HeaderBanner,
  MainDataList,
  BannerContainer,
  EmptyDestinys
} from "./listComponet.styled";

interface ListProps {
  imgUrl?: string
  config: ModuleListConfiguration
}

export const ListComponent: React.FC<ListProps> = (
  { imgUrl = "", config }
) => {
  const { img, configuration } = useList(
    imgUrl,
    config,
  );
  const {
    activityList,
    selectActivity,
  } = useActivity();

  const handleClick = (id: string) => {
    selectActivity(id);
  };

  return (
    <ListContainer
      maxWidth='480px'
      height='480px'
      mt='8'
    >
      <NeonBox>
        {
          configuration.bannerActivated && img ?
            <BannerContainer>
              <HeaderBanner imgUrl={img} />
            </BannerContainer>
            : null
        }
        <MainDataList>
          {
            configuration.carrousel ?
              <CarrouselComponent
              /> :
              <ActivityList
                error={false}
                loading={false}
                searchedActivitis={activityList}
                onLoading={() => <LoadingComponent />}
                onError={() => <ErrorComponent />}
                onEmptyActivitis={() => <EmptyDestinys />}
                render={
                  (act: Activity) => (
                    <ActivtyItem
                      onHandleClick={() => handleClick(act.id)}
                      id={act.id}
                      key={act.id}
                      selected={act.selected}
                    >
                      {act.text}
                    </ActivtyItem>
                  )
                }
              >
              </ActivityList>
          }
        </MainDataList>
      </NeonBox>
    </ListContainer>
  )
};
