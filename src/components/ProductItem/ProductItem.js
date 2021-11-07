import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, Button, Alert } from "react-native";

const {width} = Dimensions.get('window');

const ProductItemComponent = ({image, name, price}) => (
  <View style={styles.container}>
    <View style={styles.itemContainer}>
      <Image source={require("../../../assets/images/apple.png")} style={styles.itemImage} />
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
      <View style = {styles.box}>
        <Text style={styles.itemPrice}>{price}</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  </View>
);

export default ProductItemComponent;

const styles = StyleSheet.create({

  container: {
    width: '100%'
  },
  itemContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    borderColor: '#e2e2e2',
    borderWidth: 1
  },
  // sectionTitle: {
  //   fontWeight: "700",
  //   fontSize: 16,
  //   color: "#2f2f2f",
  //   marginVertical: 12,
  // },
  // sectionImage: {
  //   padding: 15,
  //   borderColor: '#000',
  //   borderWidth: 1,
  //   borderRadius: 4,
  // },
  //
  
  itemImage: {
    width: 103,
    height: 62,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
    marginTop: 20,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7C7C7C",
  },
  box:{
    flexDirection: "row"
  }
});
