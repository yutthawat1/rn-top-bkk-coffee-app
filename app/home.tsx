import { supabase } from '@/services/supabase';
import { CoffeeShop } from '@/types';
import { router } from 'expo-router';
import React, { useEffect, useState, } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  // สร้าง state เพื่อเก็บข้อมูลที่ดึงมาจาก supabase
  // และนำไปใช้กับ Component ที่จะเอาข้อมมูลไปแสดงบนหน้าจอ

  const [shops, setShops] = useState<CoffeeShop[]>([]);

  useEffect(() => {
    // ดึงข้อมูลจาก supabase มาเก็บไว้ใน state
    const fetchData = async () => {
      const { data, error } = await supabase.from("coffee_shops_tb").select("*").order('name', {ascending: true});
      if (error) {
        Alert.alert("คำเตือน", "เกิดข้อผิดพลาดในการดึง กรุณาลองใหม่อีกครั้ง");
        return;
      }
      // ถ้าไม่มี error ให้ set ข้อมูลที่ดึงมาเก็บไว้ใน state
      setShops(data as CoffeeShop[]);
    };

    // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลเมื่อ component ถูก mount ขึ้นมา
    fetchData();
  }, []);


  const showListShop = ({ item }: { item: CoffeeShop }) => (
    <TouchableOpacity
                    onPress={() => router.push({
                      pathname: "/detail",
                      params: {
                        name: item.name,
                        district: item.district,
                        description: item.description,
                        image_url: item.image_url,
                        phone: item.phone,
                        latitude: item.latitude,
                        longitude: item.longtitude,
                      },
                    })}
                    style={styles.cradListShop}>
      <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100}} />
      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <Text style={styles.txtSty1}>{item.name}</Text>
        <Text style={styles.txtSty2}>🚗 {item.district}</Text>
      </View>
      
    </TouchableOpacity>
  )
  return (
    <View>
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={showListShop}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cradListShop: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    // margin: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  txtSty1: {
    fontFamily: "Kanit_700Bold",
  },
  
  txtSty2: {
    fontFamily: "Kanit_400Regular",
    color: "#797979",
  }
})