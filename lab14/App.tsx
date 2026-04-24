import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactsScreen from './src/screens/ContactsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Register" component={RegistrationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}