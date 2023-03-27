import React from "react";
import { ModuleCoreConfiguration } from "../../models/moduleCoreConfig";
import { useCore } from "../../hooks/useCore";
import {

} from "./CoreComponent.styled";
import { FormComponent } from "../form-component/FormComponent";
import { NavigationComponent } from "../navigation-component/NavigationComponent";
import { MenuSelectorComponent } from "../menuselector-component/MenuSelectorComponent";
import { TimeLineComponent } from "../timeline-component/TimeLineComponent";
import { ModuleNavigationConfiguration } from '../../models/moduleNavigationConfig';
import { ModuleMenuSelectorConfiguration } from '../../models/moduleMenuSelectorConfig';
import { ModuleFormConfiguration } from '../../models/moduleFormConfig';
import { dayConfiguration, ModuleTimeLineConfiguration } from '../../models/moduleTimeLineConfig';
import { ModuleListConfiguration } from "../../models/moduleListConfig";
import { ModuleOverviewConfiguration } from "../../models/moduleOverviewConfig";
import flag1 from "../../theme/flags/hungary.png";
import flag2 from "../../theme/flags/france.png";
import flag3 from "../../theme/flags/germany.png";
import flag4 from "../../theme/flags/czech-republic.png";
import flag5 from "../../theme/flags/united-kingdom.png";
import iconAirplane from "../../theme/icons/airplane.png";
import iconHotel from "../../theme/icons/hotel.png";
import iconActivity from "../../theme/icons/activity.png";
import iconBus from "../../theme/icons/bus.png";
import iconTrain from "../../theme/icons/train.png";
import hotel1 from "../../theme/hotels/hotel1.jpg";
import hotel2 from "../../theme/hotels/hotel2.jpg";
import hotel3 from "../../theme/hotels/hotel3.jpg";
import hotel4 from "../../theme/hotels/hotel4.jpg";

import budapest1 from "../../theme/cities/budapest.jpg";
import budapest2 from "../../theme/cities/budapest2.jpg";
import budapest3 from "../../theme/cities/budapest3.jpg";
import budapest4 from "../../theme/cities/budapest4.jpg";

import paris1 from "../../theme/cities/paris.jpg";
import paris2 from "../../theme/cities/paris2.jpg";
import paris3 from "../../theme/cities/paris3.jpg";
import paris4 from "../../theme/cities/paris4.jpg";

import berlin1 from "../../theme/cities/berlin1.jpg";
import berlin2 from "../../theme/cities/berlin2.jpg";
import berlin3 from "../../theme/cities/berlin3.jpg";
import berlin4 from "../../theme/cities/berlin4.jpg";

import prague1 from "../../theme/cities/prague.jpg";
import prague2 from "../../theme/cities/prague2.jpg";
import prague3 from "../../theme/cities/prague3.jpg";
import prague4 from "../../theme/cities/prague4.jpg";

import london1 from "../../theme/cities/london1.jpg";
import london2 from "../../theme/cities/london2.jpg";
import london3 from "../../theme/cities/london3.jpg";
import london4 from "../../theme/cities/london4.jpg";

