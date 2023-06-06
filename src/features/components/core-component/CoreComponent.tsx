import React from "react";
import { ModuleCoreConfiguration } from "../../models/moduleCoreConfig";
import { useCore } from "../../hooks/useCore";
import { FormComponent } from "../form-component/FormComponent";
import { NavigationComponent } from "../navigation-component/NavigationComponent";
import { MenuSelectorComponent } from "../menuselector-component/MenuSelectorComponent";
import { TimeLineComponent } from "../timeLine-component/TimeLineComponent";
import { ModuleNavigationConfiguration } from '../../models/moduleNavigationConfig';
import { ModuleFormConfiguration } from '../../models/moduleFormConfig';
import { budapestList, paristList, berlinList, pragueList, londonList } from "../../configs/list";
import { budapestOverview, parisOverview, berlinOverview, pragueOverview, londonOverview } from "../../configs/overview";
import { budapestTimeLine, parisTimeLine, berlinTimeLine, pragueTimeLine, londonTimeLine } from "../../configs/timelines";


const configurationNavigation: ModuleNavigationConfiguration = {
  activeComponentName: "overview",
  activeCard: -1,
  enableArrows: true,
  tabPanel: true,
  tabSelection: 0,
  height: "75vh",
  width: "37vw",
  overviewComponent: [budapestOverview, parisOverview, berlinOverview, pragueOverview, londonOverview],
  activityComponent: [budapestList, paristList, berlinList, pragueList, londonList],
  journalComponent: [budapestTimeLine, parisTimeLine, berlinTimeLine, pragueTimeLine, londonTimeLine],
  infoComponent: [budapestList, paristList, berlinList, pragueList, londonList]
}

const configurationForm: ModuleFormConfiguration = {
  inputText: "Input itinerary ID",
  buttonText: "N E X T",
  httpRequestUrl: "http://www.timetraveler.com/itinerary?id=5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
  title: "Load your itinerary",
}

interface CoreProps {
  config: ModuleCoreConfiguration
}

export const CoreComponent: React.FC<CoreProps> = (
  { config }
) => {
  const { loadComponent, loadCard, configuration } = useCore(config);

  const componentToRender = (componentName: string) => {
    switch (componentName) {
      case 'form':
        return <FormComponent config={configurationForm} handler={loadComponent} />;
      case 'menuselector':
        return <MenuSelectorComponent handlerCard={loadCard} />;
      case 'navigation':
        return <NavigationComponent config={{ ...configurationNavigation, activeCard: configuration.selectedCard }} handler={loadComponent} />;
      case 'timeline':
        return <TimeLineComponent config={configurationNavigation.journalComponent[configuration.selectedCard]} handler={loadComponent} />;
      default:
        return <FormComponent config={configurationForm} handler={loadComponent} />;
    }
  }


  React.useEffect(() => {
    if (configuration.selectedCard !== -1) {
      loadComponent("navigation")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configuration.selectedCard])

  return (
    <>
      {
        componentToRender(configuration.activeComponentName)
      }
    </>
  )
};
