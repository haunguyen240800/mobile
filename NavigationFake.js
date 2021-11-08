import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "./src/components/Button/MainButton";
import Onboarding from "./src/screens/onboarding/Onboarding";
import SplashScreen from "./src/screens/splashScreen/SplashScreen";
import SignIn from "./src/screens/signIn/SignIn";
import SignInWithPhoneNumber from "./src/screens/signIn/SignInWithPhoneNumber";
import SignInWithFacebook from "./src/screens/signIn/SignInWithFacebook";
import SignInWithGoogle from "./src/screens/signIn/SignInWithGoogle";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function NavigationFake() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                ></Stack.Screen>
                <Stack.Screen
                    name='Onboarding'
                    component={Onboarding}
                    options={{
                        headerShown: false,
                    }}
                ></Stack.Screen>
                <Stack.Screen
                    name='SignIn'
                    component={SignIn}
                    options={{
                        headerShown: false,
                    }}
                ></Stack.Screen>
                <Stack.Screen
                    name='SignInWithPhoneNumber'
                    component={SignInWithPhoneNumber}
                    options={{
                        position: "absolute",
                        // headerTransparent: true,
                        headerTitle: "",
                    }}
                ></Stack.Screen>
                <Stack.Screen
                    name='SignInWithFacebook'
                    component={SignInWithFacebook}
                ></Stack.Screen>
                <Stack.Screen
                    name='SignInWithGoogle'
                    component={SignInWithGoogle}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
