import React, { Component } from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Button, Text } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import styles from "../../global/AppStyles";

export default class Register extends Component {
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
                <Text style={styles.afterHomeLogoText}>Register Screen</Text>
              </View>
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}
