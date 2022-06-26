import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native-web";

const Author = ({ route, navigation }) => {
  const { bookList, item } = route.params;

  const renderHeader = () => {
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            paddingVertical: 10,
            width: "50%",
            borderRadius: 20,
            backgroundColor: "#fce2d7",
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "600", textAlign: "center" }}
          >
            Author
          </Text>
        </View>
        <TouchableOpacity
        // onPress={}
        >
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderAuthorInfo = () => {
    return (
      <View
        style={{
          alignItems: "center",
          width: "100%",
          marginTop: 40,
        }}
      >
        <View
          style={{
            shadowColor: "black",
            shadowOffset: {
              //   width: 10,
              //   height: 10,
            },
            shadowOpacity: 1,
            // shadowRadius: 10,
            elevation: 10,
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: "#d4d1cf",
          }}
        >
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,

              // overflow: "visible",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {item.firstName} {item.lastName}
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "700",
            color: "#abaaa9",
            textTransform: "uppercase",
            letterSpacing: 2.5,
            marginTop: 5,
          }}
        >
          {item.address}
        </Text>
        <View
          style={{
            width: "60%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
            marginBottom: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#807f7e", fontWeight: "700" }}>
              Following
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              {item.following}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 11, color: "#807f7e", fontWeight: "700" }}>
              Follower
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              {item.followers}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderGenres = () => {
    return (
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Working Genres</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 15 }}>
          {item.genres.map((item) => (
            <LinearGradient
              key={item.id}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#283048", "#859398"]}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 12, color: "white", fontWeight: "600" }}>
                {item}
              </Text>
            </LinearGradient>
          ))}
        </View>
      </View>
    );
  };

  const renderBooks = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.bookContainer}
        onPress={() => navigation.navigate("SingleBook", { item, bookList })}
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
        <Text style={styles.contentHeading}>Purchase Books</Text>
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
    <SafeAreaView style={{ paddingTop: 50 }}>
      <ScrollView>
        {renderHeader()}
        {renderAuthorInfo()}
        {renderGenres()}
        {renderBooks()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Author;

const styles = StyleSheet.create({
  contentHeading: {
    fontSize: 16,
    fontWeight: "700",
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
});
