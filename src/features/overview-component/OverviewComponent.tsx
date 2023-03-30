import React from "react";
import { ModuleOverviewConfiguration } from "../../models/moduleOverviewConfig";
import { useOverview } from "../../hooks/useOverview";
import {
    TextArea,
    BannerContainer,
    HeaderBanner,
    TextAreaContainer,
} from "./OverviewComponent.styled";
import { Button } from "@chakra-ui/react";

interface OverviewProps {
    config: ModuleOverviewConfiguration
    currentSlide: number
}

export const OverviewComponent: React.FC<OverviewProps> = (
    { config, currentSlide }
) => {
    const { configuration, currentSlideSelected } = useOverview(
        config,
        currentSlide,
    );
    return (
        <>
            <BannerContainer>
               <HeaderBanner imageUrl={config.images[currentSlideSelected]} />
            </BannerContainer>
            <TextAreaContainer>
                <TextArea 
                    width="36vw"
                    value={config.textArea}
                />
            </TextAreaContainer>
        </>
    )
};
