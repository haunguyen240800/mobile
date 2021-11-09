import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import "react-native-gesture-handler";
import TabButton from "./src/navigations/TabButton";
import HomeScreen from "./src/screens/home/HomeScreen";
import SplashScreen from "./src/screens/splashScreen/SplashScreen";
import SignIn from "./src/screens/signIn/SignIn";
import SignInWithPhoneNumber from "./src/screens/signIn/SignInWithPhoneNumber";
import SignInWithFacebook from "./src/screens/signIn/SignInWithFacebook";
import SignInWithGoogle from "./src/screens/signIn/SignInWithGoogle";
import Onboarding from "./src/screens/onboarding/Onboarding";
import ProductDetailScreen from "./src/screens/product/ProductDetail";
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        // <RootComponent></RootComponent>

        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
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
                <Stack.Screen
                    name='HomeTabs'
                    component={TabButton}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='ProductDetail'
                    component={ProductDetailScreen}
                    options={{
                        headerShown: false,
                        headerTitle: "",
                        headerStyle: {
                            backgroundColor: "#F2F3F2"
                        },
                        
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
