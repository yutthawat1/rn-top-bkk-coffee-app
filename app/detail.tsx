import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Detail() {

  const params = useLocalSearchParams();
  const { name, district, description, image_url, phone, latitude, longtitude } = params;


  const handleCallPhone = () => {
    Linking.openURL(`tel:${phone}`);
  }

  //ฟังก์ชันเปิด GoogleMap/AppleMaps
  const handleOpenMap = () => {
    // สร้าง URL สำหรับ Google Maps และ Apple Maps
    const googleMapsUrl = `https://maps.google.com/?q=${latitude},${longtitude}`;
    const appleMapsUrl = `maps://maps.apple.com/?q=${params.name}&ll=${latitude},${longtitude}`;
 
    // Try to open Google Maps, fallback to Apple Maps
    Linking.canOpenURL(googleMapsUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(googleMapsUrl);
        } else {
          Linking.openURL(appleMapsUrl);
        }
      })
      .catch(() => {
        // Fallback to web Google Maps
        Linking.openURL(`https://maps.google.com/?q=${latitude},${longtitude}`);
      });
  };
 


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image_url as string }} style={styles.coverImage} />
      
      <Text style={styles.nameSty}>{name}</Text>
      <Text style={styles.districtSty}>{district}</Text>
      <Text style={styles.descriptionSty}>{description}</Text>

      <TouchableOpacity style={styles.btnPhoneSty} onPress={handleCallPhone}>
        <Text style={styles.phoneSty}>☎️ {phone}</Text>
      </TouchableOpacity>

      <Text style={[styles.nameSty, { fontSize: 15 }]}>📍 แผนที่ร้าน</Text>
      <MapView
        style={{ height: 300, marginVertical: 20, marginHorizontal: 20 }}
        initialRegion={{
          longitude: parseFloat(longtitude as string),
          latitude: parseFloat(latitude as string),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(latitude as string),
            longitude: parseFloat(longtitude as string),
          }}
        />
      </MapView>

      <TouchableOpacity style={styles.btnPhoneSty} onPress={handleOpenMap}>
        <Text style={styles.phoneSty}>📍 แผนที่ร้าน</Text>
      </TouchableOpacity>
      <View style={{ height: 40 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  coverImage: {
    width: '100%',
    height: 250,
  },

  nameSty: {
    fontFamily: "Kanit_700Bold",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
  },

  districtSty: {
    fontFamily: "Kanit_400Regular",
    color: "#747474",
    marginLeft: 20,

  },

  descriptionSty: {
    fontFamily: "Kanit_400Regular",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  btnPhoneSty: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    backgroundColor: "#1ba803",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  phoneSty: {
    fontFamily: "Kanit_400Regular",
    fontSize: 18,
    color: "#ffffff",
  },
})