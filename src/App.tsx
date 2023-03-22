import React from 'react';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { NavigationComponent } from './features/navigation-component/NavigationComponent';
import { ModuleNavigationConfiguration } from './models/moduleNavigationConfig';
import { MenuSelectorComponent } from './features/menuselector-component/MenuSelectorComponent';
import { ModuleMenuSelectorConfiguration } from './models/moduleMenuSelectorConfig';
import { ModuleCardConfiguration } from './models/moduleCardConfig';
import { FormComponent } from './features/form-component/FormComponent';
import { ModuleFormConfiguration } from './models/moduleFormConfig';
import flag1 from "./theme/flags/hungary.png";
import flag2 from "./theme/flags/european-union.png";
import flag3 from "./theme/flags/argentina.png";
import flag4 from "./theme/flags/czech-republic.png";
import flag5 from "./theme/flags/united-states.png";

const configurationCard: ModuleCardConfiguration = {
  title: "Hungary",
  textAreaValue: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
  imgUrl: flag1,
  maskActive: false
}
const configurationCard2: ModuleCardConfiguration = {
  title: "Europe",
  textAreaValue: "Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.",
  imgUrl: flag2,
  maskActive: false
}
const configurationCard3: ModuleCardConfiguration = {
  title: "Argentina",
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
  title: "USA",
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
  neonTitle: "Time Traveler",
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


function App() {
  return (
    <ChakraProvider
      theme={theme}
    >
      <FormComponent config={configurationForm}/>
    </ChakraProvider>
  );
}

export default App;

/*
------ Styles ------:

Pale: 
  cyan: 0,
  red: 0,
  blue: 0

Crimson: 
  cyan: 0,
  red: 0,
  blue: 0

Cyberpunk:
  cyan: 0,
  red: 0,
  blue: 0

*/