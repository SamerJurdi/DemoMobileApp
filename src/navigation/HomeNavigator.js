import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ProductListing} from '../screens';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductListingScreen"
        component={ProductListing}
        options={{headerTitle: 'Products'}}
      />
    </Stack.Navigator>
  );
}
