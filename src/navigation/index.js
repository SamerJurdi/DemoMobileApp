import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{drawerLabel: 'Home', headerTitle: 'Welcome'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
