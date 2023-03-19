import React from "react";
import { ModuleCardConfiguration } from "../../models/moduleCardConfig";
import { useCard } from "../../hooks/useCard";
import {
    CardContainer,
    NeonBox,
    MainDataCard,
    TextArea,
    Arrow,
    BannerContainer,
    HeaderBanner,
    InputContainer,
    Tab,
    TabContainer,
} from "./CardComponent.styled";

interface CardProps {
    imagesUrl: string[]
    config: ModuleCardConfiguration
    currentSlide: number
}

export const CardComponent: React.FC<CardProps> = (
    { imagesUrl = [], config, currentSlide }
) => {
    const { images, configuration, currentSlideSelected } = useCard(
        imagesUrl,
        config,
        currentSlide,
    );
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
            <CardContainer
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
                    <MainDataCard>
                        <BannerContainer>
                            <HeaderBanner imageUrl={images[currentSlideSelected]} />
                        </BannerContainer>
                        <InputContainer>
                            <TextArea 
                                width="36vw"
                                value={configuration.textArea}
                            />
                        </InputContainer>
                    </MainDataCard>   
                </NeonBox>
            </CardContainer>
        </>
    )
};
