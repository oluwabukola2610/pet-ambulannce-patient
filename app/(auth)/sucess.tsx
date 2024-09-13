import React from "react";
import { View, Text, Image } from "react-native";
import { image } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function Success() {

  return (
    <View className="flex-1 relative">
      <Image
        source={image.plainbg}
        className="absolute inset-0 w-full h-full"
      />
      <View className="p-6 z-10 absolute top-16 w-full h-full">
        <Image source={image.logo} className="mb-8" />

        <View className="flex-1 mt-20 items-center">
          <Image source={image.sucess} className="mb-6" />
          <Text className="text-3xl font-normal text-general mb-4">Great!</Text>
          <Text className="text-center mb-4">
            Your account was successfully created.
          </Text>
        </View>
      </View>

      {/* Continue Button */}
      <View className="p-6 absolute bottom-9 left-0 right-0 z-10">
        <CustomButton
          title="Continue"
          handlePress={() => {
            router.push("/home"); 
          }}
          containerStyles="bg-green-600 py-3 rounded-lg"
          textStyles="text-white text-lg font-semibold"
        />
      </View>
    </View>
  );
}
