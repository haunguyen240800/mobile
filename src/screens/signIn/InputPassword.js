import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    ImageBackground,
    Animated,
} from "react-native";
import PasswordInputText from "react-native-hide-show-password-input";
import BackButton from "../../components/BackButton/BackButton";
import NextButton from "../../components/Button/NextButton";
export default class InputPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
        };
    }

    render() {
        const { password } = this.state;
        const { navigation } = this.props;
        Animated.timing(true, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true, // <-- Add this Line
        }).start();
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../../assets/images/verification-background.png")}
                    resizeMode='cover'
                    style={styles.image}
                >
                    <View style={{ top: 30, marginBottom: 20 }}>
                        <BackButton
                            pressEvent={() => {
                                navigation.goBack();
                            }}
                        ></BackButton>
                    </View>
                    <Text style={styles.title}>Nhập mã xác nhận</Text>
                    <Text style={styles.label}>Mã</Text>
                    <View>
                        <PasswordInputText
                            getRef={(input) => (this.input = input)}
                            value={password}
                            onChangeText={(password) =>
                                this.setState({ password })
                            }
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
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
        fontFamily: "Bold",
        fontSize: 21,
        marginTop: 20,
    },
    label: {
        fontFamily: "SemiBold",
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
    textInput: {
        width: "100%",
        height: 40,
        fontWeight: "bold",
        fontSize: 18,
    },
    nextButton: {
        position: "absolute",
        right: 20,
        bottom: 50,
    },
});
