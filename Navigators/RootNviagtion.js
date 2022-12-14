import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from '../src/Auth/Splash';
import RecipeDetails from '../src/user/RecipeDetails';
import RecipeList from '../src/user/RecipeList';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTitleAlign:'center'
      }}>
      <Stack.Screen
        options={{ headerShown: false
        }}
        name={"Splash"}
        component={Splash}
      />
      <Stack.Screen
      options={{ headerShown: false
        }}
        // options={{ headerShown: true, headerLeft:null}}
        name={"AuthNavigator"}
        component={AuthNavigator}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={"RecipeDetails"}
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
