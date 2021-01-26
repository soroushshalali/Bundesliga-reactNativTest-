import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



import { Home, Bundesliga, TeamsList, Team, Records, AboutMe } from './screens/Screens'
import { StatusBar } from 'react-native';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar  hidden />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bundesliga" component={Bundesliga} />
        <Stack.Screen name='Records' component={Records} />
        <Stack.Screen name="Teams" component={TeamsList} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="AboutMe" component={AboutMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
