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

  navigateToHome = () => {
    this.props.navigation.navigate("ProductDetail");
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <View style= {{flexDirection: 'row',justifyContent: "center"}}>
            <Image style={styles.imageTopHeader} source={require('../../../assets/icons/Carrot.png')}/> 
          </View>  
          <View style={styles.headerAddress}>
            <MaterialIcons name="location-pin" size={21} color="#4C4F4D" />
              <Text style={styles.addressText}>Bạn tìm gì hôm nay?</Text>
            </View>
        </View>
        <View style={styles.headerSearchContainer}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="search" size={24} color="#181B19" />
            <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
          </View>       
        </View>
        
        <View style={styles.bodyContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.bannerContainer}>
              <Image source={require('../../../assets/banner/banner.png')} style={styles.sectionImage} />
            </View>
            <HomeSectionComponent cateTitle="Exclusive Offer" onPress=""/>
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
  headerContainer:{
    flexDirection: "column",
    paddingTop: 15
  },
  imageTopHeader: {
    width: 21,
    height: 24,
  },
  headerAddress:{
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5
  },
  addressText:{
    fontSize: 18,
    color: '#4C4F4D',
    fontWeight: 'bold'
  },
  headerSearchContainer: {
    flexDirection: 'row',
    paddingTop: 20,
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


