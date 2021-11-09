import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
    Alert,
    Button,
    TouchableHighlight,
    Picker,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MainButton from "../../components/Button/MainButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { render } from "react-dom";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
const LoginButton = (props) => {
    return (
        <Icon.Button
            name={props.icon}
            backgroundColor={props.backgroundColor}
            onPress={() => {
                Alert.alert(props.alert);
            }}
            style={[styles.loginButton, {}]}
            borderRadius={15}
        >
            <Text style={styles.textButton}>{props.text}</Text>
        </Icon.Button>
    );
};
export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/images/sign-in-background.png")}
                resizeMode='cover'
                style={styles.image}
            ></Image>
            <View style={styles.main}>
                <Text style={styles.text}>
                    Đăng ký tài khoản để bắt đầu mua sắm
                </Text>
                <TouchableHighlight
                    underlayColor='white'
                    style={{
                        alignItems: "center",
                        top: 20,
                    }}
                    onPress={() => {
                        navigation.navigate("SignInWithPhoneNumber");
                    }}
                >
                    <View style={styles.inputPhoneNumber}>
                        <Image
                            source={require("../../../assets/images/flag.png")}
                            resizeMode='cover'
                            style={styles.flag}
                        ></Image>
                        <Text
                            style={{
                                left: -30,
                                fontFamily: "Bold",
                                fontSize: 18,
                            }}
                        >
                            +84
                        </Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.otherMethod}>
                    Hoặc đăng ký qua tài khoản xã hội
                </Text>
                <View style={{ top: 80 }}>
                    <LoginButton
                        icon='google'
                        backgroundColor='#5383EC'
                        text='Đăng nhập với Google'
                    />
                </View>
                <View style={{ top: 95 }}>
                    <LoginButton
                        icon='facebook'
                        backgroundColor='#4A66AC'
                        alert='Facebook'
                        text='Đăng nhập với Facebook'
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcfcfc",
    },
    image: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    main: {
        flex: 0.5,
        height: "50%",
        padding: 20,
    },
    text: {
        fontSize: 26,
        textAlign: "justify",
        fontFamily: "SemiBold",
    },
    flag: {
        resizeMode: "center",
        left: -20,
        top: 1,
        borderRadius: 3,
    },
    inputPhoneNumber: {
        width: "100%",
        borderBottomColor: "#E2E2E2",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    otherMethod: {
        top: 50,
        textAlign: "center",
        color: "#828282",
        fontFamily: "Medium",
    },
    loginButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 32,
    },

    textButton: {
        color: "#fff",
        fontSize: 16,
        marginHorizontal: 30,
        fontFamily: "SemiBold",
    },
});
