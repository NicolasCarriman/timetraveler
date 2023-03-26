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

interface MenuSelectorProps {
    config: ModuleMenuSelectorConfiguration
    handlerCard: (id: number) => void
}

export const MenuSelectorComponent: React.FC<MenuSelectorProps> = (
    { config, handlerCard }
) => {
    const { configuration } = useMenuSelector(
        config,
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
            <Letter value={"Choose your destiny"}/>
            <MainContainer
                maxWidth='90vw'
                height={configuration.height}
                mt='8'
            >
                <NeonBox>
                    <LoadingAreaInvisible>
                        {
                            configuration.cards.map((e, i) => (
                                <div
                                    onMouseEnter={() => handleMouseEnterCard(i)}
                                    onMouseLeave={handleMouseLeaveCard}
                                    onClick={() => handlerCard(i)}
                                >
                                    <CardComponent config={configuration.cards[i]} isHover={isHoverCard == i ? true : false} somethingIsSelected={isHoverCard != -1 ? true : false}/>
                                </div>
                            ))
                        }
                    </LoadingAreaInvisible>   
                </NeonBox>
            </MainContainer>
        </>
    )
};
