import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const item_image_1 = require("../../../assets/images/product/apple.png");
const item_image_2 = require("../../../assets/images/product/banana.png");
const item_image_3 = require("../../../assets/images/product/bell-pepper.png");
const item_image_4 = require("../../../assets/images/product/bakery.png");

const ProductItem = ({ image, name, price, event }) => (
  (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemName} numberOfLines={2}>
        {name}
      </Text>
      <View style={styles.row}>
        <Text style={styles.itemPrice}>{price}</Text>
        <Button
          buttonStyle={styles.btnAdd}
          icon={<Icon name="plus" size={10} color="white" />}
        />
      </View>
    </View>
  )
);

export default class HomeSectionComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToHome = () => {
    navigation.navigate("HomeTabs");
  };

  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.cateContainer}>
          <Text style={styles.cateName}>{this.props.cateName}</Text>
          <TouchableHighlight
            underlayColor="#000"
            style={{ alignItems: "center" }}
            onPress={this.props.event}
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableHighlight>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.listItemContainer}>
            {[
              { image1: item_image_1, image2: item_image_2 },
              { image1: item_image_2, image2: item_image_3 },
              { image1: item_image_3, image2: item_image_1 },
              { image1: item_image_4, image2: item_image_2 },
            ].map((e, index) => (
              <View key={index.toString()}>
                <TouchableHighlight
                  underlayColor="#fff"
                  style={{ alignItems: "center" }}
                  onPress={this.props.event}
                >
                  <ProductItem
                    name="Bananas"
                    image={e.image1}
                    price="$ 4.9"
                  />
                </TouchableHighlight>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    // paddingTop: 15
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
  cateName: {
    fontSize: 24,
    fontWeight: "bold",
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
    paddingVertical: 5,
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
    resizeMode: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181725",
  },
  btnAdd: {
    width: 25,
    height: 25,
    backgroundColor: "#53B175",
    borderRadius: 5,
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
