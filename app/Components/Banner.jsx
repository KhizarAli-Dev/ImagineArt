import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Banner = ({ imageSource, imageText, imageSecondText, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.bannerContainer}>
          <Image style={styles.imageStyle} source={imageSource} />

          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{imageText}</Text>
            <Text style={styles.textStyle}>{imageSecondText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 20,
  },
  imageStyle: { width: "100%", height: 140, borderRadius: 15 },
  textContainer: {
    position: "absolute",
    padding: 15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
