import React, { Component } from "react";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Badge
} from "native-base";
import styles from "../global/AppStyles";

export default class CustomHeader extends Component {
  render() {
    let { title, isHome } = this.props;
    return (
      <Header style={styles.headerContainer}>
        <Left>
          {isHome ? (
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon type="MaterialIcons" name="menu" />
            </Button>
          ) : (
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon type="MaterialIcons" name="arrow-back" />
            </Button>
          )}
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Button
            transparent
            vertical
            onPress={() => this.props.navigation.navigate("MyCart")}
          >
            <Badge success>
              <Text>2</Text>
            </Badge>
            <Icon type="MaterialIcons" name="shopping-cart" />
          </Button>
        </Right>
      </Header>
    );
  }
}
