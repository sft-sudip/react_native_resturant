import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";

export default class MyAddress extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="My Address"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Address Screen</Text>
        </View>
        <CustomFooter />
      </View>
    );
  }
}