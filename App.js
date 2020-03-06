import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ActivityIndicator
} from "react-native";
import { Container, Button, Text } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <Container>
        <ImageBackground
          source={require("./assets/images/background.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Grid>
            <Row style={styles.container}>
              <Image
                style={styles.homeLogo}
                source={require("./assets/images/logo.png")}
              />
              <View style={styles.afterHomeLogo}>
                <Text style={styles.afterHomeLogoText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Text>

                <Button style={styles.homeLoginBtn}>
                  <Text>Login</Text>
                </Button>
                <Button style={styles.homeRegisterBtn}>
                  <Text style={styles.homeRegisterBtnText}>Register</Text>
                </Button>
              </View>
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  homeLogo: {
    width: 200,
    height: 200
  },
  afterHomeLogo: {
    padding: 30
  },
  afterHomeLogoText: {
    textAlign: "center",
    fontSize: 15
  },
  homeLoginBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#74be1f",
    borderWidth: 2,
    borderColor: "#74be1f"
  },
  homeRegisterBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#74be1f"
  },
  homeRegisterBtnText: {
    color: "#74be1f"
  }
});
