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
import React, { useState } from "react";
import {
  Provider,
  Button,
  Modal,
  Toast,
  WhiteSpace,
  WingBlank,
} from "@ant-design/react-native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

const BookDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardDetails, setCardDetails] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  // const handlePayment

  const handlePayment = async () => {
    if (!cardDetails?.complete || !email || !name || !number || !address) {
      Alert.alert(
        "Please enter the complete card details and other information"
      );
    }
    const billingDetails = {
      name,
      email,
      number,
      address,
    };
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
          <View
            style={{ backgroundColor: "white", padding: 7, borderRadius: 50 }}
          >
            <Ionicons name="bookmark" size={20} color="#4f6b6a" />
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
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Payment Information
            </Text>
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
                Pay
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
