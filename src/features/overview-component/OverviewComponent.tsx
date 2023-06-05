import React from "react";
import { ModuleOverviewConfiguration } from "../../models/moduleOverviewConfig";
import { useOverview } from "../../hooks/useOverview";
import {
    TextArea,
    TextAreaContainer,
} from "./OverviewComponent.styled";
import { Button } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/useRedux";
import { intinerarSelector } from "../../redux/reducers/intineraryReducer/intinerary-selector";
import {
    HeaderBanner,
} from "../header-banner/headerBanner";
import { IDestiny } from "../../models/intineraryReducer";

interface OverviewProps {
    config: IDestiny
}

export const OverviewComponent: React.FC<OverviewProps> = (props) => {
    const { config } = props;
    const { currentSlideSelected } = useOverview(config.images);
    return (
        <>
            <HeaderBanner imageUrl={config.images[currentSlideSelected]} />
            <TextAreaContainer>
                <TextArea 
                    width="36vw"
                    value={config?.textArea}
                />
            </TextAreaContainer>
        </>
    )
};
