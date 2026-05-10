import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the home screen after 3 seconds
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <View  style={styles.container}>
        <Image
          source={require("@/assets/images/coffeeshop.png")}
          style={styles.imgSty}
          />
      <Text style={styles.txtSty1}>
        Top Bangkok Coffees
      </Text>

      <Text style={styles.txtSty2}>ที่สุดของร้านกาแฟในกรุงเทพ</Text>

      <ActivityIndicator size="large" color="#000" style={{marginTop: 20}} />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imgSty: {
    width: 200,
    height: 200,
  },

  txtSty1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#000",
  },

  txtSty2: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
  },
})