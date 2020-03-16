import React, { Component } from "react";
import { View, Image } from "react-native";
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Form,
  Item,
  Input,
} from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";
import styles from "../../global/AppStyles";

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <CustomHeader
          title="Contact"
          isHome={true}
          navigation={this.props.navigation}
        />
        <Content>
          <View>
            <Image
              style={{ height: 200, width: "100%" }}
              source={require("../../../assets/images/banner/map.png")}
            />
            <View style={{ padding: 20 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  borderBottomColor: "#000000",
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    color: "#74be1f",
                    fontSize: 20
                  }}
                >
                  Contact
                </Text>
                <Text style={{ fontSize: 20 }}> Us</Text>
              </View>

              <View>
                <List>
                  <ListItem
                    thumbnail
                    noBorder
                    style={{
                      borderBottomColor: "#dcdcdc",
                      borderBottomWidth: 1
                    }}
                  >
                    <Left>
                      <Icon
                        style={{ color: "#74be1f", fontSize: 20 }}
                        type="FontAwesome"
                        name="home"
                      />
                    </Left>
                    <Body>
                      <Text style={{ fontWeight: "bold" }}>Address</Text>
                      <Text style={{ color: "#808080", fontSize: 14 }}>
                        Shyam Towers, EN - 32, Street Number 8, Kolkata, West
                        Bengal, 700091
                      </Text>
                    </Body>
                  </ListItem>

                  <ListItem
                    thumbnail
                    noBorder
                    style={{
                      borderBottomColor: "#dcdcdc",
                      borderBottomWidth: 1
                    }}
                  >
                    <Left>
                      <Icon
                        style={{ color: "#74be1f", fontSize: 20 }}
                        type="MaterialIcons"
                        name="phone"
                      />
                    </Left>
                    <Body>
                      <Text style={{ fontWeight: "bold" }}>Phone</Text>
                      <Text style={{ color: "#808080", fontSize: 14 }}>
                        Mobile: +91 9876543210
                      </Text>
                      <Text style={{ color: "#808080", fontSize: 14 }}>
                        Fax: +91 1234567890
                      </Text>
                    </Body>
                  </ListItem>

                  <ListItem
                    thumbnail
                    noBorder
                  >
                    <Left>
                      <Icon
                        style={{ color: "#74be1f", fontSize: 20 }}
                        type="MaterialIcons"
                        name="email"
                      />
                    </Left>
                    <Body>
                      <Text style={{ fontWeight: "bold" }}>Email</Text>
                      <Text style={{ color: "#808080", fontSize: 14 }}>
                        demo@gmail.com
                      </Text>
                    </Body>
                  </ListItem>
                </List>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  borderBottomColor: "#000000",
                  borderBottomWidth: 1,
                  marginTop: 20
                }}
              >
                <Text
                  style={{
                    color: "#74be1f",
                    fontSize: 20
                  }}
                >
                  Tell Us
                </Text>
                <Text style={{ fontSize: 20 }}> Your Message</Text>
              </View>

              
            </View>
          </View>
        </Content>
        <CustomFooter isActive="Contact" />
      </Container>
    );
  }
}
