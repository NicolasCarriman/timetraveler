import React, { useState } from "react";
import { ModuleMenuSelectorConfiguration } from "../../models/moduleMenuSelectorConfig";
import { CardComponent } from "../card-component/CardComponent";
import { useMenuSelector } from "../../hooks/useMenuSelector";
import {
    MainContainer,
    NeonBox,
    LoadingAreaInvisible,
    Letter,
} from "./MenuSelectorComponent.styled";

import { ModuleCardConfiguration } from "../../models/moduleCardConfig";

interface MenuSelectorProps {
    config: ModuleMenuSelectorConfiguration
    cards: ModuleCardConfiguration[]
}

export const MenuSelectorComponent: React.FC<MenuSelectorProps> = (
    { config, cards }
) => {
    const { configuration, cardsToRender } = useMenuSelector(
        config,
        cards
    );

    const [isHoverCard, setIsHoverCard] = useState(-1);

    const handleMouseEnterCard = (cardSelected: number) => {
        setIsHoverCard(cardSelected);
    };
  
    const handleMouseLeaveCard = () => {
        setIsHoverCard(-1);
    };
    return (
        <>
            <Letter value={"Choose your itinerary"}/>
            <MainContainer
                maxWidth='90vw'
                height={configuration.height}
                mt='8'
            >
                <NeonBox>
                    <LoadingAreaInvisible>
                        {
                            cardsToRender.map((e, i) => (
                                <div
                                    onMouseEnter={() => handleMouseEnterCard(i)}
                                    onMouseLeave={handleMouseLeaveCard}
                                >
                                    <CardComponent config={cardsToRender[i]} isHover={isHoverCard == i ? true : false} somethingIsSelected={isHoverCard != -1 ? true : false}/>
                                </div>
                            ))
                        }
                    </LoadingAreaInvisible>   
                </NeonBox>
            </MainContainer>
        </>
    )
};
