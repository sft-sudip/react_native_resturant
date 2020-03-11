import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { StyleProvider } from "native-base";
import * as Font from "expo-font";
import styles from "./src/global/AppStyles";
import AppContainer from "./src/Routes";

import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <StyleProvider style={getTheme(material)}>
          <AppContainer />
        </StyleProvider>
      );
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
