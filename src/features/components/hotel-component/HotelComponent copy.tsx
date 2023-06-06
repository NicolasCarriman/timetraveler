import React, { useState } from "react";
import { ModuleHotelConfiguration } from "../../models/moduleHotelConfig";
import { useHotel } from "../../hooks/useHotel";
import {
    MainContainer,
    NeonBox,
    LoadingAreaInvisible,
    Letter,
    Stars,
    BannerContainer,
    HeaderBanner,
    HotelInfo,
    Label,
    Arrow,
    LetterAnimation
} from "./HotelComponent.styled copy";

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
    const [isHoverArrow, setIsHoverArrow] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
  
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const handleMouseEnterArrow = () => {
        setIsHoverArrow(true);
    };
  
    const handleMouseLeaveArrow = () => {
        setIsHoverArrow(false);
    };
    const prev = () => {
        console.log("clic")
    }
    return (
    <>

        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {
                <div
                    onMouseEnter={handleMouseEnterArrow}
                    onMouseLeave={handleMouseLeaveArrow}
                >
                    <Arrow 
                        onClick={() => prev()}
                        color="white" 
                        top="0.5vh"
                        left="-4vw"
                        isHoverArrow={isHoverArrow}
                    >
                    </Arrow> 
                </div>
            }
            <LetterAnimation value={"B A C K"} isHover={isHover}/>
        </div>
        <MainContainer
            maxWidth='97vw'
            height='93vh'
        >
            <NeonBox>
                <LoadingAreaInvisible>
                    <Letter value={configuration.name}/>
                    <Stars numberOf={configuration.stars}/>
                    <BannerContainer>
                        <HeaderBanner imageurl={config.images[currentSlideSelected]} />
                    </BannerContainer>
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
                            infoType={"YOUR STAY"}
                            value={"3 Nights - Bed and Breakfast"}
                        />
                        <Label
                            infoType={"YOUR ROOMS"}
                            value={"1x Triple Room"}
                        />             
                    </HotelInfo>
                    <HotelInfo>
                        <Label
                            infoType={"CONTACT"}
                            value={"+454 218 4893 - Acacia Avenue 22 - casagangotena@gmail.com"}
                        /> 
                    </HotelInfo>
                </LoadingAreaInvisible>
            </NeonBox>
        </MainContainer>
    </>
    )
};
