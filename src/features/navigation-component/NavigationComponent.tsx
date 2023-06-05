import React, { useState } from "react";
import { ModuleNavigationConfiguration } from "../../models/moduleNavigationConfig";
import { ListComponent } from '../list-component/listComponent';
import { OverviewComponent } from '../overview-component/OverviewComponent';
import { useNavigation } from "../../hooks/useNavigation";
import {
  MainContainer,
  NeonBox,
  LoadingArea,
  Arrow,
  Tab,
  TabContainer,
} from "./NavigationComponent.styled";
import { Box, HStack } from "@chakra-ui/react";
import { Container } from "../../components/container";
import { TabsComponent } from "../tabs-component/tabsComponent";
import { useDestiny } from "../../hooks/useDestiny";
import { useArrow } from "../../hooks/useArrow";
import { useAppSelector } from "../../hooks/useRedux";
import { intinerarSelector } from "../../redux/reducers/intineraryReducer/intinerary-selector";
import { MainComponet } from "../main-component/mainComponent";
import { useOverview } from "../../hooks/useOverview";
import { overview } from "../../redux/reducers/intineraryReducer/intinerary-state";
import { destinySelector } from "../../redux/reducers/destinyReducer/destiny-selector";
import { destinyToOverviewAdapter } from "../../adapters/overviewAdapter";
import ArrowsComponent from "../arrows-component/arrowsComponent";
import { ArrowConfig } from "../../models";
import { intineraryType } from "../../services/getIntinerary";



interface NavigationProps {
  config: ModuleNavigationConfiguration
  handler: (componentName: string) => void;
}

export type currentComponent = 'overview' | 'activity' | 'info';

export const NavigationComponent: React.FC<NavigationProps> = (
  { config, handler }
) => {
  const destiny = useAppSelector(destinySelector)
  const [ currentComponet, setCurrentComponet ] = useState<currentComponent>('overview');
  const { configuration } = useNavigation(config);
  const { currentIndex, overviewConfig, prevDestiny, nextDestiny } = useDestiny();
  const arrowConfig: ArrowConfig<intineraryType[]> = {
    arrayData: destiny.Destinations,
    currentIndex: currentIndex,
    next: nextDestiny,
    prev: prevDestiny,
  }

  const handleTab = (componentName: currentComponent) => {
    setCurrentComponet(componentName);
  }

  const componentToRender = (componentName: string) => {
    if(!overviewConfig) return;
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
        configuration.tabPanel && <TabsComponent changeTab={handleTab} configuration={configuration} handler={handler} />
      }
      <NeonBox>
        <LoadingArea>
          {componentToRender(currentComponet)}
        </LoadingArea>
      </NeonBox>
      <ArrowsComponent arrowConfig={arrowConfig} />
    </MainContainer>
  )
};
