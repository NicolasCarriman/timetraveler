import React from "react";
import { currentComponent } from "../navigation-component/NavigationComponent";
import { TabContainer, Tab } from "./tabsComponent.styled"

interface TabsComponentProps {
  changeTab: (componentName: currentComponent) => void
  configuration: any
  handler: (s: string) => void
} 

export const TabsComponent: React.FC<TabsComponentProps> = (props) => {
  const { changeTab, configuration, handler } = props
  const [isHoverTab, setIsHoverTab] = React.useState(-1);

    const handleMouseEnterTab = (tabSelected: number) => {
        setIsHoverTab(tabSelected);
    };

    const handleMouseLeaveTab = () => {
        setIsHoverTab(-1);
    };

  return (
    <TabContainer>
      <div
        onMouseEnter={() => handleMouseEnterTab(0)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => changeTab("overview")} color="white" activated={isHoverTab == -1 && configuration.activeComponentName == "overview" ? true : false} isHover={isHoverTab == 0 ? true : false} name="Overview" />
      </div>
      <div
        onMouseEnter={() => handleMouseEnterTab(3)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => handler("timeline")} color="white" activated={isHoverTab == -1 && configuration.activeComponentName == "timeline" ? true : false} isHover={isHoverTab == 3 ? true : false} name="Journal" />
      </div>
      <div
        onMouseEnter={() => handleMouseEnterTab(1)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => changeTab("activity")} color="white" activated={isHoverTab == -1 && configuration.activeComponentName == "activity" ? true : false} isHover={isHoverTab == 1 ? true : false} name="Activities" />
      </div>
      <div
        onMouseEnter={() => handleMouseEnterTab(2)}
        onMouseLeave={handleMouseLeaveTab}
      >
        <Tab onClick={() => changeTab("info")} color="white" activated={isHoverTab == -1 && configuration.activeComponentName == "info" ? true : false} isHover={isHoverTab == 2 ? true : false} name="Info" />
      </div>
    </TabContainer>
  )
}