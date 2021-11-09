import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeSectionComponent from "../../components/ProductItem/ProductItem";

export default class ProductDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.header}>
              <Icon name="angle-left" size={30} color="#181725"/>
              <Icon name="angle-left" size={30} color="#181725"/>
            </View>
            
            <View style={styles.bannerContainer}>
              <Image
                source={require("../../../assets/images/banner.jpg")}
                style={styles.sectionImage}
              />
            </View>
            <HomeSectionComponent cateTitle="Exclusive Offer" />
            <HomeSectionComponent cateTitle="Best Selling" />
            <HomeSectionComponent cateTitle="Groceries" />
            <HomeSectionComponent cateTitle="Exclusive Offer" />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#F2F3F2'
  },

  bannerContainer: {
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    height: "30%",
    backgroundColor: "#F2F3F2",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    padding: 40,
  },
  sectionImage: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    borderRadius: 20,
  },
});
