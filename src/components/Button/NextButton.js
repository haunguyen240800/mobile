import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
export default function NextButton(props) {
    return (
        <Button
            buttonStyle={[styles.button]}
            onPress={props.pressEvent}
            icon={<Icon name='angle-right' size={20} color='#FFF9FF' />}
        />
    );
}
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: "#53B175",
    },
});