const dayBudapest1: dayConfiguration = {
    events: [
        {  
            type: "transport",
            hoverText: "You arrived at Aeropuerto de Budapest-Ferenc Liszt (Budapest Airport)",
            icon: iconAirplane,
            date: new Date("2022-05-1"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [hotel1, hotel2, hotel3, hotel4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '2 pm',
                checkoutHour: '12 pm',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        },
        {
            type: "hotel",
            hoverText: "You must go to Corinthia Budapest at Erzsébet krt. 43-49, 1073",
            icon: iconHotel,
            date: new Date("2022-05-1"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [hotel1, hotel2, hotel3, hotel4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '2 pm',
                checkoutHour: '12 pm',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        }
    ]
}
const dayBudapest2: dayConfiguration = {
    events: [
        {  
            type: "activity",
            hoverText: "Széchenyi Spa Full Day with Optional Pálinka Tour",
            icon: iconActivity,
            date: new Date("2022-05-2"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [hotel1, hotel2, hotel3, hotel4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '',
                checkoutHour: '',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        }
    ]
}
const dayBudapest3: dayConfiguration = {
    events: []
}
const dayBudapest4: dayConfiguration = {
    events: [
        {  
            type: "transport",
            hoverText: "You will go to Budapest Nepliget bus station.",
            icon: iconBus,
            date: new Date("2022-05-4"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [hotel1, hotel2, hotel3, hotel4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '',
                checkoutHour: '',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        }
    ]
}

const dayParis1: dayConfiguration = {
    events: [
        {  
            type: "transport",
            hoverText: "You arrived at Paris Gallieni - international Bus station.",
            icon: iconBus,
            date: new Date("2022-05-5"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [budapest1, budapest2, budapest3, budapest4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '',
                checkoutHour: '',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        },
        {
            type: "hotel",
            hoverText: "You must go to Hotel Gustave.",
            icon: iconHotel,
            date: new Date("2022-05-5"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [budapest1, budapest2, budapest3, budapest4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '',
                checkoutHour: '',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        }
    ]
}
const dayParis2: dayConfiguration = {
    events: [
        {  
            type: "activity",
            hoverText: "You should go to Eiffel Tower at in the Champ de Mars.",
            icon: iconActivity,
            date: new Date("2022-05-6"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [budapest1, budapest2, budapest3, budapest4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '',
                checkoutHour: '',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        }
    ]
}
const dayParis3: dayConfiguration = {
    events: [
        {  
            type: "transport",
            hoverText: "You will go to Paris Gallieni - international Bus station.",
            icon: iconBus,
            date: new Date("2022-05-7"),
            component: {
                name: 'Casa Gangotena Hotel',
                spokenLanguages: ['English', 'Spanish'],
                stars: 4,
                images: [budapest1, budapest2, budapest3, budapest4],
                locationCoordinates: ['-123123123', '18919141'],
                checkinHour: '',
                checkoutHour: '',
                startDate: new Date("2022-05-1"),
                endDate: new Date("2022-05-1"),
                rooms: '1x Triple Room',
                breakfast: 'included',
                wifi: 'Yes',
                address: 'Acacia Avenue 22',
                phoneNumber: '+45 4513 5127',
                contactEmail: 'casagangotena@hotel.com',
            }
        }
    ]
}

const budapestList: ModuleListConfiguration = {
    bannerActivated: true,
    carrousel: true,
    images: [budapest1, budapest2, budapest3, budapest4]
}
const budapestOverview: ModuleOverviewConfiguration = {
    textArea: "Budapest, Hungary \n\nBudapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
    images: [budapest1, budapest2, budapest3, budapest4]
}
const budapestTimeLine: ModuleTimeLineConfiguration = {
    timeLineId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
    startDate: new Date("2022-05-1"),
    endDate: new Date("2022-05-4"),
    days: [dayBudapest1, dayBudapest2, dayBudapest3, dayBudapest4],
    height: "95vh",
    width: "90vw"
}

const paristList: ModuleListConfiguration = {
    bannerActivated: true,
    carrousel: true,
    images: [paris1, paris2, paris3, paris4]
}
const parisOverview: ModuleOverviewConfiguration = {
    textArea: "Paris, France \n\nParis is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km² (41 sq mi), making it the fourth-most populated city in the European Union as well as the 30th most densely populated city in the world in 2022. Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, and science. For its leading role in the arts and sciences, as well as its very early system of street lighting, in the 19th century it became known as 'the City of Light'.",
    images: [paris1, paris2, paris3, paris4]
}
const parisTimeLine: ModuleTimeLineConfiguration = {
    timeLineId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
    startDate: new Date("2022-05-1"),
    endDate: new Date("2022-05-4"),
    days: [dayParis1, dayParis2, dayParis3],
    height: "95vh",
    width: "90vw"
}

const berlinList: ModuleListConfiguration = {
    bannerActivated: true,
    carrousel: true,
    images: [berlin1, berlin2, berlin3, berlin4]
}
const berlinOverview: ModuleOverviewConfiguration = {
    textArea: "Berlin, Germany\n\nBerlin is the capital and largest city of Germany by both area and population. Its 3.7 million inhabitants make it the European Union's most populous city, according to population within city limits. One of Germany's sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg's capital. Berlin's urban area, which has a population of around 4.5 million, is the second most populous urban area in Germany after the Ruhr.",
    images: [berlin1, berlin2, berlin3, berlin4]
}
const berlinTimeLine: ModuleTimeLineConfiguration = {
    timeLineId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
    startDate: new Date("2022-05-1"),
    endDate: new Date("2022-05-4"),
    days: [dayBudapest1, dayBudapest2, dayBudapest3, dayBudapest4],
    height: "95vh",
    width: "90vw"
}

const pragueList: ModuleListConfiguration = {
    bannerActivated: true,
    carrousel: true,
    images: [prague1, prague2, prague3, prague4]
}
const pragueOverview: ModuleOverviewConfiguration = {
    textArea: "Prague, Czech Republic\n\nPrague is a political, cultural, and economic hub of central Europe, with a rich history and Romanesque, Gothic, Renaissance and Baroque architectures. It was the capital of the Kingdom of Bohemia and residence of several Holy Roman Emperors, most notably Charles IV.",
    images: [prague1, prague2, prague3, prague4]
}
const pragueTimeLine: ModuleTimeLineConfiguration = {
    timeLineId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
    startDate: new Date("2022-05-1"),
    endDate: new Date("2022-05-4"),
    days: [dayBudapest1, dayBudapest2, dayBudapest3, dayBudapest4],
    height: "95vh",
    width: "90vw"
}

const londonList: ModuleListConfiguration = {
    bannerActivated: true,
    carrousel: true,
    images: [london1, london2, london3, london4]
}
const londonOverview: ModuleOverviewConfiguration = {
    textArea: "London, United Kingdom\n\nAs one of the world's major global cities, London exerts a strong influence on its arts, entertainment, fashion, commerce and finance, education, health care, media, science and technology, tourism, and transport and communications. Its GDP (€801.66 billion in 2017) makes it the largest urban economy in Europe, and it is one of the major financial centres in the world. With Europe's largest concentration of higher education institutions, it is home to some of the highest-ranked academic institutions in the world—Imperial College London in natural and applied sciences, the London School of Economics in social sciences, and the comprehensive University College London. London is the most visited city in Europe and has the busiest city airport system in the world.",
    images: [london1, london2, london3, london4]
}
const londonTimeLine: ModuleTimeLineConfiguration = {
    timeLineId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
    startDate: new Date("2022-05-1"),
    endDate: new Date("2022-05-4"),
    days: [],
    height: "95vh",
    width: "90vw"
}

const configurationNavigation: ModuleNavigationConfiguration = {
  activeComponentName: "overview",
  activeCard: -1,
  leftArrow: true,
  rightArrow: true,
  tabPanel: true,
  tabSelection: 0,
  height: "75vh",
  width: "37vw",
  overviewComponent: [budapestOverview, parisOverview, berlinOverview, pragueOverview, londonOverview],
  activityComponent: [budapestList, paristList, berlinList, pragueList, londonList],
  journalComponent: [budapestTimeLine, parisTimeLine, berlinTimeLine, pragueTimeLine, londonTimeLine],
  infoComponent: [budapestList, paristList, berlinList, pragueList, londonList]
}
const configurationMenuSelector: ModuleMenuSelectorConfiguration = {
    accountId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
    cards: [
        {
            title: "Hungary",
            textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
            imgUrl: flag1,
            maskActive: false
        },
        {
            title: "France",
            textAreaValue: "Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.",
            imgUrl: flag2,
            maskActive: false
        },
        {
            title: "Germany",
            textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
            imgUrl: flag3,
            maskActive: false,
        },
        {
            title: "Czech Republic",
            textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
            imgUrl: flag4,
            maskActive: false,
        },
        {
            title: "United Kingdom",
            textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
            imgUrl: flag5,
            maskActive: false,
        },
    ],
    height: "65vh",
    width: "95vw"
}
const configurationForm: ModuleFormConfiguration = {
  accountId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
  inputText: "Input itinerary ID",
  buttonText: "N E X T",
  httpRequestUrl: "http://www.timetraveler.com/itinerary?id=5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
  neonTitle: "Load your itinerary",
  height: "65vh",
  width: "50vw"
}

interface CoreProps {
    config: ModuleCoreConfiguration
}

export const CoreComponent: React.FC<CoreProps> = (
    { config }
) => {
    const { loadComponent, loadCard, configuration } = useCore(
        config,
    );
    const [isOpenTimeLine, setIsOpenTimeLine] = React.useState(false);
	React.useEffect(() => {
		console.log("selectedCard: " + configuration.selectedCard)
		if (configuration.selectedCard != -1) {
			loadComponent("navigation")
		}
	}, [configuration.selectedCard])

    const closeTimeLineModal = () => {
        setIsOpenTimeLine(false);
    };
    
    const componentToRender = (componentName: string) => {
        switch(componentName) {
            case 'form':
                return <FormComponent config={configurationForm} handler={loadComponent}/>;
            case 'navigation':
                return <NavigationComponent config={{...configurationNavigation, activeCard: configuration.selectedCard}} handler={loadComponent}/>;
            case 'menuselector':
                return <MenuSelectorComponent config={configurationMenuSelector} handlerCard={loadCard}/>;
            case 'timeline':
                return <TimeLineComponent config={configurationNavigation.journalComponent[configuration.selectedCard]} handler={loadComponent}/>;
            default:
                return <FormComponent config={configurationForm} handler={loadComponent}/>;
        }
      }
    
    return (
        <>
            {
                componentToRender(configuration.activeComponentName)
            } 
        </>
    )
};
