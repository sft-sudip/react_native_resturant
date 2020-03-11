import React, { Component } from "react";
import { Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import Constants from "expo-constants";

import AfterSplash from "./screens/auth/AfterSplash";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import ForgotPassword from "./screens/auth/ForgotPassword";

import Home from "./screens/tabs/Home";
import About from "./screens/tabs/About";
import MyCart from "./screens/tabs/MyCart";
import Contact from "./screens/tabs/Contact";

import SideMenu from "./screens/SideMenu";

import MyAddress from "./screens/drawer/MyAddress";
import MyOrders from "./screens/drawer/MyOrders";
import MyPassword from "./screens/drawer/MyPassword";
import MyProfile from "./screens/drawer/MyProfile";

import CheckOut from "./screens/others/CheckOut";
import ThankYou from "./screens/others/ThankYou";

const authNavOptionHandler = navigation => ({
  header: null
});

const navOptionHandler = navigation => ({
  headerStyle: {
    backgroundColor: "#74be1f",
    height: Constants.statusBarHeight
  },
  headerTitle: null,
  headerLeft: null,
  headerRight: null
});

const authStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: authNavOptionHandler
    },
    Register: {
      screen: Register,
      navigationOptions: authNavOptionHandler
    },
    AfterSplash: {
      screen: AfterSplash,
      navigationOptions: authNavOptionHandler
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: authNavOptionHandler
    },
  },
  { initialRouteName: "AfterSplash" }
);

const MainStack = createStackNavigator(
  {
    MyAddress: {
      screen: MyAddress,
      navigationOptions: navOptionHandler
    },
    MyOrders: {
      screen: MyOrders,
      navigationOptions: navOptionHandler
    },
    MyPassword: {
      screen: MyPassword,
      navigationOptions: navOptionHandler
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: navOptionHandler
    },
    Home: {
      screen: Home,
      navigationOptions: navOptionHandler
    },
    About: {
      screen: About,
      navigationOptions: navOptionHandler
    },
    MyCart: {
      screen: MyCart,
      navigationOptions: navOptionHandler
    },
    Contact: {
      screen: Contact,
      navigationOptions: navOptionHandler
    },
    CheckOut: {
      screen: CheckOut,
      navigationOptions: navOptionHandler
    },
    ThankYou: {
      screen: ThankYou,
      navigationOptions: navOptionHandler
    },
  },
  { initialRouteName: "Home" }
);

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  },
  {
    contentComponent: SideMenu,
    drawerWidth: (Dimensions.get("window").width * 3) / 4
  }
);

const MainApp = createSwitchNavigator(
  {
    app: appDrawer,
    auth: authStack
  },
  {
    initialRouteName: "auth"
  }
);

const AppContainer = createAppContainer(MainApp);

export default AppContainer;
