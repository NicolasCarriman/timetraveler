import flag1 from "../../../theme/flags/hungary.png";
import flag2 from "../../../theme/flags/france.png";
import flag3 from "../../../theme/flags/germany.png";
import { ICoreIntineraryData, IDestiny } from "../../../models/intineraryReducer";

import budapest1 from "../../../theme/cities/budapest.jpg";
import budapest2 from "../../../theme/cities/budapest2.jpg";
import budapest3 from "../../../theme/cities/budapest3.jpg";
import budapest4 from "../../../theme/cities/budapest4.jpg";

import paris1 from "../../../theme/cities/paris.jpg";
import paris2 from "../../../theme/cities/paris2.jpg";
import paris3 from "../../../theme/cities/paris3.jpg";
import paris4 from "../../../theme/cities/paris4.jpg";

import berlin1 from "../../../theme/cities/berlin1.jpg";
import berlin2 from "../../../theme/cities/berlin2.jpg";
import berlin3 from "../../../theme/cities/berlin3.jpg";
import berlin4 from "../../../theme/cities/berlin4.jpg";
import { intineraryType } from "../../../services/getIntinerary";

const budapestOverview = {
    images: [budapest1, budapest2, budapest3, budapest4]
}
const parisOverview = {
    images: [paris1, paris2, paris3, paris4]
}
const berlinOverview = {
    images: [berlin1, berlin2, berlin3, berlin4]
}

const flahsHungary = flag1;
const flagsFrance = flag2;
const flagsBerlin = flag3;

export const flags = [flahsHungary, flagsFrance, flagsBerlin ];

export const overview = [budapestOverview, parisOverview, berlinOverview]

export const getActualIntinerary = (intineraryData : intineraryType[]) => {
    let intineraryObjct: IDestiny[] = [];

    console.log(' intinerary :', intineraryData);

    for (let i = 0; i < intineraryData.length; i++) {
        const currentIntinerary = intineraryData[i];
        const currentOverview = overview[i];
        const currentFlag = flags[i];

        intineraryObjct.push({
            title: currentIntinerary.country,
            imgUrl: currentFlag,
            maskActive: false,
            textArea: currentIntinerary.overview.about,
            ...currentOverview
        });
    }
    return intineraryObjct;
}

const configurationMenuSelector: ICoreIntineraryData = {
    itineraryId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
    currentDestiny: {
        title: "Hungary",
        imgUrl: flag1,
        maskActive: false,
        textArea: '',
        ...budapestOverview
    },
}

export const initialState = configurationMenuSelector;
