import React from "react";
import "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";

const Tab = createMaterialBottomTabNavigator();

export default class TabButton extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#53B175"
        inactiveColor="#030303"
        barStyle={{
          backgroundColor: "#fff",
          // height: 70,
          shadowColor: "#000",
          fontSize: 30,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16,
          elevation: 24,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderWidth: 1,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Cửa hàng",
            tabBarStyle: {
              // paddingBottom: 15,
              paddingTop: 25,
            },
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="store"
                size={26}
                color={color}
              ></MaterialIcons>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Tìm kiếm",
            // tabBarStyle: {

            // },
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="search"
                size={30}
                color={color}
              ></MaterialIcons>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Giỏi hàng"
          component={HomeScreen}
          options={{
            tabBarLabel: "Giỏ hàng",
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="shopping-cart"
                size={26}
                color={color}
              ></MaterialIcons>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="yêu thích"
          component={HomeScreen}
          options={{
            tabBarLabel: "Yêu thích",
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="favorite-outline"
                size={26}
                color={color}
              ></MaterialIcons>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Tài khoản"
          component={HomeScreen}
          options={{
            tabBarLabel: "Tài khoản",
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="account-box"
                size={26}
                color={color}
              ></MaterialIcons>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }
}
