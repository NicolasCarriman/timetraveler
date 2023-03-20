import React from 'react';
import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { NavigationComponent } from './features/navigation-component/NavigationComponent';
import { ModuleNavigationConfiguration } from './models/moduleNavigationConfig';


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
  width: "37vh"
}
function App() {
  return (
    <ChakraProvider
      theme={theme}
    >
      <NavigationComponent config={configurationNavigation} />
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