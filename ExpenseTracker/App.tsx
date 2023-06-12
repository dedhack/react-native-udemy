import React from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpenses from './src/screens/RecentExpenses';
import AllExpenses from './src/screens/AllExpenses';
import {GlobalStyles} from './src/constants/styles';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{title: 'Recent Expenses', tabBarLabel: 'Recent', tabBarIcon: ({color})}}
      />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
