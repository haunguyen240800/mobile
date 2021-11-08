import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
    Alert,
    Button,
} from "react-native";
import MainButton from "../../components/Button/MainButton";
export default function Onboarding({ navigation }) {
    const navigateScreen = () => {
        navigation.replace("SignIn");
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/images/onboarding-background.png")}
                resizeMode='cover'
                style={styles.image}
            >
                <View style={styles.logoArea}>
                    <Image
                        source={require("../../../assets/images/tiny-logo.png")}
                        resizeMode='center'
                        style={styles.logo}
                    ></Image>
                    <Text style={styles.appName}>KMA Online Market App</Text>
                    <Text style={styles.appInfo}>
                        Ứng dụng đi chợ và đặt hàng online
                    </Text>
                </View>
                <MainButton
                    bottom={40}
                    title='Tiếp theo'
                    startColor='#53E88B'
                    endColor='#15BE77'
                    onPress={navigateScreen}
                />
            </ImageBackground>
        </View>
    );
}
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: "100%",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    },
    logoArea: {
        top: -50,
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        resizeMode: "contain",
        width: 70,
    },
    appName: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    appInfo: {
        textAlign: "center",
        fontSize: 16,
        top: 10,
        color: "#fff",
    },
});
