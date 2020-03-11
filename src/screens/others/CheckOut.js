import React, { Component } from "react";
import { View } from "react-native";
import { Text, Button } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";

export default class CheckOut extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="CheckOut"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Checkout Screen</Text>
          <Button onPress={() => this.props.navigation.navigate("ThankYou")}>
            <Text>Place Order</Text>
          </Button>
        </View>
        <CustomFooter />
      </View>
    );
  }
}
