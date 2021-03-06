import React, { Component } from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Form, Item, Input, Button, Icon, Text } from "native-base";
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
                <Form>
                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="MaterialIcons" name="email" />
                    <Input placeholderTextColor="#A9A9A9" placeholder="Enter Email" />
                  </Item>

                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="MaterialIcons" name="security" />
                    <Input placeholderTextColor="#A9A9A9" placeholder="Enter Password" />
                  </Item>

                  <Button
                    style={styles.loginScreenBtn}
                    onPress={() => this.props.navigation.navigate("app")}
                  >
                    <Text>Login</Text>
                  </Button>
                </Form>
                <Button
                  transparent
                  style={styles.loginForgotBtn}
                  onPress={() => this.props.navigation.navigate("ForgotPassword")}
                >
                  <Text style={styles.loginForgotBtnText}>Forget Password</Text>
                </Button>
              </View>
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}
