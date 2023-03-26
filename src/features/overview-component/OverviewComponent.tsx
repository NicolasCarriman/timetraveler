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
            <InputContainer>
                <TextArea 
                    width="36vw"
                    value={config.textArea}
                />
            </InputContainer>
        </>
    )
};
