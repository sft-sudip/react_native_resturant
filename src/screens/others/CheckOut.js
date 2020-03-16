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
  Text,
  List,
  ListItem,
  Left,
  Right
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
            <Text style={styles.checkOutViewTitle}>
              Delivery Address Details :
            </Text>
            <View style={styles.checkoutFormView}>
              <Form>
                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="FontAwesome" name="user" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter First Name"
                  />
                </Item>

                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="FontAwesome" name="user" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter Last Name"
                  />
                </Item>

                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="MaterialIcons" name="phone" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter Phone No"
                  />
                </Item>

                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="MaterialIcons" name="email" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter Email ID"
                  />
                </Item>

                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="FontAwesome" name="home" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter House/Flat No"
                  />
                </Item>

                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="FontAwesome" name="home" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter Locality/Area"
                  />
                </Item>

                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="Entypo" name="address" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter Address"
                  />
                </Item>

                <Item success regular style={styles.checkOutFormItem}>
                  <Icon type="MaterialIcons" name="local-shipping" />
                  <Input
                    placeholderTextColor="#A9A9A9"
                    placeholder="Enter Postal Code"
                  />
                </Item>

                <View style={styles.checkOutTotalView}>
                  <List>
                    <ListItem noBorder>
                      <Left>
                        <Text style={styles.cartNetTotalText}>Order Total</Text>
                      </Left>
                      <Right>
                        <Text style={styles.cartTotalAmountText}>920.00</Text>
                      </Right>
                    </ListItem>
                  </List>
                </View>

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
