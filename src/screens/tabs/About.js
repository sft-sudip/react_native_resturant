import React, { Component } from "react";
import { View, Image } from "react-native";
import { Container, Content, Text } from "native-base";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";
import styles from "../../global/AppStyles";

export default class About extends Component {
  render() {
    return (
      <Container>
        <CustomHeader
          title="About"
          isHome={true}
          navigation={this.props.navigation}
        />
        <Content>
          <View>
            <Image
              style={{ height: 200, width: "100%" }}
              source={require("../../../assets/images/banner/banner2.png")}
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
                  About
                </Text>
                <Text style={{ fontSize: 20 }}> Us</Text>
              </View>
              <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                <Text style={{ color: "#808080", fontSize: 14, textAlign:"justify" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                  {"\n\n"}It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.It is a long established
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout.
                  {"\n\n"}The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy.
                </Text>
              </View>
            </View>
          </View>
        </Content>
        <CustomFooter isActive="About" />
      </Container>
    );
  }
}
