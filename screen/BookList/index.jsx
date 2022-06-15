import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import BottomNavigation from "../../components/BottomNavigation";

const BookList = ({ route, navigation }) => {
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
            Detail list
          </Text>
        </View>
        <TouchableOpacity
        // onPress={}
        >
          <Fontisto name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBookList = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.bookContainer}>
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
        style={{ paddingHorizontal: 15, paddingTop: 15, paddingBottom: 100 }}
      >
        <FlatList
          data={bookList}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Top 10 {item.name} Book
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: "#61605f",
                  marginTop: 7,
                  fontStyle: "italic",
                  // textAlign: "justify",
                }}
              >
                {item.des}
              </Text>
            </>
          )}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 15 }}
          numColumns={2}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ paddingTop: 50 }}>
      {/* <ScrollView style={{}}> */}
      {renderHeader()}
      {renderBookList()}
      {}
      {/* {renderPopularList()}
        {renderAuthor()}
        {renderBooks()} */}
      {/* <BottomNavigation /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default BookList;

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
    width: "47%",
    borderRadius: 20,
    // height: 120,
    marginRight: 15,
    position: "relative",
    marginTop: 15,
    marginRight: 15,
  },
  bookImage: {
    width: "100%",
    height: 250,
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
