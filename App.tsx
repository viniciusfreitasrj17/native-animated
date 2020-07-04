import React, { useState } from "react";
import { StyleSheet, View, Animated } from "react-native";

export default function App() {
  const [largura, setLargura] = useState(new Animated.Value(0));
  const [altura, setAltura] = useState(new Animated.Value(30));

  Animated.sequence([
    Animated.timing(largura, {
      toValue: 200,
      duration: 2000,
    }),
    Animated.timing(altura, {
      toValue: 350,
      duration: 1000,
    }),
  ]).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: largura,
          height: altura,
          backgroundColor: "#222",
        }}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
