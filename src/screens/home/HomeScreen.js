import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import HomeSectionComponent from "../../components/ProductItem/ProductItem"

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="search" size={24} color="#969696" />
            <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
          </View>       
        </View>
        
        <View style={styles.bodyContainer}>
          <ScrollView>
            <View style={styles.bannerContainer}>
              <Image source={require('../../../assets/images/banner.jpg')} style={styles.sectionImage} />
            </View>
            <HomeSectionComponent cateTitle="Exclusive Offer"/>
            <HomeSectionComponent cateTitle="Best Selling"/>
            <HomeSectionComponent cateTitle="Groceries"/>
            <HomeSectionComponent cateTitle="Exclusive Offer"/>
          </ScrollView>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#fff',
  },
  inputContainer: {
    backgroundColor: '#F2F3F2',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer:{
    marginHorizontal: 15,
    marginTop: 15,
    height: 130,
  },
  sectionImage: {
    width: '100%',
    height: 130,
    borderRadius: 4,
  },
});


