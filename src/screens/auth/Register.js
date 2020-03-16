import React, { Component } from "react";
import { View, ImageBackground, Image } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Icon,
  Text
} from "native-base";
import styles from "../../global/AppStyles";

export default class Register extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/images/background.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Content>
            <View style={styles.registerContainer}>
              <Image
                style={styles.homeLogo}
                source={require("../../../assets/images/logo.png")}
              />
              <View style={styles.afterHomeLogo}>
                <Form>
                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="FontAwesome" name="user" />
                    <Input
                      placeholderTextColor="#A9A9A9"
                      placeholder="Enter First Name"
                    />
                  </Item>

                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="FontAwesome" name="user" />
                    <Input
                      placeholderTextColor="#A9A9A9"
                      placeholder="Enter Last Name"
                    />
                  </Item>

                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="MaterialIcons" name="phone" />
                    <Input
                      placeholderTextColor="#A9A9A9"
                      placeholder="Enter Phone No"
                    />
                    <Button style={styles.registerVerifyBtn}>
                      <Text>Verify</Text>
                    </Button>
                  </Item>

                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="MaterialCommunityIcons" name="onepassword" />
                    <Input
                      placeholderTextColor="#A9A9A9"
                      placeholder="Enter OTP"
                    />
                  </Item>

                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="MaterialIcons" name="email" />
                    <Input
                      placeholderTextColor="#A9A9A9"
                      placeholder="Enter Email ID"
                    />
                  </Item>

                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="MaterialIcons" name="security" />
                    <Input
                      placeholderTextColor="#A9A9A9"
                      placeholder="Enter Password"
                    />
                  </Item>

                  <Item success regular style={styles.loginScreenInput}>
                    <Icon type="MaterialIcons" name="security" />
                    <Input
                      placeholderTextColor="#A9A9A9"
                      placeholder="Enter Confirm Password"
                    />
                  </Item>

                  <Button
                    style={styles.loginScreenBtn}
                    onPress={() => this.props.navigation.navigate("app")}
                  >
                    <Text>Register</Text>
                  </Button>
                </Form>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
