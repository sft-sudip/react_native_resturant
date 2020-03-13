import React, { Component } from "react";
import { View } from "react-native";
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
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";
import styles from "../../global/AppStyles";

export default class CheckOut extends Component {
  render() {
    return (
      <Container>
        <CustomHeader
          title="CheckOut"
          isHome={true}
          navigation={this.props.navigation}
        />
        <Content>
          <View style={styles.checkoutView}>
            <Text style={{ fontWeight: "bold" }}>
              Delivery Address Details :
            </Text>
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <Form>
                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="FontAwesome" name="user" />
                  <Input placeholder="Enter First Name" />
                </Item>

                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="FontAwesome" name="user" />
                  <Input placeholder="Enter Last Name" />
                </Item>

                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="MaterialIcons" name="phone" />
                  <Input placeholder="Enter Phone No" />
                </Item>

                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="MaterialIcons" name="email" />
                  <Input placeholder="Enter Email ID" />
                </Item>

                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="MaterialIcons" name="email" />
                  <Input placeholder="Enter House/Flat No" />
                </Item>

                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="MaterialIcons" name="email" />
                  <Input placeholder="Enter Locality/Area" />
                </Item>

                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="MaterialIcons" name="email" />
                  <Input placeholder="Enter Address" />
                </Item>

                <Item
                  success
                  regular
                  style={{ marginBottom: 15, borderRadius: 10, height: 40 }}
                >
                  <Icon type="MaterialIcons" name="email" />
                  <Input placeholder="Enter Postal Code" />
                </Item>

                <Button
                  style={styles.loginScreenBtn}
                  onPress={() => this.props.navigation.navigate("ThankYou")}
                >
                  <Text>Place Order</Text>
                </Button>
              </Form>
            </View>
          </View>
        </Content>
        <CustomFooter />
      </Container>
    );
  }
}
