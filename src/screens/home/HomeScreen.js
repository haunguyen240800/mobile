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
import ProductItemComponent from "../../components/ProductItem/ProductItem";

const item_image_1 = require("../../../assets/images/banner.jpg");
const item_image_2 = require("../../../assets/images/banner.jpg");
const item_image_3 = require("../../../assets/images/banner.jpg");
const item_image_4 = require("../../../assets/images/banner.jpg");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          <StatusBar barStyle="light-content" />
          <View style={styles.headerContainer}>
            <View style={styles.inputContainer}>
              <MaterialIcons
                name="search"
                size={26}
                color={"#181B19"}
              ></MaterialIcons>
              <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
            </View>
          </View>
          
          <View style={styles.bodyContainer}>
            <ScrollView>
              
              <View style={styles.contentBox}>
                <View>
                  <ProductItemComponent
                    style={styles.product}
                    name="Thịt lớn"
                    price="100"
                    image="item_image_1"
                  ></ProductItemComponent>
                </View>

                <View>
                  <ProductItemComponent
                    style={styles.product}
                    name="Thịt lớn"
                    price="100"
                    image="item_image_1"
                  ></ProductItemComponent>
                </View>

              </View>
              
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screenContainer: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 4,
  },
  inputContainer: {
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    // borderWidth: 1,
  },
  inputText: {
    color: "#969696",
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "500",
  },
  banner: {
    
    marginTop: 10,
  },
  imageBanner: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentBox: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: '#000'
  },
  product: {
    width: "60%",
  },
});
