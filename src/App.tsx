import React from 'react';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { ListComponent } from './features/list-component/listComponent';
import { AddEventComponent } from './features/addevent-component/addEventComponent';
import { CardComponent } from './features/card-component/CardComponent';
import { NoteComponent } from './features/note-component/NoteComponent';
import { ModuleListConfiguration } from './models/moduleListConfig';
import { ModuleAddEventConfiguration } from './models/moduleAddEventConfig';
import { ModuleCardConfiguration } from './models/moduleCardConfig';
import { ModuleNoteConfiguration } from './models/moduleNoteConfig';

const configuration: ModuleListConfiguration = {
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  bannerActivated: false,
  bannerEdit: false,
  leftArrow: false,
  rightArrow: false,
  editElements: false,
  carrousel: true
}

const configurationAddEvent: ModuleAddEventConfiguration = {
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  leftArrow: false,
  rightArrow: false,
}

const configurationCard: ModuleCardConfiguration = {
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  animationsMode: true,
  textArea: "Budapest, Hungary \n\nBudapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
  leftArrow: false,
  rightArrow: false,
  editMode: false
}

const configurationNote: ModuleNoteConfiguration = {
  themeColor: {
    cyan: 0,
    red: 0,
    blue: 0
  },
  animationsMode: true,
  textArea: "Budapest is the capital and most populous city of Hungary. It is the ninth-largest city in the European Union by population within city limits and the second-largest city on the Danube river; the city has an estimated population of 1,752,286 over a land area of about 525 square kilometers (203 square miles). Budapest, which is both a city and county, forms the center of the Budapest metropolitan area, which has an area of 7,626 square kilometers (2,944 square miles) and a population of 3,303,786; it is a primate city, constituting 33% of the population of Hungary.",
  leftArrow: false,
  rightArrow: false
}

function App() {
  return (
    <ChakraProvider
      theme={theme}
    >
      <NoteComponent config={configurationNote}/>
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