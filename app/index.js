import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Image, Text, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const slideAnim = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Loop the slider animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: 200,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -200,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFEFEF",
        }}
      >
        <Image
          source={require("./assets/logo.png")}
          style={{
            width: 300,
            height: 300,
            resizeMode: "contain",
            position: "relative",
            bottom: 100,
          }}
        />
        <Text
          style={{
            color: "#243642",
            fontWeight: "bold",
            fontSize: 18,
            position: "relative",
            bottom: 150,
          }}
        >
          Sell what you don't need
        </Text>
        <Text
          style={{
            color: "#bf242c",
            fontWeight: "bold",
            fontSize: 35,
            position: "absolute",
            bottom: 60,
            left: 20,
            right: 20,
            textAlign: "center",
          }}
        >
          Done with it
        </Text>
        <Animated.View
          style={{
            position: "absolute",
            bottom: 20,
            width: 150,
            height: 5,
            backgroundColor: "#bf242c",
            transform: [{ translateX: slideAnim }],
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
