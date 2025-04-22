import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDİTATİON_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/CustomButton";

const meditate = () => {
  const { id } = useLocalSearchParams();

  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const secs = (sec % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <View className='flex-1'>
      <ImageBackground
        source={MEDİTATİON_IMAGES[Number(id) - 1]}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient
          colors={["transparent", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <Pressable
            onPress={() => router.back()}
            className='absolute top-16 left-6 z-10'
          >
            <AntDesign name='leftcircle' size={50} color='white' />
          </Pressable>
          <View className='flex-1 justify-center'>
            <View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
              <Text className='text-4xl text-blue-800'>
                {formatTime(seconds)}
              </Text>
            </View>
          </View>
          <View className='mb-5'>
            <CustomButton
              title={isRunning ? "Pause" : "Meditasyona Başla"}
              Onpress={() => setIsRunning((prev) => !prev)}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default meditate;
