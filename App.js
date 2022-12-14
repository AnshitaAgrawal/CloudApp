import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import RootNavigator from './Navigators/RootNviagtion';
import { Provider } from 'react-native-paper';


const App = () => {
  return (
  <NavigationContainer>
    <RootNavigator/>
    </NavigationContainer>
  
  );
};
export default ()=>{
  return(
    <Provider>
      <App/>
</Provider>
  )
}

