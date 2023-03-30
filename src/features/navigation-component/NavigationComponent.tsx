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



interface NavigationProps {
    config: ModuleNavigationConfiguration
    handler: (componentName: string) => void;
}

export const NavigationComponent: React.FC<NavigationProps> = (
    { config, handler }
) => {
    const { changeTab, changeCard, configuration } = useNavigation(
        config,
    );

    let array = configuration.overviewComponent;

    const [currentOverview, setOverview] = React.useState(configuration.overviewComponent[configuration.activeCard]);
    let index = array.findIndex((props) => (props === currentOverview))
    const prev = () => {
        let prevIndex = array.findIndex((props) => (props === currentOverview)) - 1
        if (prevIndex < 0) {
            console.log("menor a cero")
            return;
        }
        setOverview(array[prevIndex])
    }
    const next = () => {
        let nextIndex = array.findIndex((props) => (props === currentOverview)) + 1
        if (nextIndex >= array.length) {
            return;
        }
        setOverview(array[nextIndex])
    }


    const componentToRender = (componentName: string, cardId: number) => {
        switch (componentName) {
            case 'activity':
                return <ListComponent config={configuration.activityComponent[cardId]} currentSlide={0} />;
            case 'info':
                return <ListComponent config={configuration.infoComponent[cardId]} currentSlide={0} />;
            case 'overview':
                return <OverviewComponent config={currentOverview} currentSlide={0} />;
            default:
                return <OverviewComponent config={currentOverview} currentSlide={0} />;
        }
    }

    const [isHoverArrowLeft, setIsHoverArrowLeft] = useState(false);

    const handleMouseEnterArrowLeft = () => {
        setIsHoverArrowLeft(true);
    };

    const handleMouseLeaveArrowLeft = () => {
        setIsHoverArrowLeft(false);
    };

    const [isHoverArrowRight, setIsHoverArrowRight] = useState(false);

    const handleMouseEnterArrowRight = () => {
        setIsHoverArrowRight(true);
    };

    const handleMouseLeaveArrowRight = () => {
        setIsHoverArrowRight(false);
    };
    const [isHoverTab, setIsHoverTab] = useState(-1);

    const handleMouseEnterTab = (tabSelected: number) => {
        setIsHoverTab(tabSelected);
    };

    const handleMouseLeaveTab = () => {
        setIsHoverTab(-1);
    };

    return (
        <HStack
            justifyContent='center'
            alignItems='center'
        >
            <MainContainer
                maxWidth='60vw'
                height='calc(100vh)'
                margin='0'
            >
                {
                    configuration.tabPanel ?
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
                        </TabContainer> : null
                }
                <NeonBox>
                    <LoadingArea>
                        {
                            componentToRender(configuration.activeComponentName, configuration.activeCard)
                        }
                    </LoadingArea>
                    <Container
                        id='arrowContainer'
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        height='8vh'
                        alignItems='center'
                        marginTop='2vh'
                    >
                        {
                            configuration.rightArrow && index < (configuration.overviewComponent.length - 1) ?
                                <Box
                                    position='relative'
                                    onMouseEnter={handleMouseEnterArrowRight}
                                    onMouseLeave={handleMouseLeaveArrowRight}
                                >
                                    <Arrow
                                        side='right'
                                        onClick={next}
                                    />
                                </Box>
                                : <Box width='154.2px'></Box>
                        }
                        {
                            configuration.leftArrow && index > 0 ?
                                <Box
                                    marginRight={'2x'}
                                    onMouseEnter={handleMouseEnterArrowLeft}
                                    onMouseLeave={handleMouseLeaveArrowLeft}
                                >
                                    <Arrow
                                        side='left'
                                        onClick={prev}
                                    />
                                </Box>
                                : <Box width='154.2px'></Box>
                        }
                    </Container>
                </NeonBox>
            </MainContainer>
        </HStack>
    )
};
