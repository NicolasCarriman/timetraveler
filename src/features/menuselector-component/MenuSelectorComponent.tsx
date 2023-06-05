import React, { useEffect, useState } from "react";
import { ModuleMenuSelectorConfiguration } from "../../models/moduleMenuSelectorConfig";
import { CardComponent } from "../card-component/CardComponent";
import { useMenuSelector } from "../../hooks/useMenuSelector";
import {
    MainContainer,
    NeonBox,
    IntineraryComponent,
    Letter,
} from "./MenuSelectorComponent.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { intinerarSelector } from "../../redux/reducers/intineraryReducer/intinerary-selector";
import { useDestiny } from "../../hooks/useDestiny";
import { getIntinerary } from "../../services/getIntinerary";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { getActualIntinerary, overview } from "../../redux/reducers/intineraryReducer/intinerary-state";
import { setCurrentDestiny, setDestinations } from "../../redux/reducers/destinyReducer/destiny-slice";
import { destinySelector } from "../../redux/reducers/destinyReducer/destiny-selector";
import { ModuleCardConfiguration } from "../../models/moduleCardConfig";
import { destinyToCardAdapter } from "../../adapters/cardAdapter";

interface MenuSelectorProps {
    handlerCard: (id: number) => void
}

export const MenuSelectorComponent: React.FC<MenuSelectorProps> = ({handlerCard}) => {

    const [isHoverCard, setIsHoverCard] = useState(-1);
    const [cardConfig, setCardConfig ] = useState<ModuleCardConfiguration[] | null>(null)
    const dispatch = useAppDispatch();

    const handleMouseEnterCard = (cardSelected: number) => {
        setIsHoverCard(cardSelected);
    };
  
    const handleMouseLeaveCard = () => {
        setIsHoverCard(-1);
    };

    const selectCurrentDestiny = (i : number) => {
        console.log('currentDestiny :', destinyState.Destinations[i]);
        dispatch(setCurrentDestiny(destinyState.Destinations[i]))
    }

    const handleClick = (id:number) => {
        selectCurrentDestiny(id);
        handlerCard(id);
    }

    const destinyState = useAppSelector(destinySelector);

    const setDestiny = () => {
        const intineraryData = getIntinerary();
        dispatch(setDestinations(intineraryData));
    }

    React.useEffect(() => {
        setDestiny();
    }, []);

    React.useEffect(() => {
        const getCardConfig = destinyToCardAdapter(destinyState.Destinations);
        setCardConfig(getCardConfig);
    }, [destinyState])

    return (
        <>
            <Letter value={"Choose your destiny"}/>
            <MainContainer
                maxWidth='90vw'
                height='65vh'
            >
                <NeonBox
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <IntineraryComponent>
                        {
                            cardConfig && cardConfig.map((e, i) => (
                                <div
                                    onMouseEnter={() => handleMouseEnterCard(i)}
                                    onMouseLeave={handleMouseLeaveCard}
                                    onClick={() => handleClick(i)}
                                >
                                    <CardComponent 
                                        config={cardConfig[i]} 
                                        isHover={isHoverCard == i ? true : false} 
                                        somethingIsSelected={isHoverCard != -1 ? true : false}
                                    />
                                </div>
                            ))
                        }
                    </IntineraryComponent>   
                </NeonBox>
            </MainContainer>
        </>
    )
};
