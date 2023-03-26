import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { CoreComponent } from './features/core-component/CoreComponent';
import { ModuleCoreConfiguration } from './models/moduleCoreConfig';


const configurationCore: ModuleCoreConfiguration = {
  activeComponentName: "form",
  selectedCard: -1,
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
  height: "75vh",
  width: "37vw"
}

function App() {
  return (
    <ChakraProvider
      theme={theme}
    >
      <CoreComponent config={configurationCore}/>
    </ChakraProvider>
  );
}

export default App;
