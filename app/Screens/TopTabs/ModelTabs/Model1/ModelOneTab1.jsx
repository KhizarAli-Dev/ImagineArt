import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { encode } from "base64-arraybuffer";

const ModelOneTab1 = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!text) {
      Alert.alert("Error", "Please Enter a Prompt");
      return;
    }
    setLoading(true);
    setImage(null);
    try {
      const response = await axios.post(
        process.env.EXPO_PUBLIC_TURBO,
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        }
      );

      const base64Image = `data:image/png;base64,${encode(response.data)}`;
      setImage(base64Image);
    } catch (error) {
      Alert.alert(
        "Error",
        `Failed to Generate Image: ${error.response?.data || error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Text to Image Generator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Prompt"
        value={text}
        onChangeText={setText}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.disabledButton]}
        onPress={generateImage}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Generating..." : "Generate Image"}
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator size="large" color="#007BFF" style={styles.loader} />
      )}
      {image && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

export default ModelOneTab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 0.5,
    // borderColor: "#444",
    borderRadius: 20,
    marginBottom: 16,
    // backgroundColor: "#333",
    // color: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: "black",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  loader: {
    marginVertical: 20,
  },
  imageContainer: {
    width: 320,
    height: 320,
    // backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 5,
    // shadowColor: "#000",
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // shadowOffset: { width: 0, height: 4 },
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
