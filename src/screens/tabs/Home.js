import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Text } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";
import styles from "../../global/AppStyles";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <CustomHeader
          title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />
        <Content>
          
        </Content>
        <CustomFooter isActive="Home" />
      </Container>
    );
  }
}
