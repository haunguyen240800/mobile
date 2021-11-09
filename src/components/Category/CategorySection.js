import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

const item_image_1 = require("../../../assets/images/product/fruit-vegetable.png");
const item_image_2 = require("../../../assets/images/product/dairy-egg.png");
const item_image_3 = require("../../../assets/images/product/meat-fish.png");

const CategorytItem = ({ image, name, backgroundColor, borderColor }) => (
  <View
    style={[
      styles.itemContainer,
      {
        backgroundColor: backgroundColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: borderColor,
      },
    ]}
  >
    <View>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemName} numberOfLines={2}>
        {name}
      </Text>
    </View>
  </View>
);

const CategorySectionComponent = ({ cateTitle }) => {
  return (
    <View style={styles.sectionContainer}>
      {/* <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
      <Image source={require('../../../assets/images/banner.jpg')} style={styles.sectionImage} /> */}
      <View style={styles.listItemContainer}>
        {[
          { cateName: "Frash Fruits & Vegetable",image: item_image_1, backgroundColor: "rgba(83, 177, 117, 0.1);", borderColor: "#53B175" },
          { cateName: "Dairy & Eggs",image: item_image_2, backgroundColor: "rgba(248, 164, 76, 0.1);",borderColor: "#F8A44C"  },
        ].map((e, index) => (
          <View key={index.toString()}>
            <CategorytItem
              name={e.cateName}
              image={e.image}
              backgroundColor={e.backgroundColor}
              borderColor= {e.borderColor}
            />
          </View>
        ))}
      </View>

      {/* <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM 636 SẢN PHẨM </Text>
      </View> */}
    </View>
  );
};

export default CategorySectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingBottom: 5,
  },

  //
  cateContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  //
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  itemContainer: {
    width: 160,
    height: 190,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },

  itemImage: {
    width: 112,
    height: 75,
    resizeMode: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
    textAlign: "center",
    paddingTop: 10,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
