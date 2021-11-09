import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
export default function Button(props) {
    const { onPress, title, bottom, startColor, endColor } = props;
    return (
        <View style={styles.buttonArea}>
            <LinearGradient
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[startColor, endColor]}
                style={[styles.button, { bottom: bottom }]}
            >
                <Pressable onPress={onPress} style={styles.buttonText}>
                    <Text style={styles.text}>{title}</Text>
                </Pressable>
            </LinearGradient>
        </View>
    );
}
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    buttonArea: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontFamily: "SemiBold",
        letterSpacing: 0.25,
        color: "white",
    },
    buttonText: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
