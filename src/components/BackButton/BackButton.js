import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
export default function BackButton(props) {
    return (
        <Button
            buttonStyle={[styles.button]}
            onPress={props.pressEvent}
            icon={<Icon name='angle-left' size={24} color='#000' />}
        />
    );
}
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        left: -20,
        backgroundColor: "transparent",
    },
});
