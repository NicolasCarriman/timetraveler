import React from 'react';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ListComponent } from './features/list-component/listComponent';
import { ModuleListConfiguration } from './models/moduleListConfig';
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

function App() {
  return (
    <ChakraProvider
      theme={theme}
    >
      <ListComponent config={configuration}/>
    </ChakraProvider>
  );
}

export default App;
