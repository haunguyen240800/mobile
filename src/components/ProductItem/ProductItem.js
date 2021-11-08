import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

const section_banner = require("../../../assets/images/banner.jpg");
const item_image_1 = require("../../../assets/images/apple.png");
const item_image_2 = require("../../../assets/images/apple.png");
const item_image_3 = require("../../../assets/images/apple.png");
const item_image_4 = require("../../../assets/images/apple.png");

const ProductItem = ({ image, name, price }) => (
  <View style={styles.itemContainer}>
    <Image
      source={require("../../../assets/images/apple.png")}
      style={styles.itemImage}
    />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <View style={styles.row}>
      <Text style={styles.itemPrice}>{price}</Text>
      <Button buttonStyle = {styles.btnAdd}
        icon={<Icon name="plus" size={15} color="white" />}
      />
    </View>
  </View>
);

const HomeSectionComponent = ({ cateTitle }) => {
  return (
    <View style={styles.sectionContainer}>
      {/* <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
      <Image source={require('../../../assets/images/banner.jpg')} style={styles.sectionImage} /> */}
      <View style={styles.cateContainer}>
        <Text style={styles.cateTitle}>{cateTitle}</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            { image1: item_image_1, image2: item_image_2 },
            { image1: item_image_2, image2: item_image_3 },
            { image1: item_image_4, image2: item_image_1 },
            { image1: item_image_1, image2: item_image_2 },
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem
                name="Bananas"
                image={e.image1}
                price="$ 4.9"
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM 636 SẢN PHẨM </Text>
      </View> */}
    </View>
  );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#2f2f2f",
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  //
  cateContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  cateTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#181725",
  },
  seeAll: {
    fontSize: 16,
    fontWeight: "600",
    color: "#53B175",
  },
  filterContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: "#242424",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: "#5a5a5a",
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: "#fff",
  },
  filterInactiveText: {
    color: "#5a5a5a",
  },
  //
  listItemContainer: {
    flexDirection: "row",
  },
  itemContainer: {
    width: 150,
    marginRight: 12,
    padding: 20,
    marginTop: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },

  itemImage: {
    width: 107,
    height: 67,
  },
  itemName: {
    fontSize: 16,
    color: "#181725",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },
  btnAdd:{
    width: 45,
    height: 45,
    backgroundColor: '#53B175',
    borderRadius: 17
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: "#ededed",
    alignItems: "center",
  },
  seeMoreText: {
    color: "#0e45b4",
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
