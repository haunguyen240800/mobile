import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
export default function NextButton(props) {
    return (
        <Button
            buttonStyle={styles.button}
            onPress={props.pressEvent}
            icon={<Icon name='plus' size={15} color='white' />}
        />
        // <View style={style}>
        //     <LinearGradient
        //         start={{ x: -1, y: 0 }}
        //         end={{ x: 1, y: 0 }}
        //          ={[startColor, endColor]}
        //         style={[styles.button, { bottom: bottom }]}
        //     >
        //         <Pressable onPress={onPress}>
        //             <Icon name='chevron-right' color='#fff' size={16} />
        //         </Pressable>
        //     </LinearGradient>
        // </View>
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
    },
});
