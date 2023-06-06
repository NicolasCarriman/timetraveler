import React, { useState } from "react";
import { ModuleNavigationConfiguration } from "../../models/moduleNavigationConfig";
import { ListComponent } from '../list-component/listComponent';
import { OverviewComponent } from '../overview-component/OverviewComponent';
import { useNavigation } from "../../hooks/useNavigation";
import {
  MainContainer,
  NeonBox,
  LoadingArea,
} from "./NavigationComponent.styled";
import { TabsComponent } from "../tabs-component/tabsComponent";
import { useDestiny } from "../../../hooks/useDestiny";
import { useAppSelector } from "../../../hooks/useRedux";
import { destinySelector } from "../../../redux/reducers/destinyReducer/destiny-selector";
import { intineraryType } from "../../../services/getIntinerary";
import { ArrowConfig } from "../../models";
import { Box } from "@chakra-ui/react";
import Arrow from "../arrows-component/arrowsComponent";

interface NavigationProps {
  config: ModuleNavigationConfiguration
  handler: (componentName: string) => void;
}

export type currentComponent = 'overview' | 'activity' | 'info';

export const NavigationComponent: React.FC<NavigationProps> = (
  { config, handler }
) => {
  const destiny = useAppSelector(destinySelector)
  const [currentComponet, setCurrentComponet] = useState<currentComponent>('overview');
  const { configuration } = useNavigation(config);
  const { currentIndex, overviewConfig, prevDestiny, nextDestiny } = useDestiny();

  const isOverview = currentComponet === 'overview';

  const arrowConfigLeft: ArrowConfig<intineraryType[]> = {
    arrayData: destiny.Destinations,
    currentIndex: currentIndex,
    next: nextDestiny,
    prev: prevDestiny,
    side: 'left'
  }

  const arrowConfigRight: ArrowConfig<intineraryType[]> = {
    arrayData: destiny.Destinations,
    currentIndex: currentIndex,
    next: nextDestiny,
    prev: prevDestiny,
    side: 'right'
  }

  const componentToRender = (componentName: string) => {
    if (!overviewConfig) return;
    switch (componentName) {
      case 'overview':
        return <OverviewComponent config={overviewConfig} />
      case 'activity':
        return <ListComponent />
      case 'info':
        return null
      default:
        return <OverviewComponent config={overviewConfig} />
    }
  }

  return (
    <MainContainer
      height='calc(100vh)'
      margin='0'
    >
      {
        configuration.tabPanel && <TabsComponent onChangeComponent={setCurrentComponet} config={configuration} handler={handler} />
      }
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        gap='4vh'
      >
        {
          isOverview ?
            <Arrow arrowConfig={arrowConfigLeft} />
          : null
        }
        <NeonBox>
          <LoadingArea>
            {componentToRender(currentComponet)}
          </LoadingArea>
        </NeonBox>
        {
          isOverview ?
          <Arrow arrowConfig={arrowConfigRight} />
          : null
        }
      </Box >
    </MainContainer>
  )
};
