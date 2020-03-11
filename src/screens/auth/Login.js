import React, { Component } from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Button, Text } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import styles from "../../global/AppStyles";

export default class Login extends Component {
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
                <Text style={styles.afterHomeLogoText}>Login Screen</Text>

                <Button style={styles.homeLoginBtn} onPress={() => this.props.navigation.navigate("app")}>
                  <Text>Let's Login</Text>
                </Button>
              </View>
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}
