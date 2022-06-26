import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { popularList, authorList, bookList } from "../../utils/data";

const Bookmarks = ({ route, navigation }) => {
  const [bookmarkData, setBookmark] = useState();

  useEffect(() => {
    async function fetchData() {
      const bookmarks = await AsyncStorage.getItem("bookmarks");
      const data = JSON.parse(bookmarks);
      console.log(data);
      const array = [];
      if (data.length > 0) {
        data.forEach((item) => {
          const filterData = bookList.filter((book) => book.id === item);
          console.log("data", filterData[0]);
          array.push(filterData[0]);
        });
      }
      setBookmark(array);
      // console.log(array);
    }
    fetchData();
  }, []);

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
            Bookmarks
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
  const renderBookList = () => {
    const renderItem = ({ item }) => (
      <>
        {/* {bookmarkData.includes(item.id) ? ( */}
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
              // width: 150,
              // height: 200,
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
        {/* ) : null} */}
      </>
    );
    return (
      <View
        style={{ paddingHorizontal: 15, paddingTop: 15, paddingBottom: 150 }}
      >
        <FlatList
          data={bookmarkData}
          showsHorizontalScrollIndicator={false}
          // ListHeaderComponent={() => (
          //   <>
          //     <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          //       Top 10 {item.name} Book
          //     </Text>
          //     <Text
          //       style={{
          //         fontSize: 14,
          //         fontWeight: "700",
          //         color: "#61605f",
          //         marginTop: 7,
          //         fontStyle: "italic",
          //         // textAlign: "justify",
          //       }}
          //     >
          //       {item.des}
          //     </Text>
          //   </>
          // )}

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
      {/* <ScrollView> */}
      {renderHeader()}
      {renderBookList()}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#edeceb",
    fontSize: 16,
    paddingVertical: 0,
    borderRadius: 10,
  },
  cardContainer: {
    marginVertical: 15,
    height: 45,
  },
  bookContainer: {
    width: "47%",
    borderRadius: 20,
    height: 300,
    marginRight: 15,
    position: "relative",
    marginTop: 25,
    marginRight: 15,
  },
  bookImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
});
