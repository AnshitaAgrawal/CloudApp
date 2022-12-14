import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import OtpScreen from '../src/Auth/OtpScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTitleAlign:'center'
      }}>
      <Stack.Screen
        options={{ headerShown: false
        }}
        name={"OtpScreen"}
        component={OtpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
