import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { NavigationComponent } from './features/navigation-component/NavigationComponent';
import { TimeLineComponent } from './features/timeline-component/TimeLineComponent';
import { ModuleNavigationConfiguration } from './models/moduleNavigationConfig';
import { MenuSelectorComponent } from './features/menuselector-component/MenuSelectorComponent';
import { ModuleMenuSelectorConfiguration } from './models/moduleMenuSelectorConfig';
import { ModuleCardConfiguration } from './models/moduleCardConfig';
import { FormComponent } from './features/form-component/FormComponent';
import { ModuleFormConfiguration } from './models/moduleFormConfig';
import { dayConfiguration, ModuleTimeLineConfiguration } from './models/moduleTimeLineConfig';
import flag1 from "./theme/flags/hungary.png";
import flag2 from "./theme/flags/france.png";
import flag3 from "./theme/flags/germany.png";
import flag4 from "./theme/flags/czech-republic.png";
import flag5 from "./theme/flags/united-kingdom.png";
import iconAirplane from "./theme/icons/airplane.png";
import iconHotel from "./theme/icons/hotel.png";
import iconActivity from "./theme/icons/activity.png";
import iconBus from "./theme/icons/bus.png";
import iconTrain from "./theme/icons/train.png";

const configurationCard: ModuleCardConfiguration = {
  title: "Hungary",
  textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
  imgUrl: flag1,
  maskActive: false
}
const configurationCard2: ModuleCardConfiguration = {
  title: "France",
  textAreaValue: "Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.",
  imgUrl: flag2,
  maskActive: false
}
const configurationCard3: ModuleCardConfiguration = {
  title: "Germany",
  textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
  imgUrl: flag3,
  maskActive: false,
}
const configurationCard4: ModuleCardConfiguration = {
  title: "Czech Republic",
  textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
  imgUrl: flag4,
  maskActive: false,
}
const configurationCard5: ModuleCardConfiguration = {
  title: "United Kingdom",
  textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
  imgUrl: flag5,
  maskActive: false,
}

const configurationMenuSelector: ModuleMenuSelectorConfiguration = {
  accountId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  themeBackgroundColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  animationsMode: true,
  editMode: false,
  height: "65vh",
  width: "95vw"
}

const configurationForm: ModuleFormConfiguration = {
  accountId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  themeBackgroundColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  animationsMode: true,
  inputText: "Input Email",
  buttonText: "N E X T",
  httpRequestUrl: "http://www.timetraveler.com/login",
  neonTitle: "Enter your e-mail",
  height: "65vh",
  width: "50vw"
}

const configurationNavigation: ModuleNavigationConfiguration = {
  id: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
  activeComponentName: "overview",
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  themeBackgroundColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  animationsMode: true,
  editMode: false,
  leftArrow: true,
  rightArrow: true,
  tabPanel: true,
  tabSelection: 0,
  height: "75vh",
  width: "37vw"
}

const configurationTimeLine: ModuleTimeLineConfiguration = {
  timeLineId: "5ceeda5f-4cf3-4a01-b625-b5d56aed7046",
  startDate: new Date("2022-05-1"),
  endDate: new Date("2022-05-4"),
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  themeBackgroundColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  animationsMode: true,
  editMode: false,
  height: "95vh",
  width: "90vw"
}

const day1: dayConfiguration = {
  events: [
    {  
      type: "transport",
      hoverText: "You arrived at Aeropuerto de Budapest-Ferenc Liszt (Budapest Airport)",
      icon: iconAirplane,
      date: new Date("2022-05-1")
    },
    {
      type: "hotel",
      hoverText: "You must go to Corinthia Budapest at Erzsébet krt. 43-49, 1073",
      icon: iconHotel,
      date: new Date("2022-05-1")
    }
  ]

}

const day2: dayConfiguration = {
  events: [
    {  
      type: "activity",
      hoverText: "Széchenyi Spa Full Day with Optional Pálinka Tour",
      icon: iconActivity,
      date: new Date("2022-05-2")
    }
  ]
}

const day3: dayConfiguration = {
  events: []
}

const day4: dayConfiguration = {
  events: [
    {  
      type: "transport",
      hoverText: "You will go to Budapest Nepliget bus station.",
      icon: iconBus,
      date: new Date("2022-05-4")
    }
  ]
}

function App() {

  const componentToRender = (componentName: string) => {
    switch(componentName) {
        case 'form':
            return <FormComponent config={configurationForm}/>;
        case 'navigation':
            return <NavigationComponent config={configurationNavigation} />;
        case 'menuselector':
            return <MenuSelectorComponent config={configurationMenuSelector} cards={[configurationCard, configurationCard2, configurationCard3, configurationCard4, configurationCard5]}/>;
        case 'timeline':
            return <TimeLineComponent config={configurationTimeLine} days={[day1, day2, day3, day4]}/>;
        default:
            return <MenuSelectorComponent config={configurationMenuSelector} cards={[configurationCard, configurationCard2, configurationCard3, configurationCard4, configurationCard5]}/>;
    }
  }
  return (
    <ChakraProvider
      theme={theme}
    >
      {
          componentToRender("timeline")
      }
    </ChakraProvider>
  );
}

export default App;
