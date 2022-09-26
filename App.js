import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Categorey from "./src/screens/Categorey";
import RecipeInfo from "./src/screens/RecipeInfo";
import Description from "./src/screens/Description";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="categorey" component={Categorey} />
        <Stack.Screen name="recipe" component={RecipeInfo} />
        <Stack.Screen name="description" component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
