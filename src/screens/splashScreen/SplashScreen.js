import React from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";

export default function SplashScreen({ navigation }) {
    setTimeout(function () {
        navigation.replace("Onboarding");
    }, 2000);
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require("../../../assets/images/app-logo.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#53B175",
    },
    tinyLogo: {
        resizeMode: "center",
    },
});
