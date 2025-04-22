import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();

  return (
    <View className='flex-1'>
      <ImageBackground
        source={beachImage}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className='flex-1 px-1 justify-between'>
            <View>
              <Text className='text-center p-4 text-white font-bold text-4xl'>
                Basit Meditasyon
              </Text>
              <Text className='text-center  text-white text-regular text-2xl'>
                Herkes için Basit Meditasyonlar
              </Text>
            </View>
            <View>
              <CustomButton
                Onpress={() => router.push("/nature-meditate")}
                title='Hadi Başlayalım'
              />
            </View>
            <StatusBar style='light' />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({});
