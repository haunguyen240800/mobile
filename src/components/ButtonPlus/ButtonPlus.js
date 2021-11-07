import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, Button, Alert } from "react-native";

const {width} = Dimensions.get('window');

const ButtonPlusComponent = ({width, height, icon}) => (
  <View style={styles.container}>
    <View style={styles.itemContainer}>
      
    </View>
  </View>
);

export default ButtonPlusComponent;

const styles = StyleSheet.create({

  container: {
   
  },
  itemContainer: {
   
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
