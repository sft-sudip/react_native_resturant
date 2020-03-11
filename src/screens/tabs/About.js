import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="About"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>About Screen</Text>
        </View>
        <CustomFooter isActive="About" />
      </View>
    );
  }
}
