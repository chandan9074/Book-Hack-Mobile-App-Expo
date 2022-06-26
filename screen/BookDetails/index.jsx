import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import { Provider, Modal, Toast } from "@ant-design/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

const BookDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardDetails, setCardDetails] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const { confirmPayment } = useConfirmPayment();

  useEffect(() => {
    async function fetchData() {
      const bookmarkData = await AsyncStorage.getItem("bookmarks");
      const data = JSON.parse(bookmarkData);
      if (data.includes(item.id)) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    }
    fetchData();
  }, []);

  const API_URL = "http://192.168.0.107:5000";
  // const handlePayment
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayment = async () => {
    setLoading(true);
    // console.log(cardDetails, email, name, number, address);
    if (!cardDetails?.complete || !email || !name || !number || !address) {
      Alert.alert(
        "Please enter the complete card details and other information"
      );
      setLoading(false);
    }
    const billingDetails = {
      // name,
      email: email,
      // number,
      // address,
    };
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      // console.log("clien", clientSecret);
      // console.log("sfd", error);
      if (error) {
        // console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
          setLoading(false);
        } else if (paymentIntent) {
          setLoading(false);
          alert("Payment Successful");
          navigation.navigate("Home");
          // console.log("Payment successful", paymentIntent);
        }
      }
    } catch (error) {
      console.log("hello", error);
    }
  };

  const handleModalVisible = () => {
    if (modalVisible === true) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
    // console.log("dhukche");
  };

  const handleAddBook = (value) => {
    if (value === "add") {
      setCount(count + 1);
    } else if (value === "minus" && count > 0) {
      setCount(count - 1);
    }
  };

  const handleBookmark = async (value) => {
    // Toast.info({
    //   content: 'Toast without mask',
    //   mask: false,
    // })
    const bookmarkData = await AsyncStorage.getItem("bookmarks");
    if (bookmarkData.length > 0) {
      const data = JSON.parse(bookmarkData);
      if (data.includes(value)) {
        const index = data.indexOf(value);
        if (index > -1) {
          data.splice(index, 1);
        }
        const newData = JSON.stringify(data);
        await AsyncStorage.setItem("bookmarks", newData);
        alert("Removed this from Bookmark");
        setIsBookmarked(false);
      } else {
        data.push(value);
        const newData = JSON.stringify(data);
        await AsyncStorage.setItem("bookmarks", newData);
        // console.log("hello", newData);
        alert("Added this in Bookmark");
        setIsBookmarked(true);
      }
      // console.log("bookmark", newData);
    }
    // localStorage.setItem();
    else {
      const data = [value];
      const newData = JSON.stringify(data);
      console.log("helllo", newData);
      await AsyncStorage.setItem("bookmarks", newData);
      alert("Added this in Bookmark");
      setIsBookmarked(true);
    }
  };

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
            Details Book
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

  const renderImage = () => {
    return (
      <View style={{ alignItems: "center", marginVertical: 40 }}>
        <View
          style={{
            width: 200,
            height: 300,
            elevation: 20,
            shadowColor: "black",
            // shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
          }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 20 }}
          />
        </View>
      </View>
    );
  };

  const renderCardPart = () => {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          padding: 20,
          backgroundColor: "white",
          width: "100%",
          borderRadius: 20,
          backgroundColor: "#7ea6a4",
          zIndex: 100,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              ${item.price.toFixed(2)}
            </Text>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 5,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#e3e8e8",
                fontWeight: "bold",
                fontSize: 14,
                marginTop: 5,
                fontStyle: "italic",
              }}
            >
              {item.authorName}
            </Text>
          </View>
          <View>
            <Provider>
              <TouchableOpacity
                style={{
                  backgroundColor: `${isBookmarked ? "white" : "#648f8d"}`,
                  padding: 7,
                  borderRadius: 50,
                }}
                onPress={() => handleBookmark(item.id)}
              >
                <Ionicons
                  name="bookmark"
                  size={20}
                  color={`${isBookmarked ? "#648f8d" : "white"}`}
                />
              </TouchableOpacity>
            </Provider>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            backgroundColor: "#648f8d",
            paddingVertical: 15,
            borderRadius: 20,
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                color: "#d9dbdb",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Rating
            </Text>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {item.rating}
            </Text>
          </View>
          {/* <View style={{height:5, width:1, backgroundColor:"white"}} /> */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                color: "#d9dbdb",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Number of Pages
            </Text>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {item.page} page
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                color: "#d9dbdb",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Viewer
            </Text>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {item.viewer}
            </Text>
          </View>
        </View>
        <Text style={{ color: "#1d1f1f", fontWeight: "bold", marginTop: 15 }}>
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "60%",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "#648f8d",

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#d9dbdb", fontWeight: "bold" }}>Qty</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 5,
                  borderRadius: 20,
                  backgroundColor: "#4f6b6a",
                }}
                onPress={() => handleAddBook("minus")}
              >
                <FontAwesome name="minus" size={13} color="#d9dbdb" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#d9dbdb",
                  marginHorizontal: 15,
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 5,
                  borderRadius: 20,
                  backgroundColor: "#4f6b6a",
                }}
                onPress={() => handleAddBook("add")}
              >
                <FontAwesome name="plus" size={13} color="#d9dbdb" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{
              // paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: "#d9dbdb",
              flex: 1,
              marginLeft: 10,
              borderRadius: 10,
            }}
            onPress={() => handleModalVisible()}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#4f6b6a",
                fontWeight: "bold",
              }}
            >
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderModal = () => {
    return (
      <Provider>
        <Modal
          popup
          visible={modalVisible}
          animationType="slide-up"
          onClose={handleModalVisible}
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
        >
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Payment Information
              </Text>
              <TouchableOpacity onPress={() => handleModalVisible()}>
                <Entypo name="circle-with-cross" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={{
                backgroundColor: "#edeceb",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 5,
                marginTop: 15,
              }}
              placeholder="Enter Your Name"
              onChange={(value) => setName(value.nativeEvent.text)}
            />
            <TextInput
              style={{
                backgroundColor: "#edeceb",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 5,
                marginTop: 10,
              }}
              placeholder="Enter Your Email"
              onChange={(value) => setEmail(value.nativeEvent.text)}
            />
            <TextInput
              style={{
                backgroundColor: "#edeceb",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 5,
                marginTop: 10,
              }}
              placeholder="Enter Your Phone Number"
              onChange={(value) => setNumber(value.nativeEvent.text)}
            />
            <TextInput
              style={{
                backgroundColor: "#edeceb",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 5,
                marginTop: 10,
              }}
              placeholder="Enter Your Address"
              onChange={(value) => setAddress(value.nativeEvent.text)}
            />
            <CardField
              postalCodeEnabled={true}
              placeholder={{ number: "4242 4242 4242 4242" }}
              cardStyle={styles.card}
              style={styles.cardContainer}
              onCardChange={(cardDetails) => {
                setCardDetails(cardDetails);
              }}
            />
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#ed8037",
                padding: 10,
                borderRadius: 5,
              }}
              disabled={loading}
              onPress={handlePayment}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {loading ? "Please Wait..." : "Pay"}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Provider>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      {renderHeader()}
      {renderImage()}
      {renderCardPart()}
      {renderModal()}
    </SafeAreaView>
  );
};

export default BookDetails;

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
});
