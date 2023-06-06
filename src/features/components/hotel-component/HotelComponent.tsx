import React, { useState } from "react";
import { ModuleHotelConfiguration } from "../../models/moduleHotelConfig";
import { useHotel } from "../../hooks/useHotel";
import {
    MainContainer,
    LoadingAreaInvisible,
    Letter,
    Stars,
    BannerContainer,
    HeaderBanner,
    HotelInfo,
    Label,
    ButtonAura,
    LetterAnimation,
    InputContainer,
    XButton,
    XLetterAnimation
} from "./HotelComponent.styled";

interface HotelProps {
    config: ModuleHotelConfiguration
    isOpen: boolean
    onClose: () => void
    currentSlide: number
}

export const HotelComponent: React.FC<HotelProps> = (
    { config, isOpen, onClose, currentSlide }
) => {
    const { configuration, currentSlideSelected } = useHotel(
        config,
        currentSlide,
    );
    const [isHover, setIsHover] = useState(false);
    const [isHoverX, setIsHoverX] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
  
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const handleMouseEnterX = () => {
        setIsHoverX(true);
    };
  
    const handleMouseLeaveX = () => {
        setIsHoverX(false);
    };
    return (
    <>

        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

        </div>
        <MainContainer
            maxWidth='90vw'
            height='93vh'
        >
                <div
                    onMouseEnter={handleMouseEnterX}
                    onMouseLeave={handleMouseLeaveX}
                >
                    <XButton onClick={() => onClose()}/>
                    <XLetterAnimation value={"<"} isHover={isHoverX}/>
                </div>
                <LoadingAreaInvisible>
                <InputContainer
                    isHover={isHover}
                >
                    <Letter value={configuration.name}/>
                    <Stars numberOf={configuration.stars}/>
                    <BannerContainer>
                        <HeaderBanner imageurl={config.images[currentSlideSelected]} detailsOn={isHover}/>
                    </BannerContainer>
                    {
                        isHover ?
                        <>
                            <HotelInfo>
                                <Label
                                    infoType={"CHECK-IN TIME"}
                                    value={configuration.checkinHour}
                                />
                                <Label
                                    infoType={"CHECK-OUT TIME"}
                                    value={configuration.checkoutHour}
                                />
                                <Label
                                    infoType={"YOUR ROOMS"}
                                    value={configuration.rooms}
                                />
                                <Label
                                    infoType={"BREAKFAST"}
                                    value={configuration.breakfast}
                                />
                                <Label
                                    infoType={"WI-FI"}
                                    value={configuration.wifi}
                                />
                                <Label
                                    infoType={"ADDRESS"}
                                    value={configuration.address}
                                />
                                <Label
                                    infoType={"PHONE NUMBER"}
                                    value={configuration.phoneNumber}
                                />
                                <Label
                                    infoType={"E-MAIL"}
                                    value={configuration.contactEmail}
                                />
                            </HotelInfo> 
                        </>

                        : null
                    }
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ButtonAura />
                        <LetterAnimation value={"D E T A I L S"} isHover={isHover}/>
                    </div>
                </InputContainer>

                </LoadingAreaInvisible>
        </MainContainer>
    </>
    )
};
/*
onClick={(() => closeModal())}
*/