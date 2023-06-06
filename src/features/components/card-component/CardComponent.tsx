import React from "react";
import { ModuleCardConfiguration } from "../../models/moduleCardConfig";
import { useCard } from "../../hooks/useCard";
import {
    CardArea,
    CardItem,
    CardTitle,
} from "./CardComponent.styled";

interface CardProps {
    config: ModuleCardConfiguration
    isHover: string
    somethingIsSelected: string
}

export const CardComponent: React.FC<CardProps> = (
    { config, isHover, somethingIsSelected }
) => {
    const { configuration, active, somethingIsSelectedThenHide } = useCard(
        config,
        isHover,
        somethingIsSelected,
    );

    return (
        <CardItem ishover={active.toString()} somethingisselectedthenhide={somethingIsSelectedThenHide}>
            <CardTitle value={configuration.title}/>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2.5vh'}}>
                <CardArea config={configuration} />
            </div>
        </CardItem>
    )
};
