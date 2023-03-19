import React, { useState } from "react";
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
  Arrow,
  Tab,
  TabContainer,
  ListContainer,
  NeonBox,
  HeaderBanner,
  MainDataList,
  BannerContainer,
  EmptyDestinys,
  InputContainer,
} from "./listComponent.styled";

interface ListProps {
  imagesUrl: string[]
  config: ModuleListConfiguration
  currentSlide: number
}

export const ListComponent: React.FC<ListProps> = (
  { imagesUrl = [], config, currentSlide }
) => {
  const { images, configuration, currentSlideSelected } = useList(
    imagesUrl,
    config,
    currentSlide,
  );
  const {
    activityList,
    selectActivity,
  } = useActivity();

  const handleClick = (id: string) => {
    selectActivity(id);
  };
  const SaveCardAndLoadTimeLine = () => {
    console.log("Button Clicked, must save the Card component");
  };
  const BackToTimeLine = () => {
      console.log("Button Clicked, must back to TimeLine");
  };
  const ChangeTab = () => {
      console.log("Tab Clicked, must load the component that the user has selected");
  };
  return (
    <>
      <Arrow 
      onClick={SaveCardAndLoadTimeLine} 
      color="white"
      top="12vh"
      left="70vw"
      orientation="right"
      >
      {'>'}
      </Arrow>
      <Arrow 
          onClick={BackToTimeLine}
          color="white" 
          top="12vh"
          left="22vw"
          orientation="left"
      >
      {'<'}
      </Arrow>
      <ListContainer
        maxWidth='40vw'
        height='70vh'
        mt='8'
      >
        <TabContainer>
          <Tab onClick={ChangeTab} color="white" activated="true" name="Overview"/>
          <Tab onClick={ChangeTab} color="white" activated="false" name="Activities"/>
          <Tab onClick={ChangeTab} color="white" activated="false" name="Info"/>
          <Tab onClick={ChangeTab} color="white" activated="false" name="Notes"/>
        </TabContainer>
        <NeonBox>
          <MainDataList>
            {
              configuration.bannerActivated && images ?
                <BannerContainer>
                  <HeaderBanner imageUrl={images[currentSlideSelected]} />
                </BannerContainer>
                : null
            }
            <InputContainer>
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
            </InputContainer>

          </MainDataList>
        </NeonBox>
      </ListContainer>
    </>

  )
};
