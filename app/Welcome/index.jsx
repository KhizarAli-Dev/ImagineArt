import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter()


  const handleGetStarted = () => {
    router.push('/(tabs)/Home')
  };

  return (
    <View>
      <Image
        source={require("../../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 600,
        }}
      />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeHeading}>Welcome To ImagineArt</Text>
        <Text style={styles.subHeading}>Create AI Art in just one Click</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    padding: 25,
    marginTop: -80,
    backgroundColor: "white",
    height: 600,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 5,
  },
  welcomeHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
  subHeading: {
    color: "gray",
    marginTop: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "black", // Customize the color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 40,
    alignSelf: "center", // Center the button
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WelcomeScreen;
