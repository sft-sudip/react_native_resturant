import React, { Component } from "react";
import { View } from "react-native";
import { Text, Button } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";

export default class MyCart extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="My Cart"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Cart Screen</Text>
          <Button onPress={() => this.props.navigation.navigate("CheckOut")}>
            <Text>Go To Checkout</Text>
          </Button>
        </View>
        <CustomFooter isActive="MyCart" />
      </View>
    );
  }
}
