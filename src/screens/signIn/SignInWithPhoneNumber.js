import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TextInput,
    Alert,
    TouchableHighlight,
    ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import NextButton from "../../components/Button/NextButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { render } from "react-dom";

export default function SignIn({ navigation }) {
    const navigateToHome = () => {
        navigation.navigate("Verification");
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/images/verification-background.png")}
                resizeMode='cover'
                style={styles.image}
            >
                <Text style={styles.title}>Nhập số điện thoại của bạn</Text>
                <Text style={styles.label}>Số điện thoại</Text>
                <TouchableHighlight
                    underlayColor='white'
                    style={{ alignItems: "center" }}
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
                                fontWeight: "bold",
                                fontSize: 18,
                            }}
                        >
                            +84
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType='numeric'
                            maxLength={10}
                        />
                    </View>
                </TouchableHighlight>
                <View style={styles.nextButton}>
                    <NextButton pressEvent={navigateToHome} />
                </View>
            </ImageBackground>
        </View>
    );
}
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcfcfc",
    },
    image: {
        height: "100%",
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 21,
        marginTop: 20,
    },
    label: {
        fontWeight: "bold",
        color: "#7C7C7C",
        fontSize: 16,
        marginTop: 30,
    },
    inputPhoneNumber: {
        width: "100%",
        borderBottomColor: "#E2E2E2",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    flag: {
        resizeMode: "center",
        left: -20,
        top: 1,
        borderRadius: 3,
    },
    textInput: {
        width: "100%",
        height: 40,
        fontWeight: "bold",
        fontSize: 18,
        left: -20,
    },
    nextButton: {
        position: "absolute",
        right: 20,
        bottom: 50,
    },
});
