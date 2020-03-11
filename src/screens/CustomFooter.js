import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import { withNavigation } from "react-navigation";
import styles from "../global/AppStyles";

class CustomFooter extends Component {
  render() {
    let { isActive } = this.props;
    return (
      <Footer>
        <FooterTab style={styles.footerContainer}>
          {isActive == "Home" ? (
            <Button
              vertical
              active
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon type="MaterialIcons" name="home" />
              <Text>Home</Text>
            </Button>
          ) : (
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon type="MaterialIcons" style={styles.footerIcon} name="home" />
              <Text style={styles.footerText}>Home</Text>
            </Button>
          )}

          {isActive == "About" ? (
            <Button
              vertical
              active
              onPress={() => this.props.navigation.navigate("About")}
            >
              <Icon type="FontAwesome" name="globe" />
              <Text>About</Text>
            </Button>
          ) : (
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("About")}
            >
              <Icon type="FontAwesome" style={styles.footerIcon} name="globe" />
              <Text style={styles.footerText}>About</Text>
            </Button>
          )}

          {isActive == "MyCart" ? (
            <Button
              vertical
              active
              onPress={() => this.props.navigation.navigate("MyCart")}
            >
              <Icon type="MaterialIcons" name="shopping-cart" />
              <Text>Cart</Text>
            </Button>
          ) : (
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("MyCart")}
            >
              <Icon type="MaterialIcons" style={styles.footerIcon} name="shopping-cart" />
              <Text style={styles.footerText}>Cart</Text>
            </Button>
          )}

          {isActive == "Contact" ? (
            <Button
              vertical
              active
              onPress={() => this.props.navigation.navigate("Contact")}
            >
              <Icon type="MaterialIcons" name="apps" />
              <Text>Contact</Text>
            </Button>
          ) : (
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("Contact")}
            >
              <Icon type="MaterialIcons" style={styles.footerIcon} name="apps" />
              <Text style={styles.footerText}>Contact</Text>
            </Button>
          )}
        </FooterTab>
      </Footer>
    );
  }
}
export default withNavigation(CustomFooter);
