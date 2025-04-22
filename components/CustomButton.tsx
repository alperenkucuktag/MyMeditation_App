import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface customButtonProps {
  Onpress: () => void;
  title: string;
  textstyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  Onpress,
  title,
  textstyles = "",
  containerStyles = "",
}: customButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white mb-6 ml-9 mr-8 rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={Onpress}
    >
      <Text className={`font-semibold text-lg ${textstyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
const styles = StyleSheet.create({});
