
import { Box } from "@chakra-ui/react";
import React from "react";
import { useActivity } from "../../hooks/useActivity";
import { useList } from "../../hooks/useList";
import { ModuleListConfiguration } from "../../models/moduleListConfig";
import CarrouselComponent from "../carrousel-component/carrouselComponent";
import {
  HeaderBanner,
  BannerContainer,
  EmptyDestinys,
  InputContainer,
} from "./listComponent.styled";

interface ListProps {
  config: ModuleListConfiguration
  currentSlide: number
}

export const ListComponent: React.FC<ListProps> = (
  { config, currentSlide }
) => {
  const { configuration, currentSlideSelected } = useList(
    config,
    currentSlide,
  );
  const {
    activityList,
    selectActivity,
  } = useActivity();

  return (
    <>
      {
        configuration.bannerActivated && configuration.images ?
          <BannerContainer>
            <HeaderBanner imageUrl={configuration.images[currentSlideSelected]} />
          </BannerContainer>
          : null
      }
      <InputContainer>
      {
          configuration.carrousel ?
            <CarrouselComponent
            /> :
            <Box />
        }
      </InputContainer>
    </>

  )
};
