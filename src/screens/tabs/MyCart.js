import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Item,
} from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";
import styles from "../../global/AppStyles";

export default class MyCart extends Component {
  render() {
    return (
      <Container>
        <CustomHeader
          title="My Cart"
          isHome={true}
          navigation={this.props.navigation}
        />
        <Content>
          <View style={styles.cartView}>
            <List>
              <ListItem noBorder thumbnail style={styles.cartListItem}>
                <Left>
                  <Thumbnail
                    square
                    source={require("../../../assets/images/items/omelette.jpg")}
                  />
                </Left>
                <Body>
                  <Text style={styles.cartItemText}>Omelette</Text>
                  <Item style={styles.cartItemBtn}>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>-</Text>
                    </Button>
                    <Button style={styles.cartNumberBtn}>
                      <Text style={styles.cartActionBtnText}>5</Text>
                    </Button>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>+</Text>
                    </Button>
                  </Item>
                </Body>
                <Right>
                  <Text style={styles.cartAmountText}>240.00</Text>
                </Right>
              </ListItem>

              <ListItem noBorder thumbnail style={styles.cartListItem}>
                <Left>
                  <Thumbnail
                    square
                    source={require("../../../assets/images/items/fruitPizza.jpg")}
                  />
                </Left>
                <Body>
                  <Text style={styles.cartItemText}>Fruit Pizza</Text>
                  <Item style={styles.cartItemBtn}>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>-</Text>
                    </Button>
                    <Button style={styles.cartNumberBtn}>
                      <Text style={styles.cartActionBtnText}>3</Text>
                    </Button>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>+</Text>
                    </Button>
                  </Item>
                </Body>
                <Right>
                  <Text style={styles.cartAmountText}>210.00</Text>
                </Right>
              </ListItem>

              <ListItem noBorder thumbnail style={styles.cartListItem}>
                <Left>
                  <Thumbnail
                    square
                    source={require("../../../assets/images/items/omelette.jpg")}
                  />
                </Left>
                <Body>
                  <Text style={styles.cartItemText}>Cornmeal Mush</Text>
                  <Item style={styles.cartItemBtn}>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>-</Text>
                    </Button>
                    <Button style={styles.cartNumberBtn}>
                      <Text style={styles.cartActionBtnText}>4</Text>
                    </Button>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>+</Text>
                    </Button>
                  </Item>
                </Body>
                <Right>
                  <Text style={styles.cartAmountText}>300.00</Text>
                </Right>
              </ListItem>

              <ListItem noBorder thumbnail style={styles.cartListItem}>
                <Left>
                  <Thumbnail
                    square
                    source={require("../../../assets/images/items/fruitPizza.jpg")}
                  />
                </Left>
                <Body>
                  <Text style={styles.cartItemText}>Fruit Pizza</Text>
                  <Item style={styles.cartItemBtn}>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>-</Text>
                    </Button>
                    <Button style={styles.cartNumberBtn}>
                      <Text style={styles.cartActionBtnText}>2</Text>
                    </Button>
                    <Button style={styles.cartActionBtn}>
                      <Text style={styles.cartActionBtnText}>+</Text>
                    </Button>
                  </Item>
                </Body>
                <Right>
                  <Text style={styles.cartAmountText}>120.00</Text>
                </Right>
              </ListItem>
            </List>
            <View>
              <List>
                <ListItem noBorder>
                  <Left>
                    <Text style={styles.cartTotalText}>Item Total</Text>
                  </Left>
                  <Right>
                    <Text style={styles.cartAmountText}>870.00</Text>
                  </Right>
                </ListItem>

                <ListItem>
                  <Left>
                    <Text style={styles.cartTotalText}>Delivery Charges</Text>
                  </Left>
                  <Right>
                    <Text style={styles.cartAmountText}>50.00</Text>
                  </Right>
                </ListItem>

                <ListItem noBorder>
                  <Left>
                    <Text style={styles.cartNetTotalText}>Total</Text>
                  </Left>
                  <Right>
                    <Text style={styles.cartTotalAmountText}>920.00</Text>
                  </Right>
                </ListItem>
                <ListItem noBorder>
                  <Body>
                    <Button
                      style={styles.loginScreenBtn}
                      onPress={() => this.props.navigation.navigate("CheckOut")}
                    >
                      <Text>Proceed To Checkout</Text>
                    </Button>
                  </Body>
                </ListItem>
              </List>
            </View>
          </View>
        </Content>
        <CustomFooter isActive="MyCart" />
      </Container>
    );
  }
}
