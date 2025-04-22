import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";

import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmationImages, setAffirmation] = useState<GalleryPreviewData>();

  const [sentences, setSentences] = useState<string[]>();
  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationdata = AFFIRMATION_GALLERY[idx].data;
      const affirmationTostart = affirmationdata.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationTostart) {
        setAffirmation(affirmationTostart);

        const affirmationToArray = affirmationTostart.text.split(".");

        if (affirmationToArray[affirmationToArray.length - 1] === "") {
          affirmationToArray.pop();
        }

        setSentences(affirmationToArray);
        break;
      }
    }
  }, []);

  return (
    <View className='flex-1'>
      <ImageBackground
        source={affirmationImages?.image}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className='absolute top-16 left-6 z-10'
          >
            <AntDesign name='leftcircle' size={50} color='white' />
          </Pressable>
          <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
            <View className='h-full justify-center'>
              <View className='h-6/5  ml-1 justify-center'>
                <Text className='text-white text-3xl mb-12 font-bold text-center'>
                  {affirmationImages?.text}
                </Text>
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
