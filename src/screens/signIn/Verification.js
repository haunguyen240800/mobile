import React from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    ImageBackground,
} from "react-native";
import BackButton from "../../components/BackButton/BackButton";
import NextButton from "../../components/Button/NextButton";
import CodeInput from "../../components/ConfirmCodeInput/ConfirmationCodeInput";

export default class Verification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            gotCode: "111111",
            correct: false,
        };
    }

    _onFinishCheckingCode2(isValid, code) {
        const { navigation } = this.props;
        if (!isValid) {
            Alert.alert(
                "Confirmation Code",
                "Code not match!",
                [{ text: "OK" }],
                { cancelable: false }
            );
        } else {
            this.setState({ code });
            navigation.reset({
                index: 0,
                routes: [{ name: "HomeTabs" }],
            });
        }
    }

    render() {
        const { navigation } = this.props;
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
                        <CodeInput
                            ref='codeInputRef2'
                            keyboardType='numeric'
                            activeColor='#000'
                            codeLength={6}
                            className={"border-b"}
                            compareWithCode={this.state.gotCode}
                            autoFocus={true}
                            inputPosition='full-width'
                            codeInputStyle={{
                                fontFamily: "Bold",
                                color: "#000",
                                fontSize: 18,
                                borderColor: "#000",
                            }}
                            onFulfill={(isValid, code) =>
                                this._onFinishCheckingCode2(isValid, code)
                            }
                            onCodeChange={(code) => {
                                this.state.code = code;
                            }}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F6CE",
    },
    image: {
        height: "100%",
        paddingHorizontal: 20,
    },
    label: {
        fontFamily: "SemiBold",
        color: "#7C7C7C",
        fontSize: 16,
        marginTop: 30,
    },

    title: {
        fontFamily: "Bold",
        fontSize: 21,
        marginTop: 20,
    },
    inputWrapper3: {},
    inputWrapper: {},
    nextButton: {
        position: "absolute",
        right: 20,
        bottom: 50,
    },
});

AppRegistry.registerComponent("Verification", () => Verification);
