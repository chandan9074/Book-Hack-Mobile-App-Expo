import React from "react";
import { Button, Provider, Toast, Carousel } from "@ant-design/react-native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
// import { useTailwind } from "tailwind-rn";
// import { TailwindProvider } from "tailwind-rn";
// import utilities from "./tailwind.json";
// import tailwind from "tailwind-rn";

import { popularList, authorList, bookList } from "../../utils/data";
import Img from "../../constants/Images";

const Home = ({ navigation }) => {
  // const tailwind = useTailwind();

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

  const renderPopularList = () => {
    // console.log("hello", popularList);
    const renderItem = ({ item }) => {
      // console.log("hello", item);
      return (
        <TouchableOpacity
          style={styles.popularListContentContainer}
          onPress={() => navigation.navigate("BookList", { bookList, item })}
        >
          <Image
            source={item.bgImg}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          ></Image>
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: 120,
              borderRadius: 10,
              top: 0,
              backgroundColor: "black",
              opacity: 0.2,
            }}
          />
          <View style={{ position: "absolute", top: 30, left: 10 }}>
            <Text style={styles.popuListContent1}>Top 10 List</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 3,
                  width: 35,
                  backgroundColor: "white",
                  borderRadius: 25,
                  marginTop: 5,
                }}
              />
              <View
                style={{
                  height: 3,
                  width: 10,
                  backgroundColor: "#e87425",
                  borderRadius: 25,
                  marginTop: 5,
                  marginLeft: 3,
                }}
              />
              <View
                style={{
                  height: 3,
                  width: 15,
                  backgroundColor: "white",
                  borderRadius: 25,
                  marginTop: 5,
                  marginLeft: 3,
                }}
              />
            </View>
            <Text style={styles.popuListContent2}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{
          paddingTop: 15,
          paddingLeft: 15,
        }}
      >
        <Text style={styles.contentHeading}>Popular List</Text>
        <FlatList
          data={popularList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  };

  const renderAuthor = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginRight: 15, alignItems: "center" }}
        onPress={() => navigation.navigate("Author", { bookList, item })}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{ width: 40, height: 40, borderRadius: 100 }}
        />
        <Text style={{ marginTop: 7, fontSize: 12, fontWeight: "700" }}>
          {item.firstName + " " + item.lastName}
        </Text>
      </TouchableOpacity>
    );

    return (
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.contentHeading}>Most Popular Authors</Text>
        <FlatList
          data={authorList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  };

  const renderBooks = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.bookContainer}
        onPress={() => navigation.navigate("BookDetails", { item })}
      >
        <View
          style={{
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 5,
          }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={styles.bookImage}
          />
        </View>
        <Text
          style={{
            marginTop: 7,
            fontSize: 13,
            fontWeight: "600",
            fontStyle: "italic",
            color: "gray",
          }}
        >
          By {item.authorName}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>{item.name}</Text>
      </TouchableOpacity>
    );
    return (
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.contentHeading}>Tranding Books</Text>
        <FlatList
          data={bookList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ marginBottom: 70 }}>
        {renderHeader()}
        {renderPopularList()}
        {renderAuthor()}
        {renderBooks()}
      </ScrollView>
    </SafeAreaView>
  );
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
  contentHeading: {
    fontSize: 16,
    fontWeight: "700",
  },
  popularListContentContainer: {
    width: 200,
    borderRadius: 20,
    height: 120,
    marginRight: 15,
    position: "relative",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,

    // backgroundColor: "red",
  },
  bookContainer: {
    width: 200,
    borderRadius: 20,
    // height: 120,
    marginRight: 15,
    position: "relative",

    marginRight: 15,
  },
  bookImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  popuListContent1: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  popuListContent2: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
