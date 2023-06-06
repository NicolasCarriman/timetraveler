import React from "react";
import { TabContainer, Tab } from "./tabsComponent.styled"
import { useNavigation } from "../../hooks/useNavigation";
import { currentComponent } from "../navigation-component/NavigationComponent";

interface TabsComponentProps {
  config: any
  handler: (s: string) => void;
  onChangeComponent: React.Dispatch<React.SetStateAction<currentComponent>>
}

export const TabsComponent: React.FC<TabsComponentProps> = (props) => {
  const { config, handler, onChangeComponent } = props;
  const { configuration, changeTab } = useNavigation(config);
  const [isHoverTab, setIsHoverTab] = React.useState(-1);

  const handleMouseEnterTab = (tabSelected: number) => {
    setIsHoverTab(tabSelected);
  };

  const handleMouseLeaveTab = () => {
    setIsHoverTab(-1);
  };

  const handleClick = (compName: currentComponent) => {
    changeTab(compName);
    onChangeComponent(compName);
  }

  return (
    <TabContainer>
      <div
        onMouseEnter={() => handleMouseEnterTab(0)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => handleClick("overview")} color="white" activated={isHoverTab === -1 && configuration.activeComponentName === "overview" ? true : false} isHover={isHoverTab === 0 ? true : false} name="Overview" />
      </div>
      <div
        onMouseEnter={() => handleMouseEnterTab(3)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => handler("timeline")} color="white" activated={isHoverTab === -1 && configuration.activeComponentName === "timeline" ? true : false} isHover={isHoverTab === 3 ? true : false} name="Journal" />
      </div>
      <div
        onMouseEnter={() => handleMouseEnterTab(1)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => handleClick("activity")} color="white" activated={isHoverTab === -1 && configuration.activeComponentName === "activity" ? true : false} isHover={isHoverTab === 1 ? true : false} name="Activities" />
      </div>
      <div
        onMouseEnter={() => handleMouseEnterTab(2)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => handleClick("info")} color="white" activated={isHoverTab === -1 && configuration.activeComponentName === "info" ? true : false} isHover={isHoverTab === 2 ? true : false} name="Info" />
      </div>
    </TabContainer>
  )
}