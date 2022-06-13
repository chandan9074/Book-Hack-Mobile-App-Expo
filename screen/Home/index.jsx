import React from "react";
import { Button, Provider, Toast, Carousel } from "@ant-design/react-native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Img from "../../constants/Images";

const Home = () => {
  const onHorizontalSelectedIndexChange = (index) => {
    /* tslint:disable: no-console */
    // console.log("horizontal change to", index);
    // this.setState({ selectedIndex: index })
  };

  const renderHeader = () => {
    return (
      <View style={{ paddingTop: 50 }}>
        <Carousel
          style={styles.wrapper}
          // selectedIndex={this.state.selectedIndex}
          dots={false}
          autoplayInterval={5000}
          autoplay
          infinite
          afterChange={onHorizontalSelectedIndexChange}
          // ref={(ref) => (this.carousel = ref)}
        >
          <View style={[styles.containerHorizontal]}>
            <Image
              source={Img.coverImg1}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: 300,
                top: 0,
                backgroundColor: "black",
                opacity: 0.4,
              }}
            />
          </View>
          <View style={[styles.containerHorizontal]}>
            <Image
              source={Img.coverImg2}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: 300,
                top: 0,
                backgroundColor: "black",
                opacity: 0.4,
              }}
            />
          </View>
          <View style={[styles.containerHorizontal]}>
            <Image
              source={Img.coverImg3}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: 300,
                top: 0,
                backgroundColor: "black",
                opacity: 0.4,
              }}
            />
          </View>
          <View style={[styles.containerHorizontal]}>
            <Image
              source={Img.coverImg4}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: 300,
                top: 0,
                backgroundColor: "black",
                opacity: 0.4,
              }}
            />
          </View>
        </Carousel>
        <View
          style={{
            width: "100%",
            position: "absolute",
            top: 100,
            alignItems: "center",
            // left: "auto",
            // right: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "white",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather name="search" size={17} color="white" />
              <TextInput
                placeholder="Search your book..."
                placeholderTextColor="white"
                style={{
                  color: "white",
                  marginLeft: 7,
                  fontWeight: "700",
                }}
              />
            </View>
            <FontAwesome name="microphone" size={17} color="white" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>
              B
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                // lineHeight: 20,
                marginTop: 2,
              }}
            >
              OOKHAC
            </Text>
            <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>
              K
            </Text>
          </View>
          <Text
            style={{
              color: "#f7e7dc",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            GET YOUR DREAM BOOK HERE
          </Text>
          <View
            style={{
              height: 5,
              width: 50,
              backgroundColor: "#e87425",
              borderRadius: 25,
              marginTop: 10,
            }}
          />
        </View>
      </View>
    );
  };

  return <SafeAreaView>{renderHeader()}</SafeAreaView>;
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: 300,
  },
  containerHorizontal: {
    flexGrow: 1,
    // alignItems: "center",
    // justifyContent: "center",
    position: "relative",
    height: 150,
  },
  text: {
    color: "#fff",
    fontSize: 36,
  },
});
