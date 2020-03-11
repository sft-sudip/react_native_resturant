import React, { Component } from "react";
import { View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Text, List, ListItem, Icon, Thumbnail, Left, Body } from "native-base";
import styles from "../global/AppStyles";

export default class SideMenu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeDrawerContainer}>
        <View style={styles.drawerProfile}>
          <List>
            <ListItem noBorder thumbnail>
              <Left>
                <Thumbnail
                  source={require("../../assets/images/account.png")}
                />
              </Left>
              <Body>
                <Text style={styles.drawerProfileText}>Sudip Kumar Paul</Text>
              </Body>
            </ListItem>
          </List>
        </View>

        <ScrollView>
          <List>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("MyProfile")}
            >
              <Left>
                <Icon
                  type="MaterialIcons"
                  style={styles.footerIcon}
                  name="face"
                />
              </Left>
              <Body>
                <Text>Profile</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("MyPassword")}
            >
              <Left>
                <Icon
                  type="MaterialIcons"
                  style={styles.footerIcon}
                  name="settings"
                />
              </Left>
              <Body>
                <Text>Change Password</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("MyOrders")}
            >
              <Left>
                <Icon
                  type="MaterialIcons"
                  style={styles.footerIcon}
                  name="store"
                />
              </Left>
              <Body>
                <Text>My Orders</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              onPress={() => this.props.navigation.navigate("MyAddress")}
            >
              <Left>
                <Icon
                  type="MaterialIcons"
                  style={styles.footerIcon}
                  name="my-location"
                />
              </Left>
              <Body>
                <Text>My Address</Text>
              </Body>
            </ListItem>
          </List>
        </ScrollView>

        <List>
          <ListItem
            icon
            noBorder
            onPress={() => this.props.navigation.navigate("auth")}
          >
            <Left>
              <Icon
                type="MaterialCommunityIcons"
                style={styles.footerIcon}
                name="logout"
              />
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
          </ListItem>
        </List>
      </SafeAreaView>
    );
  }
}
