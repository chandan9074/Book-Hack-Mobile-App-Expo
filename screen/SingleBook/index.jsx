import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";

const SingleBook = ({ route, navigation }) => {
  const { item, bookList } = route.params;
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
            More Book
          </Text>
        </View>
        <TouchableOpacity
        // onPress={}
        >
          <Ionicons name="cart-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBookInfo = () => {
    return (
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Read Your Favorite One
        </Text>
        <Text
          style={{ color: "#6e6c6a", marginVertical: 10, textAlign: "justify" }}
        >
          Reading is a valuable skill for acquiring knowledge.While engaged
          readers, young and old, are often aware of the knowledge they gain by
          reading a text.
        </Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View
            style={{
              width: "50%",
              height: 250,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={{ marginLeft: 15, width: "45%" }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>{item.name}</Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                color: "#6e6c6a",
                fontStyle: "italic",
                marginTop: 3,
              }}
            >
              By {item.authorName}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <StarRating
                rating={item.rating}
                maxStars={5}
                starSize={18}
                starStyle={{ marginRight: 0, marginLeft: 0, marginTop: 2 }}
              />
              <Text style={{ marginBottom: 5 }}>({item.rating})</Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 3,
                color: "#7ea6a4",
              }}
            >
              ${item.price.toFixed(2)}
            </Text>
            <TouchableOpacity
              style={{
                // width: "100%",
                backgroundColor: "#ed8037",
                paddingVertical: 8,
                borderRadius: 10,
                marginTop: 20,
              }}
              onPress={() => navigation.navigate("BookDetails", { item })}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Details
              </Text>
            </TouchableOpacity>
          </View>
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
          marginTop: 15,
        }}
      >
        <Text style={styles.contentHeading}>More Books</Text>
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
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <ScrollView>
        {renderHeader()}
        {renderBookInfo()}
        {renderBooks()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleBook;

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
