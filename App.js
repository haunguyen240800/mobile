import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import "react-native-gesture-handler";
import TabButton from "./src/navigations/TabButton";
import SplashScreen from "./src/screens/splashScreen/SplashScreen";
import SignIn from "./src/screens/signIn/SignIn";
import SignInWithPhoneNumber from "./src/screens/signIn/SignInWithPhoneNumber";
import SignInWithFacebook from "./src/screens/signIn/SignInWithFacebook";
import SignInWithGoogle from "./src/screens/signIn/SignInWithGoogle";
import Verification from "./src/screens/signIn/Verification";
import InputPassword from "./src/screens/signIn/InputPassword";
import Onboarding from "./src/screens/onboarding/Onboarding";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import ProductDetailScreen from "./src/screens/product/ProductDetail";
const Stack = createNativeStackNavigator();
export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };
    async _loadFontsAsync() {
        await Font.loadAsync({
            Black: require("./assets/fonts/SVN-Gilroy-Black.otf"),
            BlackItalic: require("./assets/fonts/SVN-Gilroy-Black-Italic.otf"),
            Bold: require("./assets/fonts/SVN-Gilroy-Bold.otf"),
            BoldItalic: require("./assets/fonts/SVN-Gilroy-Bold-Italic.otf"),
            Heavy: require("./assets/fonts/SVN-Gilroy-Heavy.otf"),
            HeavyItalic: require("./assets/fonts/SVN-Gilroy-Heavy-Italic.otf"),
            Light: require("./assets/fonts/SVN-Gilroy-Light.otf"),
            LightItalic: require("./assets/fonts/SVN-Gilroy-Light-Italic.otf"),
            Medium: require("./assets/fonts/SVN-Gilroy-Medium.otf"),
            MediumItalic: require("./assets/fonts/SVN-Gilroy-Medium-Italic.otf"),
            Regular: require("./assets/fonts/SVN-Gilroy-Regular.otf"),
            RegularItalic: require("./assets/fonts/SVN-Gilroy-Italic.otf"),
            SemiBold: require("./assets/fonts/SVN-Gilroy-SemiBold.otf"),
            SemiBoldItalic: require("./assets/fonts/SVN-Gilroy-SemiBold-Italic.otf"),
            Thin: require("./assets/fonts/SVN-Gilroy-Thin.otf"),
            ThinItalic: require("./assets/fonts/SVN-Gilroy-Thin-Italic.otf"),
            XBold: require("./assets/fonts/SVN-Gilroy-XBold.otf"),
            XBoldItalic: require("./assets/fonts/SVN-Gilroy-XBold-Italic.otf"),
            XLight: require("./assets/fonts/SVN-Gilroy-Xlight.otf"),
            XLightItalic: require("./assets/fonts/SVN-Gilroy-Xlight-Italic.otf"),
        });
        this.setState({ fontLoaded: true });
    }
    componentDidMount() {
        this._loadFontsAsync();
    }
    render() {
        if (this.state.fontLoaded) {
            return (
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
                                headerShown: false,
                            }}
                        ></Stack.Screen>
                        <Stack.Screen
                            name='SignInWithFacebook'
                            component={SignInWithFacebook}
                            options={{
                                headerShown: false,
                            }}
                        ></Stack.Screen>
                        <Stack.Screen
                            name='SignInWithGoogle'
                            component={SignInWithGoogle}
                            options={{
                                headerShown: false,
                            }}
                        ></Stack.Screen>
                        <Stack.Screen
                            name='Verification'
                            component={Verification}
                            options={{
                                headerShown: false,
                            }}
                        ></Stack.Screen>
                        <Stack.Screen
                            name='InputPassword'
                            component={InputPassword}
                            options={{
                                headerShown: false,
                            }}
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
                                    backgroundColor: "#F2F3F2",
                                },
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        } else {
            return <AppLoading />;
        }
    }
}
