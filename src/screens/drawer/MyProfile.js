import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";

export default class MyProfile extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="My Profile"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Profile Screen</Text>
        </View>
        <CustomFooter />
      </View>
    );
  }
}