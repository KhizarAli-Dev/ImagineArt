import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import Banner from "../Components/Banner";

const Models = () => {
  const router = useRouter();

  const ModelOneNavigate = () => {
    router.push("../Screens/Models/ModelOne");
  };

  const ModelTwoNavigate = () => {
    router.push("../Screens/Models/ModelTwo");
  };

  const ModelThreeNavigate = () => {
    router.push("../Screens/Models/ModelThree");
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <View>
        <Banner
          imageSource={require("../../assets/images/Banner/banner1.jpg")}
          imageText={"Turn Your Words"}
          imageSecondText={"In To Art"}
          onPress={ModelOneNavigate}
        />
        <Banner
          imageSource={require("../../assets/images/Banner/banner2.jpg")}
          imageText={"Image Words"}
          imageSecondText={"In Art "}
          onPress={ModelTwoNavigate}
        />
        <Banner
          imageSource={require("../../assets/images/Banner/banner3.jpg")}
          imageText={"Turn Words"}
          imageSecondText={"In Art "}
          onPress={ModelThreeNavigate}
        />
      </View>
    </ScrollView>
  );
};

export default Models;

const styles = StyleSheet.create({});
