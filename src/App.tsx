import React from 'react';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ListComponent } from './features/list-component/listComponent';
import { ModuleListConfiguration } from './models/moduleListConfig';
import { AddEventComponent } from './features/addevent-component/addEventComponent';
import { ModuleAddEventConfiguration } from './models/moduleAddEventConfig';
import { theme } from './theme/theme';

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

function App() {
  return (
    <ChakraProvider
      theme={theme}
    >
      <AddEventComponent config={configurationAddEvent}/>
    </ChakraProvider>
  );
}

export default App;
