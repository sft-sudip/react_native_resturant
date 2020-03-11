import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";

export default class ThankYou extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="Thank You"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Thank You Screen</Text>
        </View>
        <CustomFooter />
      </View>
    );
  }
}
