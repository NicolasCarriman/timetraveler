import React from "react";
import { useOverview } from "../../hooks/useOverview";
import {
    TextArea,
    TextAreaContainer,
    TextTitle,
} from "./OverviewComponent.styled";
import {
    HeaderBanner,
} from "../header-banner/headerBanner";
import { IDestiny } from "../../../models/intineraryReducer";

interface OverviewProps {
    config: IDestiny
}

export const OverviewComponent: React.FC<OverviewProps> = (props) => {
    const { config } = props;
    const { currentSlideSelected } = useOverview(config.images);
    return (
        <>
            <HeaderBanner imageurl={config.images[currentSlideSelected]} />
            <TextTitle>
                {config.title}
            </TextTitle>
            <TextAreaContainer>
                <TextArea 
                    width="36vw"
                    value={config?.textArea}
                />
            </TextAreaContainer>
        </>
    )
};
