import React from "react";
import { ModuleOverviewConfiguration } from "../../models/moduleOverviewConfig";
import { useOverview } from "../../hooks/useOverview";
import {
    TextArea,
    BannerContainer,
    HeaderBanner,
    InputContainer,
} from "./OverviewComponent.styled";

interface OverviewProps {
    imagesUrl: string[]
    config: ModuleOverviewConfiguration
    currentSlide: number
}

export const OverviewComponent: React.FC<OverviewProps> = (
    { imagesUrl = [], config, currentSlide }
) => {
    const { images, configuration, currentSlideSelected } = useOverview(
        imagesUrl,
        config,
        currentSlide,
    );
    return (
        <>
            <BannerContainer>
                <HeaderBanner imageUrl={images[currentSlideSelected]} />
            </BannerContainer>
            <InputContainer>
                <TextArea 
                    width="36vw"
                    value={configuration.textArea}
                />
            </InputContainer>
        </>
    )
};
