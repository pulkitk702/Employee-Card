import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeCards = ({ navigation }) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={data}
        style={{ flex: 1, backgroundColor: "white" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={styles.cardView(item.backgroundColor)}
              onPress={() => navigation.navigate("Card", { item })}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "20%" }}>
                  <Text style={styles.userLabel}>Name:</Text>
                  <Text style={styles.userLabel}>Address:</Text>
                  <Text style={styles.userLabel}>Email:</Text>
                  <Text style={styles.userLabel}>Phone:</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.userDetailText}>Rachel Green</Text>
                  <Text style={styles.userDetailText}>
                    103 Cal St, City, Country
                  </Text>
                  <Text style={styles.userDetailText}>
                    rachel.green@example.com
                  </Text>
                  <Text style={styles.userDetailText}>600-400-2000</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "25%",
                    borderWidth: 1,
                    marginHorizontal: 10,
                    borderRadius: 5,
                  }}
                >
                  <Image
                    source={require("../../public/Images/Users.png")}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default EmployeeCards;
const styles = StyleSheet.create({
  userLabel: {
    fontFamily: "Urbanist",
    fontSize: 15,

    fontWeight: "bold",
    lineHeight: 20,
    color: "white",
  },
  userDetailText: {
    fontFamily: "Urbanist",
    fontSize: 13,

    fontWeight: "600",
    lineHeight: 20,
    color: "white",
  },
  cardView: (backgroundColor) => ({
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    backgroundColor:
      backgroundColor == "white"
        ? "black"
        : backgroundColor == "yellow"
        ? "red"
        : backgroundColor,
    elevation: 4,
  }),
});
