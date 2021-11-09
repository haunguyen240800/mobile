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
import CategorySectionComponent from "../../components/Category/CategorySection";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Tìm kiếm sản phẩm</Text>
        </View>
        <View style={styles.headerSearchContainer}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="search" size={24} color="#181B19" />
            <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
          </View>       
        </View>
        
        <View style={styles.bodyContainer}>
          <ScrollView showsVerticalScrollIndicator = {false}>
            <CategorySectionComponent cateTitle="Exclusive Offer"/>
            <CategorySectionComponent cateTitle="Best Selling"/>
            <CategorySectionComponent cateTitle="Groceries"/>
            <CategorySectionComponent cateTitle="Exclusive Offer"/>
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
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15
  },
  title: {
      fontSize: 20,
      fontWeight: "bold"
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
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  inputContainer: {
    backgroundColor: '#F2F3F2',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
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
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  sectionImage: {
    width: '100%',
    height: 130,
    borderRadius: 4,
  },
});


