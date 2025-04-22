import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
const affirmations = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text className='text-zinc-50 ml-2 text-3xl font-bold'>
            Düşünceni Değiştir
          </Text>
          <View className='ml-2'>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default affirmations;
