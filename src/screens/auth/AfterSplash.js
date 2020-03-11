import React, { Component } from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Button, Text } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import styles from "../../global/AppStyles";

export default class AfterSplash extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/images/background.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Grid>
            <Row style={styles.container}>
              <Image
                style={styles.homeLogo}
                source={require("../../../assets/images/logo.png")}
              />
              <View style={styles.afterHomeLogo}>
                <Text style={styles.afterHomeLogoText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </Text>

                <Button
                  style={styles.homeLoginBtn}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text>Login</Text>
                </Button>
                <Button
                  style={styles.homeRegisterBtn}
                  onPress={() => this.props.navigation.navigate("Register")}
                >
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
